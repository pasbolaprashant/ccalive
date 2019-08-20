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
//using System.Configuration;
using System.Transactions;

namespace CCAPPDAL
{
  public  class BrandDAL
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
					bulkCopy.DestinationTableName = "[tblBrandMaster]";
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

		//public static DataTable ToDataTable<DataRow>(List<DataRow> iList)
		//{
		//	DataTable dataTable = new DataTable();
		//	PropertyDescriptorCollection propertyDescriptorCollection =
		//		TypeDescriptor.GetProperties(typeof(DataRow));
		//	for (int i = 0; i < propertyDescriptorCollection.Count; i++)
		//	{
		//		PropertyDescriptor propertyDescriptor = propertyDescriptorCollection[i];
		//		Type type = propertyDescriptor.PropertyType;

		//		if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Nullable<>))
		//			type = Nullable.GetUnderlyingType(type);


		//		dataTable.Columns.Add(propertyDescriptor.Name, type);
		//	}
		//	object[] values = new object[propertyDescriptorCollection.Count];
		//	foreach (DataRow iListItem in iList)
		//	{
		//		for (int i = 0; i < values.Length; i++)
		//		{
		//			values[i] = propertyDescriptorCollection[i].GetValue(iListItem);
		//		}
		//		dataTable.Rows.Add(values);
		//	}
		//	return dataTable;
		//}


            

		public static string delete(BrandBLL obj)
        {
            using (var BDcontext = new CustomerComplaintEntities())
            {
                var Branddelete = BDcontext.tblBrandMasters.Where(c => c.Brand_ID == obj.BrandID).FirstOrDefault();
                if (Branddelete != null)
                {
                    

                    Branddelete.IsDeleted = true;
                    Branddelete.ModifiedDate = DateTime.Now;
                    BDcontext.Entry(Branddelete).State = EntityState.Modified;
                    BDcontext.SaveChanges();


                    return "success";
                }
                return "error";
            }
          
        }


        public static List<BrandBLL>List()
        {
            using (var BLcontext = new CustomerComplaintEntities())
            {
                List<BrandBLL> objlist = null;

                var BrandValue = BLcontext.tblBrandMasters.Where(x => x.IsDeleted == false).ToList();

                objlist  = BrandValue.Select(x=> new BrandBLL()
                {

                    BrandName = x.BrandName,
                    BrandID = x.Brand_ID
                   
                }).ToList();
                return objlist;

            }

        }


		

		public static BrandBLL GetBrandName(string BrandName)
		{
			using (var BLcontext = new CustomerComplaintEntities())
			{
				BrandBLL obj = new BrandBLL();

				var BrandValue = BLcontext.tblBrandMasters.Where(x=>x.BrandName.Equals(BrandName)).FirstOrDefault();
				if (BrandValue != null) {

					obj.BrandName = BrandValue.BrandName;
					obj.BrandID = BrandValue.Brand_ID;

				}

				return obj;

			}

		}


		public static string save(BrandBLL obj)
        {
            using (var BScontext = new CustomerComplaintEntities())
            {
                var BrandSave = BScontext.tblBrandMasters.Where(c => c.BrandName.Trim().ToUpper().Equals(obj.BrandName.Trim().ToUpper()) && c.IsDeleted == true).FirstOrDefault();

                if (BrandSave == null)
                {
                   tblBrandMaster tblBrand = new tblBrandMaster();

                    tblBrand.BrandName= obj.BrandName.ToUpper().Trim();


                    tblBrand.IsDeleted = false;
                    tblBrand.CreatedBy = "Admin";
                    tblBrand.CreationDate = DateTime.Now;



                    BScontext.Entry(tblBrand).State = EntityState.Added;
                    BScontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }



        public static string update(BrandBLL obj)
        {
            using (var BUcontext = new CustomerComplaintEntities())
            {
                var Brandupdate = BUcontext.tblBrandMasters.Where(c => c.Brand_ID.Equals(obj.BrandID)).FirstOrDefault();

                if (Brandupdate != null)
                {


                    Brandupdate.BrandName = obj.BrandName.ToUpper().Trim();

                    Brandupdate.ModifiedBy = "Admin";
                    Brandupdate.ModifiedDate = DateTime.Now;


                    BUcontext.Entry(Brandupdate).State = EntityState.Modified;
                    BUcontext.SaveChanges();

                    return "success";
                }
                return "error";
            }

        }




    }
}
