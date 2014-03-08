﻿using EnergyHack.Models.Requests;
using EnergyHack.Models.Responses;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace EnergyHack.Services
{
    public class EnergyService : BaseService
    {

        public static void TakeUserInput()
        {

        }

        public static void ChangeDate()
        {

        }

        public static SignatureResponse MapAppliance(IDataReader reader)
        {

            SignatureResponse applianceSignature = new SignatureResponse();
            applianceSignature.EnergyConsumed = reader.GetFloat(0);
            applianceSignature.Appliance = reader.GetString(1);

            return applianceSignature;

        }

        public static List<float> GetInfoByAppliance(string applianceName)
        {

            List<float> sigList = null;

            string storedProc = "dbo.GetApplianceInformation";

            EnergyHackData.ExecuteCmd(
                GetConnection,
                storedProc,
                map: delegate(IDataReader reader, short set){

                    if(sigList == null){

                        sigList = new List<float>();
                    }

                    sigList.Add(reader.GetFloat(0));
                }
                ,inputParamMapper: delegate(SqlParameterCollection param){

                    param.AddWithValue("@Appliance", applianceName);

                });

            return sigList;

        }

    }
}