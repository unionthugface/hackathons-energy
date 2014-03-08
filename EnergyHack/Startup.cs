using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EnergyHack.Startup))]
namespace EnergyHack
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
