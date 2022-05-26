<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div id="anchor-navigator" class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <a href="#widgets">
                        A
                    </a>
                </li>
                <li class="list-group-item">
                    <a href="#info">
                        B
                    </a>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#contacts">
                        C
                    </a>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#orders">
                        D
                    </a>
                </li>
            </ul>
        </div>
        <section id="widgets">
            <iw-hello-world msg="I am one"></iw-hello-world>

        </section>
        <section id="info">
            <iw-hello-world msg="I am two"></iw-hello-world>

        </section>
        <section id="contacts">
            <iw-hello-world msg="I am three"></iw-hello-world>

        </section>
        <section id="orders">
            <iw-hello-world msg="I am four"></iw-hello-world>

        </section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    export default Vue.extend({
        components: {
            "iw-hello-world": HelloWorld
        }
    });
</script>