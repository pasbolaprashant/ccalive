using CCAPPBLL.CustomModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL.DbContext;

namespace CCAPPDAL.DALImpl
{
    public class ProductMasterDAL
    {
        public static List<ProductMasterModel> GetProductId()
        {
            List<ProductMasterModel> ProductId = null;

            using (var dbContext = new CustomerComplaintEntities())
            {
                var RequestProductId = dbContext.tblProductMasters.ToList();

                ProductId = RequestProductId.Select(s => new ProductMasterModel {
                    Product_ID = s.Product_ID,
                    ProductCode=s.ProductCode,
                    Brand_ID=s.Brand_ID,
                    ProductDescription=s.ProductDescription,
                    ProductShelfLife =s.ProductShelfLife,
                    Segment=s.Segment,
                    Stream=s.Stream
                  }).ToList();
            }
            return ProductId;
        }


        public static string GetBrandName(int id)
        {
            
            using (var dbContext = new CustomerComplaintEntities())
            {
                var BrandName = dbContext.tblBrandMasters.Where(x => x.Brand_ID == id).Select(x => x.BrandName).FirstOrDefault();
                return BrandName;
            }
            
        }

    }
}
