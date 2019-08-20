using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace CCAPPUI.Controllers
{
    public class UploadPhotosController : ApiController
    {

        [System.Web.Http.HttpPost]
        public void UploadPicture(Picture picture)
        {
            foreach (var file in picture.Files)
            {
                if (file.ContentLength > 0)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/images"), fileName);
                    file.SaveAs(path);
                }
            }
            
        }


    }
    public class Picture
    {
        public IEnumerable<HttpPostedFileBase> Files { get; set; }
    }
}