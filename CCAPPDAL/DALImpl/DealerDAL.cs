using CCAPPBLL;
using CCAPPDAL.DbContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



using System.Data;


using System.Data.SqlClient;
using System.ComponentModel;
using System.Transactions;


namespace CCAPPDAL
{
   public class DealerDAL
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
					bulkCopy.DestinationTableName = "[tblDealerMaster]";
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





		public static List<DealerBLL> List()
        {
            using (var DLcontext = new CustomerComplaintEntities())
            {
                List<DealerBLL> objlist = null;

                var DealerValue = DLcontext.SP_GetDealerList().ToList();

                objlist = DealerValue.Select(x => new DealerBLL()
                {
                   DealerAddress = x.DealerAddress,
                   DealerCode = x.DealerCode,
                   DealerName = x.DealerName,
                   DealerID = x.Dealer_ID,
                   DepotName=x.DepotName,
                   DepotAddress=x.DepotAddress,
                   Area=x.Area,
                   ASM=x.ASM,
                   DepotCode=x.DepotCode,
                   DepotId=Convert.ToInt32(x.DepotId),
                   NH=x.NH,
                   Region=x.Region,
                   RM=x.RM,
                   SO=x.SO,
                   Territory=x.Territory,
                   CreatedBy=x.CreatedBy,
                   CreationDate=x.CreationDate

                }).ToList();
                return objlist;

            }

        }

        public static List<DepotBLL> DepotList()
        {
            using (var DLcontext = new CustomerComplaintEntities())
            {
                List<DepotBLL> objlist = null;

                var DealerValue = DLcontext.tblDepotMasters.Where(x=>x.IsActive==true).ToList();

                objlist = DealerValue.Select(x => new DepotBLL()
                {
                  
                    DepotName = x.DepotName,
                    DepotAddress = x.DepotAddress,
                  
                    DepotCode = x.DepotCode,
                    DepotId = x.DepotId,
                 
                    CreatedBy = x.CreatedBy,
                    CreatedDate=x.CreatedDate
                }).ToList();
                return objlist;

            }

        }




        public static string save(DealerBLL obj)
        {
            using (var DScontext = new CustomerComplaintEntities())
            {
                var DealerSave = DScontext.tblDealerMasters.Where(c => c.DealerName.Trim().ToUpper().Equals(obj.DealerName.Trim().ToUpper()) && c.IsDeleted == true).FirstOrDefault();

                if (DealerSave == null)
                {
                    tblDealerMaster tblDealer = new tblDealerMaster();

                    tblDealer.DealerName = obj.DealerName.ToUpper().Trim();
                    tblDealer.DealerAddress = obj.DealerAddress.ToUpper().Trim();
                    tblDealer.DealerCode = obj.DealerCode.ToUpper().Trim();
                    tblDealer.DepotId = Convert.ToInt32(obj.DepotId);
                    tblDealer.Area = obj.Area;
                    tblDealer.ASM = obj.ASM;
                    tblDealer.Territory = obj.Territory;
                    tblDealer.SO = obj.SO;
                    tblDealer.Region = obj.Region;
                    tblDealer.RM = obj.RM;

                    tblDealer.NH = obj.NH;
                    
                


                    tblDealer.IsDeleted = false;
                    tblDealer.CreatedBy = "Admin";
                    tblDealer.CreationDate = DateTime.Now;



                    DScontext.Entry(tblDealer).State = EntityState.Added;
                    DScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static string update(DealerBLL obj)
        {
            using (var DUcontext = new CustomerComplaintEntities())
            {
                var Dealerupdate = DUcontext.tblDealerMasters.Where(c => c.Dealer_ID.Equals(obj.DealerID)).FirstOrDefault();

                if (Dealerupdate != null)
                {


                    Dealerupdate.DealerName = obj.DealerName.ToUpper().Trim();
                    Dealerupdate.DealerCode = obj.DealerCode.ToUpper().Trim();
                    Dealerupdate.DealerAddress = obj.DealerAddress.ToUpper().Trim();
                    Dealerupdate.DepotId = Convert.ToInt32(obj.DepotId);
                    Dealerupdate.Area = obj.Area;
                    Dealerupdate.ASM = obj.ASM;
                    Dealerupdate.Territory = obj.Territory;
                    Dealerupdate.SO = obj.SO;
                    Dealerupdate.Region = obj.Region;
                    Dealerupdate.RM = obj.RM;

                    Dealerupdate.NH = obj.NH;


                    Dealerupdate.ModifiedBy = "Admin";
                    Dealerupdate.ModifiedDate = DateTime.Now;


                    DUcontext.Entry(Dealerupdate).State = EntityState.Modified;
                    DUcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }



        public static string delete(DealerBLL obj)
        {
            using (var DDcontext = new CustomerComplaintEntities())
            {
                var Dealerdelete = DDcontext.tblDealerMasters.Where(c => c.Dealer_ID == obj.DealerID).FirstOrDefault();
                if (Dealerdelete != null)
                {


                    Dealerdelete.IsDeleted = true;
                    Dealerdelete.ModifiedDate = DateTime.Now;
                    DDcontext.Entry(Dealerdelete).State = EntityState.Modified;
                    DDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }

        }



    }
}
