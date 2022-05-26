import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import MockAdapter from "axios-mock-adapter";

import { initMockApis } from "../../../mocks/mock-service";

//global axios api
const api = createInstance(location.origin + "/init-appData");
export { api };

//global mock api
const mockApi = createMockAdapter();
export { mockApi };

//VueAxios used for this.$http usage in Vue files
Vue.use(VueAxios, api);
//AxiosMockAdapterPlugin used for this.$httpMock usage in Vue files
Vue.use(AxiosMockAdapterPlugin);

function createInstance(baseURL: string) {
    var instance = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    //global interceptor for unauthorized calls
    instance.interceptors.response.use(undefined, function (error: any) {
        return new Promise(function (resolve, reject) {
            const originalRequest = error.config;
            console.log("api error", originalRequest);
            if (error.response.status === 401 && !originalRequest._retry) {
                //add logic
            }
            reject(error);
        });
    });
    return instance;
}

//used for this.$httpMock usage in Vue files
function AxiosMockAdapterPlugin() {
    if (!enviromentIsDev()) return;
    initMockApis();
    Vue.prototype.$httpMock = mockApi;
}

function createMockAdapter(): MockAdapter {
    var adapter = new MockAdapter(api, { onNoMatch: "throwException", delayResponse: 1500 });
    if (!enviromentIsDev()) adapter.restore(); //if not dev environment, remove mocking
    return adapter;
}

function enviromentIsDev(): boolean {
    return process.env.NODE_ENV === "development";
}

export async function setAxiosBaseUrl(baseUrl: string) {
    api.defaults.baseURL = location.origin + "/" + baseUrl;
}
