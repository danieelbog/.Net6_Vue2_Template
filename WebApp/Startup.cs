using Microsoft.AspNetCore.SpaServices;
using VueCliMiddleware;

namespace Iwcp.Web.SPA.Application
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // NOTE: PRODUCTION Ensure this is the same path that is specified in your webpack output
            services.AddSpaStaticFiles(opt => opt.RootPath = "ClientApp/dist");
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var isTestingEnv = env.IsEnvironment("Test");

            if (env.IsDevelopment() || isTestingEnv)
                app.UseDeveloperExceptionPage();

            // NOTE: this is optional, it adds HTTPS to Kestrel
            app.UseHttpsRedirection();

            // NOTE: PRODUCTION uses webpack static files
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseSpa(spa =>
            {
                if (env.IsDevelopment() || isTestingEnv)
                    spa.Options.SourcePath = "ClientApp/dist";
                else
                    spa.Options.SourcePath = "dist";

                if (env.IsDevelopment())
                    spa.UseVueCli(npmScript: "serve");
                else if (isTestingEnv)
                    spa.UseVueCli(npmScript: "test");

            });
        }
    }
}
