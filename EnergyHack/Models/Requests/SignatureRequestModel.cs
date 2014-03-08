using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace EnergyHack.Models.Requests
{
    [DataContract]
    public class SignatureRequestModel
    {
        [DataMember]
        public string Appliance { get; set; }
    }
}