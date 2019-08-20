using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPDAL.DALImpl;
using CCAPPBLL.CustomModel;

namespace CCAPPUI.Controllers
{
    public class CompensationController : ApiController
    {
        public IList<PendingRequestInfo> GetPendingCompensationRequest(string EmpCode)
        {
            return CompensationFormDAL.GetPendingCompensationRequest(EmpCode);
        }

        public string AddCompensationForm(ComplaintCompensationInfo obj)
        {
            return CompensationFormDAL.CreateCompensation(obj);
        }


        [HttpGet]
        public List<CompensationTypeModel> GetCompensationTypes()
        {
            return CompensationFormDAL.GetCompensationTypes();
        }
        [HttpGet]
        public List<SettlementModeModel> GetSettlementModes()
        {
            return CompensationFormDAL.GetSettlementModes();
        }



        [HttpPost]
        public string ReSubmit([FromBody]ComplaintCompensationInfoReconsider obj)
        {
          return CompensationFormDAL.ReSubmit(obj);
        }

    }
}