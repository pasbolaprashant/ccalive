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
    public class ComplaintTypeDAL
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
					bulkCopy.DestinationTableName = "[tblComplaintTypeMaster]";
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





		public static List<ComplaintTypeModel> GetComplaintType(int id)
        {
            List<ComplaintTypeModel> ComplaintTypeList = null;
            using (var dbContext = new CustomerComplaintEntities())
            {
                var requestComplaintType = dbContext.tblComplaintTypeMasters.Where(x => x.ComplaintCategory_ID == id).ToList();

                ComplaintTypeList = requestComplaintType.Select(s => new ComplaintTypeModel
                {
                    ComplaintType_ID = s.ComplaintType_ID,
                    ComplaintType = s.ComplaintType,
                    IsSelected=false
                }).ToList();

            }
            return ComplaintTypeList;
        }

        public static string delete(ComplaintTypeBLL obj)
        {
            using (var CTDcontext = new CustomerComplaintEntities())
            {
                var ComplaintTypedelete = CTDcontext.tblComplaintTypeMasters.Where(c => c.ComplaintType_ID == obj.ComplaintCategoryID).FirstOrDefault();
                if (ComplaintTypedelete != null)
                {


                    ComplaintTypedelete.IsDeleted = true;
                    ComplaintTypedelete.ModifiedDate = DateTime.Now;
                    CTDcontext.Entry(ComplaintTypedelete).State = EntityState.Modified;
                    CTDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }

        }




        public static List<ComplaintTypeBLL> List()
        {
            using (var CTLcontext = new CustomerComplaintEntities())
            {
                List<ComplaintTypeBLL> objlist = null;

                var ComplaintTypeValue = CTLcontext.getCategoryList().ToList();

                objlist = ComplaintTypeValue.Select(x => new ComplaintTypeBLL()
                {

                    ComplaintType = x.ComplaintType,
                    ComplaintCategoryID = x.ComplaintCategory_ID,
                    ComplaintTypeID = x.ComplaintType_ID,
                    ComplaintCategory = x.CaomplaintCategory

                }).ToList();
                return objlist;

            }

        }



        public static string save(ComplaintTypeBLL obj)
        {
            using (var CTScontext = new CustomerComplaintEntities())
            {
                var ComplaintTypeSave = CTScontext.tblComplaintTypeMasters.Where(c => c.ComplaintType.Trim().ToUpper().Equals(obj.ComplaintType.Trim().ToUpper()) && c.IsDeleted == true).FirstOrDefault();

                if (ComplaintTypeSave == null)
                {
                    tblComplaintTypeMaster tblComplaintType = new tblComplaintTypeMaster();

                    tblComplaintType.ComplaintType = obj.ComplaintType.ToUpper().Trim();
                    tblComplaintType.ComplaintType_ID = obj.ComplaintTypeID;
                    tblComplaintType.ComplaintCategory_ID = obj.ComplaintCategoryID;

                    tblComplaintType.IsDeleted = false;
                    tblComplaintType.CreatedBy = "Admin";
                    tblComplaintType.CreationDate = DateTime.Now;



                    CTScontext.Entry(tblComplaintType).State = EntityState.Added;
                    CTScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static string update(ComplaintTypeBLL obj)
        {
            using (var CCTcontext = new CustomerComplaintEntities())
            {
                var ComplaintTypeupdate = CCTcontext.tblComplaintTypeMasters.Where(c => c.ComplaintType_ID.Equals(obj.ComplaintTypeID)).FirstOrDefault();

                if (ComplaintTypeupdate != null)
                {

                    ComplaintTypeupdate.ComplaintCategory_ID = obj.ComplaintCategoryID;
                    ComplaintTypeupdate.ComplaintType = obj.ComplaintType.ToUpper().Trim();

                    ComplaintTypeupdate.ModifiedBy = "Admin";
                    ComplaintTypeupdate.ModifiedDate = DateTime.Now;


                    CCTcontext.Entry(ComplaintTypeupdate).State = EntityState.Modified;
                    CCTcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }
        }
    }
}
