using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using CCAPPBLL;
using CCAPPDAL;
using CCAPPDAL.DbContext;
using System.Data.Entity;

using System.Data.SqlClient;
using System.ComponentModel;
using System.Transactions;


namespace CCAPPDAL.DALImpl
{
   public  class ProductManufacturerLocationDAL
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
                    bulkCopy.DestinationTableName = "[TblProductManufacturerLocation]";
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

        public static string delete(ProductLocationModel obj)
        {
            using (var PDcontext = new CustomerComplaintEntities())
            {
                var Productdelete = PDcontext.TblProductManufacturerLocations.Where(c => c.Location_Id == obj.Location_Id).FirstOrDefault();
                if (Productdelete != null)
                {


                    Productdelete.IsDeleted = true;
                    Productdelete.ModifiedDate = DateTime.Now;
                    PDcontext.Entry(Productdelete).State = EntityState.Modified;
                    PDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }

        }

        public static List<ProductLocationModel> List()
        {
            using (var PLcontext = new CustomerComplaintEntities())
            {
                List<ProductLocationModel> objlist = null;

                var ProductValue = PLcontext.TblProductManufacturerLocations.Where(x=>x.IsDeleted==false).ToList();

                objlist = ProductValue.Select(x => new ProductLocationModel()
                {
                    Location_Id=x.Location_Id,
                    ManufacturingLocation=x.ManufacturingLocation
                   
                }).OrderBy(x=>x.ManufacturingLocation).ToList();
                return objlist;

            }
        }



        public static string save(ProductLocationModel obj)
        {
            using (var PScontext = new CustomerComplaintEntities())
            {
                var ProductSave = PScontext.TblProductManufacturerLocations.Where(c => c.ManufacturingLocation.Trim().Equals(obj.ManufacturingLocation.Trim()) && c.IsDeleted == false).FirstOrDefault();

                if (ProductSave == null)
                {
                    TblProductManufacturerLocation ProductLocation = new TblProductManufacturerLocation();

                    ProductLocation.ManufacturingLocation = obj.ManufacturingLocation.Trim();

                    ProductLocation.IsDeleted = false;
                    ProductLocation.CreatedBy = "Admin";
                    ProductLocation.CreationDate = DateTime.Now;



                    PScontext.Entry(ProductLocation).State = EntityState.Added;
                    PScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static string update(ProductLocationModel obj)
        {
            using (var PUcontext = new CustomerComplaintEntities())
            {
                var Productupdate = PUcontext.TblProductManufacturerLocations.Where(c => c.Location_Id.Equals(obj.Location_Id)).FirstOrDefault();

                if (Productupdate != null)
                {
                    Productupdate.ManufacturingLocation = obj.ManufacturingLocation.Trim();
                    

                    Productupdate.ModifiedBy = "Admin";
                    Productupdate.ModifiedDate = DateTime.Now;


                    PUcontext.Entry(Productupdate).State = EntityState.Modified;
                    PUcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }





    }
}
