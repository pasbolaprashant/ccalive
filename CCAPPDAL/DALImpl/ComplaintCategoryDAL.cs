using CCAPPBLL.CustomModel;
using CCAPPDAL.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;



using System.Data;


using System.Data.SqlClient;
using System.ComponentModel;
using System.Transactions;


namespace CCAPPDAL.DALImpl
{




	public class ComplaintCategoryDAL
    {




		public static bool BulkInsertDataTable(DataTable dataTable)
		{
			bool isSuccuss;
			try
			{

				string connectionStringTarget = System.Configuration.ConfigurationManager.AppSettings["BulkUploadConnectionString"].ToString();
				//  string connectionStringTarget = "data source=PHOENIXPRD01V'\'PHOENIXPRD;initial catalog=ProductivityDashboardB;integrated security=True;";
				using (SqlConnection SqlConnectionObj = new SqlConnection(connectionStringTarget))
				{
					SqlConnectionObj.Open();
					SqlBulkCopy bulkCopy = new SqlBulkCopy(SqlConnectionObj, SqlBulkCopyOptions.TableLock | SqlBulkCopyOptions.FireTriggers | SqlBulkCopyOptions.UseInternalTransaction, null);
					bulkCopy.DestinationTableName = "[tblComplaintCategoryMaster]";
					bulkCopy.WriteToServer(dataTable);
				}
				isSuccuss = true;
			}
			catch (Exception ex)
			{
				isSuccuss = false;
			}
			return isSuccuss;
		}









		public static List<ComplaintCategoryModel> GetComplaintCategory()
        {
            List<ComplaintCategoryModel> ComplaintCategoryList = null;
            using (var dbContext = new CustomerComplaintEntities())
            {
                var requestComplaintCategory= dbContext.tblComplaintCategoryMasters.Where(x=>x.IsDeleted==false).ToList();


                ComplaintCategoryList = requestComplaintCategory.Select(s => new ComplaintCategoryModel
                {
                    ComplaintCategory_ID=s.ComplaintCategory_ID,
                    CaomplaintCategory = s.CaomplaintCategory

                }).ToList();

            }
            return ComplaintCategoryList;
        }

        public static string delete(ComplaintCategoryBLL obj)
        {
            using (var CCDcontext = new CustomerComplaintEntities())
            {
                var ComplaintCategorydelete = CCDcontext.tblComplaintCategoryMasters.Where(c => c.ComplaintCategory_ID == obj.ComplaintCategoryID).FirstOrDefault();
                if (ComplaintCategorydelete != null)
                {


                    ComplaintCategorydelete.IsDeleted = true;
                    ComplaintCategorydelete.ModifiedDate = DateTime.Now;
                    CCDcontext.Entry(ComplaintCategorydelete).State = EntityState.Modified;
                    CCDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }

        }




        public static string update(ComplaintCategoryBLL obj)
        {
            using (var CCUcontext = new CustomerComplaintEntities())
            {
                var ComplaintCategoryupdate = CCUcontext.tblComplaintCategoryMasters.Where(c => c.ComplaintCategory_ID.Equals(obj.ComplaintCategoryID)).FirstOrDefault();

                if (ComplaintCategoryupdate != null)
                {


                    ComplaintCategoryupdate.CaomplaintCategory = obj.ComplaintCategory.ToUpper().Trim();

                    ComplaintCategoryupdate.ModifiedBy = "Admin";
                    ComplaintCategoryupdate.ModifiedDate = DateTime.Now;


                    CCUcontext.Entry(ComplaintCategoryupdate).State = EntityState.Modified;
                    CCUcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }
        }






        public static List<ComplaintCategoryBLL> List()
        {
            using (var CCLcontext = new CustomerComplaintEntities())
            {
                List<ComplaintCategoryBLL> objlist = null;

                var ComplaintCategoryValue = CCLcontext.tblComplaintCategoryMasters.Where(x => x.IsDeleted == false).ToList();

                objlist = ComplaintCategoryValue.Select(x => new ComplaintCategoryBLL()
                {

                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategoryID = x.ComplaintCategory_ID,

                }).ToList();
                return objlist;

            }

        }



        public static string save(ComplaintCategoryBLL obj)
        {
            using (var CCScontext = new CustomerComplaintEntities())
            {
                var ComplaintCategorySave = CCScontext.tblComplaintCategoryMasters.Where(c => c.CaomplaintCategory.Trim().ToUpper().Equals(obj.ComplaintCategory.Trim().ToUpper()) && c.IsDeleted == true).FirstOrDefault();

                if (ComplaintCategorySave == null)
                {
                    tblComplaintCategoryMaster tblComplaintCategory = new tblComplaintCategoryMaster();

                    tblComplaintCategory.CaomplaintCategory = obj.ComplaintCategory.ToUpper().Trim();


                    tblComplaintCategory.IsDeleted = false;
                    tblComplaintCategory.CreatedBy = "Admin";
                    tblComplaintCategory.CreationDate = DateTime.Now;



                    CCScontext.Entry(tblComplaintCategory).State = EntityState.Added;
                    CCScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }



		public static ComplaintCategoryBLL GetComplaintCategory(string CaomplaintCategory)
		{
			using (var BLcontext = new CustomerComplaintEntities())
			{
				ComplaintCategoryBLL obj = new ComplaintCategoryBLL();

				var ComplaintValue = BLcontext.tblComplaintCategoryMasters.Where(x => x.CaomplaintCategory.Equals(CaomplaintCategory)).FirstOrDefault();
				if (ComplaintValue != null)
				{

					obj.ComplaintCategory = ComplaintValue.CaomplaintCategory;
					obj.ComplaintCategoryID = ComplaintValue.ComplaintCategory_ID;

				}

				return obj;

			}

		}


	}
}
