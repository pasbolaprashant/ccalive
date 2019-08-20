using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;
using Newtonsoft.Json;
using System.Data;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using OfficeOpenXml;
using CCAPPBLL;
using CCAPPDAL;


namespace CCAPPUI.Controllers
{
    public class ProductManufacturerLocationController : ApiController
    {
        [HttpPost]
        public string save([FromBody] ProductLocationModel obj)
        {
            return ProductManufacturerLocationDAL.save(obj);
        }

        [HttpGet]
        public List<ProductLocationModel> List()
        {
            return ProductManufacturerLocationDAL.List();
        }
        [HttpPost]
        public string update([FromBody] ProductLocationModel obj)
        {
            return ProductManufacturerLocationDAL.update(obj);
        }
        [HttpPost]
        public string delete([FromBody] ProductLocationModel obj)
        {
            return ProductManufacturerLocationDAL.delete(obj);
        }


     
    }
}
