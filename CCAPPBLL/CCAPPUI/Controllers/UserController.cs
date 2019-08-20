using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;

namespace CCAPPUI.Controllers
{
    public class UserController : ApiController
    {

        [HttpPost]
        public LFGUserOth ValidateLFGUser(LFGUserOth objLFGUser)
        {
            return UserDAL.ValidateLFGUser(objLFGUser);
        }

        [HttpGet]
        public string GetValidateAccess(string EmpCode)
        {
            return UserDAL.GetValidateAccess(EmpCode);
        }




    }
}