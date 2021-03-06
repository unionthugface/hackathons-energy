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
            applianceSignature.SignalDate = DateTime.Parse(reader.GetString(2));

            return applianceSignature;

        }

        public static List<SignatureResponse> GetInfoByAppliance(string applianceName)
        {

            List<SignatureResponse> sigList = null;

            string storedProc = "dbo.GetApplianceInformation";

            EnergyHackData.ExecuteCmd(
                GetConnection,
                storedProc,
                map: delegate(IDataReader reader, short set){

                    if(sigList == null){

                        sigList = new List<SignatureResponse>();
                    }

                    sigList.Add(MapAppliance(reader));
                }
                ,inputParamMapper: delegate(SqlParameterCollection param){

                    param.AddWithValue("@Appliance", applianceName);

                });

            return sigList;

        }

        public static List<SignatureResponse> GetInfoByDate(string date)
        {
            List<SignatureResponse> sigList = null;

            string storedProc = "dbo.GetPieInfo";

            EnergyHackData.ExecuteCmd(
                
                GetConnection,
                storedProc,
                map: delegate(IDataReader reader, short set){

                    if(sigList == null){

                        sigList = new List<SignatureResponse>();

                    }

                    sigList.Add(MapAppliance(reader));
                }
                ,inputParamMapper: delegate(SqlParameterCollection param){

                    param.AddWithValue("Date", String.Format("{0:s}", DateTime.Parse(date)));
                });

            return sigList;

        }

    }
}