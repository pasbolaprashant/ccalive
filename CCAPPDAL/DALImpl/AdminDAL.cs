using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DbContext;

namespace CCAPPDAL.DALImpl
{
	public class AdminDAL
	{

		public static string save(IList<AdminBLL> obj)
		{
			using (var ADcontext = new CustomerComplaintEntities())
			{

				foreach (var i in obj)
				{

					tblAdminMatrix tblAdmin = new tblAdminMatrix()
					{
						AdminName = i.AdminName,
						EmpCode = i.EmpCode,

						IsDeleted = false

					};
					ADcontext.Entry(tblAdmin).State = EntityState.Added;
					ADcontext.SaveChanges();
				}


			}
			return "success";

		}





		public static string Update(AdminBLLObj obj)
		{
			using (var ADUcontext = new CustomerComplaintEntities())
			{


				foreach (var i in obj.AdminBLL)
				{
					var Adminupdate = ADUcontext.tblAdminMatrices.Where(x => x.Admin_ID == i.AdminID).FirstOrDefault();


					if (Adminupdate != null)
					{
						Adminupdate.EmpCode = i.EmpCode.ToUpper();


						

						ADUcontext.Entry(Adminupdate).State = EntityState.Modified;
						ADUcontext.SaveChanges();
					}

					else

					{
						tblAdminMatrix tblMatrix = new tblAdminMatrix()

						{
							EmpCode = i.EmpCode.ToUpper(),
							IsDeleted = false,
							CreatedBy = obj.EmployeeCode,
							CreationDate = DateTime.Now

							
						};


						ADUcontext.Entry(tblMatrix).State = EntityState.Added;
						ADUcontext.SaveChanges();
					}
				}
			}
			return "success";
		}







		public static string Delete(AdminBLL obj)
		{
			using (var DeleteContext = new CustomerComplaintEntities())
			{
				var Delete = DeleteContext.tblAdminMatrices.Where(c => c.Admin_ID == obj.AdminID).FirstOrDefault();
				if (Delete != null)
				{


					Delete.IsDeleted = true;


					DeleteContext.Entry(Delete).State = EntityState.Modified;
					DeleteContext.SaveChanges();


					return "success";
				}
				return "error";
			}

		}



		public static List<AdminBLL> List()
		{
			using (var ADcontext = new CustomerComplaintEntities())
			{
				List<AdminBLL> objlist = null;

				var AdminValue = ADcontext.tblAdminMatrices.Where(x => x.IsDeleted == false).ToList();

				objlist = AdminValue.Select(x => new AdminBLL()
				{
					EmpCode = x.EmpCode,

					AdminID = x.Admin_ID




				}).ToList();
				return objlist;
			}
		}




	}
}
