using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace EnergyHack.Models.Requests
{
    [DataContract]
    public class UserInputRequest
    {
        [DataMember]
        public int Heaters { get; set; }

        [DataMember]
        public int Washers { get; set; }

        [DataMember]
        public int Dryers { get; set; }

        [DataMember]
        public int Ovens { get; set; }

    }
}