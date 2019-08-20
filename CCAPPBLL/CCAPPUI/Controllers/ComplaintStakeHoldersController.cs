using CCAPPBLL;
using CCAPPDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CCAPPUI.Controllers
{
    public class ComplaintStakeHoldersController : ApiController
    {

        [HttpPost]
        public string save([FromBody] ComplaintStakeHoldersBLL obj)
        {
            return ComplaintStakeHoldersDAL.save(obj);
        }
        
        [HttpGet]
        public List<ComplaintStakeHoldersBLL> List()
        {
            return ComplaintStakeHoldersDAL.List();
        }

        [HttpPost]
        public string update([FromBody]IList<ComplaintStakeHoldersBLL> obj)
        {
            return ComplaintStakeHoldersDAL.update(obj);
        }
                
        [HttpGet]
        public List<BU_Model> GetBU()
        {
            return ComplaintStakeHoldersDAL.GetBU();
        }


        [HttpPost]

        public string Delete([FromBody]ComplaintStakeHoldersBLL data)
        {
            return ComplaintStakeHoldersDAL.Delete(data);

        }


    }
}
