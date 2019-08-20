using CCAPPBLL;
using CCAPPDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace CCAPPUI.Controllers
{
    public class FlowMatrixController : ApiController
    {

        [HttpPost]
        public string save([FromBody] IList<FlowMatrixBLL> obj)
        {
            return FlowMatrixDAL.save(obj);
        }

        //[HttpPost]
        //public string update([FromBody] IList<FlowMatrixBLL> obj)
        //{
        //    return FlowMatrixDAL.update(obj);
        //}
		[HttpGet]
		public List<FlowMatrixBLL> List()
		{
			return FlowMatrixDAL.List();
		}
		[HttpPost]
		public string Delete([FromBody] FlowMatrixBLL obj)
		{
			return FlowMatrixDAL.Delete(obj);
		}
		[HttpPost]
		public string Update([FromBody]List<FlowMatrixBLL> obj)
		{
			return FlowMatrixDAL.Update(obj);
		}
		//[HttpGet]
		//public List<FlowMatrixBLL> Matrix()
		//{
		//	return FlowMatrixDAL.Matrix();
		//}


	}
}