using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EnergyHack.Providers;
using EnergyHack.Interfaces;
using System.Data.SqlClient;

namespace EnergyHack.Services
{
    public class BaseService
    {
        protected static IDao EnergyHackData
        {
            get { return DataProvider.Instance; }
        }

        protected static SqlConnection GetConnection()
        {
            //might need to change the name of Server below
            return new System.Data.SqlClient.SqlConnection(
                System.Web.Configuration.WebConfigurationManager.ConnectionStrings["EnergyHack"].ConnectionString);
        }
    }
}