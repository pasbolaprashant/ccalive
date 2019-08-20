using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CCAPPUI.Controllers
{
    public class ComplaintController : ApiController
    {

        [HttpGet]
        public List<ComplaintTypeModel> GetComplaintType(int ComplaintCategoryId)
        {

            return ComplaintTypeDAL.GetComplaintType(ComplaintCategoryId);
        }

        [HttpGet]
        public List<ComplaintCategoryModel> GetComplaintCategory()
        {

            return ComplaintCategoryDAL.GetComplaintCategory();

        }


        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}