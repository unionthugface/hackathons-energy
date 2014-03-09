using EnergyHack.Models.Requests;
using EnergyHack.Models.Responses;
using EnergyHack.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EnergyHack.Controllers
{
    [RoutePrefix("api/home")]
    public class HomeApiController : ApiController
    {
        [Route("userinputsubmit")]
        [HttpPost]
        public HttpResponseMessage UserInputSubmit(UserInputRequest model)
        {
            UserInputResponse respModel = new UserInputResponse();

            return Request.CreateResponse(HttpStatusCode.OK, respModel);

        }

        [Route("appliancesignal")]
        [HttpPost]
        public HttpResponseMessage ApplianceSignal(SignatureRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            else
            {
                List<SignatureResponse> respModel = new List<SignatureResponse>();

                respModel = EnergyService.GetInfoByAppliance(model.Appliance);

                return Request.CreateResponse(HttpStatusCode.OK, respModel);
            }

        }



    }
}