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



namespace CCAPPDAL
{
    public class ProductDAL
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
                    bulkCopy.DestinationTableName = "[tblProductMaster]";
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

        public static string delete(ProductBLL obj)
        {
            using (var PDcontext = new CustomerComplaintEntities())
            {
                var Productdelete = PDcontext.tblProductMasters.Where(c => c.Product_ID == obj.ProductID).FirstOrDefault();
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

        public static List<ProductBLL> List()
        {
            using (var PLcontext = new CustomerComplaintEntities())
            {
                List<ProductBLL> objlist = null;

                var ProductValue = PLcontext.getProductList().ToList();

                objlist = ProductValue.Select(x => new ProductBLL()
                {
                    ProductName = x.ProductName,
                    ProductCode = x.ProductCode,
                    BrandID = x.Brand_ID,
                    BrandName = x.BrandName,
                    ProductID = x.Product_ID,
                    ProductShelfLife = x.ProductShelfLife,
                    Segment = x.Segment,
                    Stream = x.Stream

                }).ToList();
                return objlist;

            }

        }



        public static string save(ProductBLL obj)
        {
            using (var PScontext = new CustomerComplaintEntities())
            {
                var ProductSave = PScontext.tblProductMasters.Where(c => c.ProductName.Trim().ToUpper().Equals(obj.ProductName.Trim().ToUpper()) && c.IsDeleted == false).FirstOrDefault();

                if (ProductSave == null)
                {
                    tblProductMaster tblProduct = new tblProductMaster();

                    tblProduct.ProductCode = obj.ProductCode.ToUpper().Trim();


                    tblProduct.ProductName = obj.ProductName.ToUpper().Trim();
                    tblProduct.Brand_ID = obj.BrandID.Value;
                    tblProduct.ProductShelfLife = obj.ProductShelfLife;
                    tblProduct.ProductDescription= obj.ProductName.ToUpper().Trim();
                    tblProduct.Stream = obj.Stream;
                    tblProduct.Segment = obj.Segment;

                    tblProduct.IsDeleted = false;
                    tblProduct.CreatedBy = "0"; 
                    tblProduct.CreationDate = DateTime.Now;



                    PScontext.Entry(tblProduct).State = EntityState.Added;
                    PScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }


        public static string update(ProductBLL obj)
        {
            using (var PUcontext = new CustomerComplaintEntities())
            {
                var Productupdate = PUcontext.tblProductMasters.Where(c => c.Product_ID.Equals(obj.ProductID)).FirstOrDefault();

                if (Productupdate != null)
                {
                    Productupdate.Brand_ID = obj.BrandID.Value;
                    Productupdate.ProductName = obj.ProductName.ToUpper().Trim();
                    Productupdate.ProductCode = obj.ProductCode.ToUpper().Trim();
                    Productupdate.ProductDescription = obj.ProductName.ToUpper().Trim();

                    Productupdate.ProductShelfLife = obj.ProductShelfLife;
                    Productupdate.Stream = obj.Stream;
                    Productupdate.Segment = obj.Segment;
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
