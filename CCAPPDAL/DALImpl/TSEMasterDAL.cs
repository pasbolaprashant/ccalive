using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DbContext;

namespace CCAPPDAL.DALImpl
{
	public class TSEMasterDAL
	{


		public static string save(IList<TSEMasterBLL> obj)
		{
			using (var ADcontext = new CustomerComplaintEntities())
			{

				foreach (var i in obj)
				{

					tblTSEMaster tblTSE = new tblTSEMaster()
					{
						
						EmpCode = i.EmpCode,

						IsActive = true

					};
					ADcontext.Entry(tblTSE).State = System.Data.Entity.EntityState.Added;
					ADcontext.SaveChanges();
				}


			}
			return "success";

		}





		public static string Update(TSEMasterBLLObj obj)
		{
			using (var TSEContext = new CustomerComplaintEntities())
			{


				foreach (var i in obj.TSEMasterBLL)
				{
					var TSEupdate = TSEContext.tblTSEMasters.Where(x => x.TSE_Id == i.TSEID).FirstOrDefault();


					if (TSEupdate != null)
					{
						TSEupdate.EmpCode = i.EmpCode.ToUpper();




						TSEContext.Entry(TSEupdate).State = System.Data.Entity.EntityState.Modified;
						TSEContext.SaveChanges();
					}

					else

					{
						tblTSEMaster tblMatrix = new tblTSEMaster()

						{
							EmpCode = i.EmpCode.ToUpper(),
							IsActive = true,
							



						};


						TSEContext.Entry(tblMatrix).State = System.Data.Entity.EntityState.Added;
						TSEContext.SaveChanges();
					}
				}
			}
			return "success";
		}







		public static string Delete(TSEMasterBLL obj)
		{
			using (var DeleteContext = new CustomerComplaintEntities())
			{
				var Delete = DeleteContext.tblTSEMasters.Where(c => c.TSE_Id == obj.TSEID).FirstOrDefault();
				if (Delete != null)
				{


					Delete.IsActive = false;


					DeleteContext.Entry(Delete).State = System.Data.Entity.EntityState.Modified;
					DeleteContext.SaveChanges();


					return "success";
				}
				return "error";
			}

		}



		
		public static List<TSEMasterBLL> List()
		{
			using (var TSEContext = new CustomerComplaintEntities())
			{
				List<TSEMasterBLL> objlist = null;

				var TSE = TSEContext.tblTSEMasters.Where(x => x.IsActive == true).ToList();

				objlist = TSE.Select(x => new TSEMasterBLL()
				{
					EmpCode = x.EmpCode,
					
					TSEID = x.TSE_Id,

				}).ToList();
				return objlist;

			}

		}





		//public static List<TSEMasterBLL>List()
		//{
		//	using (var TSEContext = new CustomerComplaintEntities())
		//	{
		//		List<TSEMasterBLL> objlist = null;

		//		var TSE = TSEContext.tblTSEMasters.Where(x=>x.IsActive==true).ToList();

		//		objlist = TSE.Select(x => new TSEMasterBLL()
		//		{
		//				EmpCode= x.EmpCode,
		//				Area = x.Area,
		//				TSEID = x.TSE_Id,

		//		}).ToList();
		//		return objlist;

		//	}

		//}
		//public static string Save(TSEMasterBLL obj)
		//{

		//	using (var TSEContext = new CustomerComplaintEntities())
		//	{
		//		var TSESave = TSEContext.tblTSEMasters.Where(c => c.Area.Trim().ToUpper().Equals(obj.Area.Trim().ToUpper())).FirstOrDefault();

		//		if (TSESave == null)
		//		{
		//			tblTSEMaster tblTSE = new tblTSEMaster();

		//			tblTSE.Area = obj.Area.ToUpper().Trim();
		//			tblTSE.EmpCode = obj.EmpCode.ToUpper().Trim();
		//			tblTSE.IsActive = true;



		//			TSEContext.Entry(tblTSE).State = System.Data.Entity.EntityState.Added;
		//			TSEContext.SaveChanges();

		//			return "success";
		//		}
		//		return "error";
		//	}
		//}

		//public static string Delete(TSEMasterBLL obj)
		//{
		//	using (var DeleteContext = new CustomerComplaintEntities())
		//	{
		//		var Delete = DeleteContext.tblTSEMasters.Where(c => c.TSE_Id == obj.TSEID).FirstOrDefault();
		//		if (Delete != null)
		//		{


		//			Delete.IsActive = false;
		//			//Delete.ModifiedDate = DateTime.Now;
		//			DeleteContext.Entry(Delete).State = System.Data.Entity.EntityState.Modified;
		//			DeleteContext.SaveChanges();


		//			return "success";
		//		}
		//		return "error";
		//	}

		//}



		//public static string Update(TSEMasterBLL obj)
		//{
		//	using (var TSEContext = new CustomerComplaintEntities())
		//	{
		//		var Update = TSEContext.tblTSEMasters.Where(c => c.TSE_Id.Equals(obj.TSEID)).FirstOrDefault();

		//		if (Update != null)
		//		{


		//			Update.Area = obj.Area;
		//			Update.EmpCode = obj.EmpCode;


		//			Update.IsActive = true;


		//			TSEContext.Entry(Update).State = System.Data.Entity.EntityState.Modified;
		//			TSEContext.SaveChanges();

		//			return "success";
		//		}
		//		return "error";
		//	}

		//}


	}
}
