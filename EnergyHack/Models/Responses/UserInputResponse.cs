using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnergyHack.Models.Responses
{
    public class UserInputResponse
    {
        public int Heaters { get; set; }

        public int Washers { get; set; }

        public int Dryers { get; set; }

        public int Ovens { get; set; }


    }
}