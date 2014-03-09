using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnergyHack.Controllers
{
    public class HomeController : Controller
    {
        //public ActionResult EnergyUse()
        //{
        //    return View();
        //}

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult UserForm()
        {
            ViewBag.Message = "Input your data";

            return View();
        }

        public ActionResult Recommendations()
        {
            ViewBag.Message = "Recommendations";

            return View();
        }

        public ActionResult EnergyUse()
        {
            ViewBag.Message = "Graphs";

            return View();
        }
    }
}