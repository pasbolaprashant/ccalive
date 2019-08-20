using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;

namespace CCAPPUI.Controllers
{
	public class AdminController : ApiController

	{


		[HttpPost]
		public string save([FromBody] IList<AdminBLL> obj)
		{
			return AdminDAL.save(obj);
		}

		
		[HttpGet]
		public List<AdminBLL> List()
		{
			return AdminDAL.List();
		}
		[HttpPost]
		public string Delete([FromBody] AdminBLL obj)
		{
			return AdminDAL.Delete(obj);
		}
		[HttpPost]
		public string Update([FromBody] AdminBLLObj obj)
		{
			return AdminDAL.Update(obj);
		}
		
	}
}