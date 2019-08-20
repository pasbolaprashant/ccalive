using CCAPPBLL.CustomModel;
using CCAPPBLL;
using CCAPPDAL.DALImpl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CCAPPUI.Controllers
{
    public class DealerMasterController : ApiController
    {
        [HttpGet]
        public List<DealerBLL> DealerDetails()
        {
            return  DealerMasterDAL.GetDealerDetails();
            
        }

        [HttpGet]
        public List<DealerBLL> GetdealerHander(long DealerID)
        {
            return DealerMasterDAL.GetdealerHander(DealerID);

        }





    }
}