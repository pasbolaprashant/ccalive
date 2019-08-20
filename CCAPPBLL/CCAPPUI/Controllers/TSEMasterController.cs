using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;

namespace CCAPPUI.Controllers
{
	public class TSEMasterController : ApiController
	{

		//[HttpGet]
		//public List<TSEMasterBLL>List()
		//{
		//	return TSEMasterDAL.List();
		//}

		//[HttpPost]
		//public string Save([FromBody] TSEMasterBLL obj)
		//{
		//	return TSEMasterDAL.Save(obj);

		//}
		//[HttpPost]
		//public string Delete([FromBody] TSEMasterBLL obj)
		//{
		//	return TSEMasterDAL.Delete(obj);
		//}
		//[HttpPost]
		//public string Update([FromBody] TSEMasterBLL obj)
		//{
		//	return TSEMasterDAL.Update(obj);
		//}
		[HttpPost]
		public string save([FromBody] IList<TSEMasterBLL> obj)
		{
			return TSEMasterDAL.save(obj);
		}


		[HttpGet]
		public List<TSEMasterBLL> List()
		{
			return TSEMasterDAL.List();
		}
		[HttpPost]
		public string Delete([FromBody] TSEMasterBLL obj)
		{
			return TSEMasterDAL.Delete(obj);
		}
		
		[HttpPost]
		public string Update([FromBody]  TSEMasterBLLObj obj)
		{
			return TSEMasterDAL.Update(obj);
		}

	}
}