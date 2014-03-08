using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EnergyHack.Interfaces;
using EnergyHack.Providers;

namespace EnergyHack
{
    public sealed class DataProvider
    {
        private DataProvider() { }

        public static IDao Instance
        {
            get
            {
                return SqlDao.Instance;
            }
        }
    }
}