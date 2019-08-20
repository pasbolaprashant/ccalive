using CCAPPBLL.CustomModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL.DbContext;

using System.Data.Entity;
using CCAPPBLL;
using System.Data;
using System.Data.SqlClient;

namespace CCAPPDAL.DALImpl
{
    public class BatchAndMfgDAL
    {
        public static List<BatchAndMfgModel> GetBatchAndMfg(long ProductId)
        {
            List<BatchAndMfgModel> BatchAndMfg = null;
            using (var dbContext = new CustomerComplaintEntities())
            {
                // var data = dbContext.tblProductBatches.Where(x => x.Product_ID == ProductId && x.IsDeleted == false).ToList();
                  var data= dbContext.Get_ProductBatchInfo(ProductId).ToList();


                BatchAndMfg = data.Select(s => new BatchAndMfgModel
                {
                    ProductBatch_ID = s.ProductBatch_ID,
                    BatchNumber = s.BatchNumber,
                    ManufactureDate = s.ManufactureDate,
                    ShelfLife = s.ShelfLife,
                    ShelfLifeDate = s.ShelfLifeDate,
                    ProductCode=s.ProductCode,
                    ProductName=s.ProductName,
                    ProductShelfLife=s.ProductShelfLife
                }).ToList();
                return BatchAndMfg;
            }
        }






        public static string deleteProductBatch(productBatchModel obj)
        {
            using (var PDcontext = new CustomerComplaintEntities())
            {
                var ProductBatchdelete = PDcontext.tblProductBatches.Where(c => c.ProductBatch_ID == obj.ProductBatch_ID).FirstOrDefault();
                if (ProductBatchdelete != null)
                {
                    ProductBatchdelete.IsDeleted = true;
                    ProductBatchdelete.ModifiedBy = obj.CreatedBy;
                    ProductBatchdelete.ModifiedDate = DateTime.Now;
                    PDcontext.Entry(ProductBatchdelete).State = EntityState.Modified;
                    PDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }

        }


        public static string BatchSave(productBatchModel obj)
        {
            using (var PScontext = new CustomerComplaintEntities())
            {
                

                //int st =Convert.ToInt32(obj.ManufactureDate.Month+1 );
              
             //   string ManufacturedateTime = Convert.ToInt32(st)+"/" + Convert.ToString(obj.ManufactureDate.Day)+ "/" + obj.ManufactureDate.Year + " " +obj.ManufactureDate.TimeOfDay;

               // int pt = Convert.ToInt32(obj.ShelfLifeDate.Month + 1);

                //string dateTime = Convert.ToInt32(pt) + "/" + Convert.ToString(obj.ShelfLifeDate.Day) + "/" + obj.ShelfLifeDate.Year + " " + obj.ShelfLifeDate.TimeOfDay;



                var BatchSave = PScontext.tblProductBatches.Where(c => c.Product_ID == obj.ProductID && c.BatchNumber.Trim().ToUpper().Equals(obj.BatchNumber.Trim().ToUpper()) && c.IsDeleted == false).FirstOrDefault();

                if (BatchSave == null)
                {
                    tblProductBatch tblProductBatch = new tblProductBatch();
                    
                    
                   // DateTime dttime = Convert.ToDateTime(ManufacturedateTime);
                   // DateTime dttime1 = Convert.ToDateTime(dateTime);


                    tblProductBatch.BatchNumber = obj.BatchNumber.ToUpper().Trim();
                    tblProductBatch.Product_ID = obj.ProductID;
                    //var dt = dateTime;
                    tblProductBatch.ManufactureDate = obj.ManufactureDate; //dttime;
                    tblProductBatch.ShelfLife = obj.ShelfLife;
                    tblProductBatch.ShelfLifeDate = obj.ShelfLifeDate;

                    tblProductBatch.IsDeleted = false;
                    tblProductBatch.CreatedBy = obj.CreatedBy;
                    tblProductBatch.CreationDate = DateTime.Now;



                    PScontext.Entry(tblProductBatch).State = EntityState.Added;
                    PScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static string UpdateBatch(productBatchModel obj)
        {
            using (var PUcontext = new CustomerComplaintEntities())
            {
                var ProductBatchupdate = PUcontext.tblProductBatches.Where(c => c.ProductBatch_ID.Equals(obj.ProductBatch_ID)).FirstOrDefault();

                if (ProductBatchupdate != null)
                {


                    ProductBatchupdate.BatchNumber = obj.BatchNumber;
                    ProductBatchupdate.Product_ID = obj.ProductID;
                    ProductBatchupdate.ManufactureDate = obj.ManufactureDate;
                    ProductBatchupdate.ShelfLife = obj.ShelfLife;
                    ProductBatchupdate.ShelfLifeDate = obj.ShelfLifeDate;


                    ProductBatchupdate.ModifiedBy = obj.CreatedBy;
                    ProductBatchupdate.ModifiedDate = DateTime.Now;


                    PUcontext.Entry(ProductBatchupdate).State = EntityState.Modified;
                    PUcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static ProductBLL GetProductName(string ProductName)
        {
            using (var BLcontext = new CustomerComplaintEntities())
            {
                ProductBLL obj = new ProductBLL();

                var ProductValue = BLcontext.tblProductMasters.Where(x => x.ProductName.Equals(ProductName)).FirstOrDefault();
                if (ProductValue != null)
                {

                    obj.ProductName = ProductValue.ProductName;
                    obj.ProductID = ProductValue.Product_ID;

                }

                return obj;

            }

        }

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
                    bulkCopy.DestinationTableName = "[tblProductBatch]";
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


    }
}
