using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPDAL;
using CCAPPBLL;


namespace CCAPPUI.Controllers
{
    public class ProductController : ApiController
    {
        [HttpPost]
        public string save([FromBody] ProductBLL obj)
        {
            return ProductDAL.save(obj);
        }

        [HttpGet]
        public List<ProductBLL> List()
        {
            return ProductDAL.List();
        }
        [HttpPost]
        public string update([FromBody] ProductBLL obj)
        {
            return ProductDAL.update(obj);
        }
        [HttpPost]
        public string delete([FromBody] ProductBLL obj)
        {
            return ProductDAL.delete(obj);
        }


    }
}