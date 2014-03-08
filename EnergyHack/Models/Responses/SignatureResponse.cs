using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EnergyHack.Models.Responses
{
    public class SignatureResponse
    {

        public float EnergyConsumed { get; set; }

        public string Appliance { get; set; }

        List<float> signalList { get; set; }
    }
}