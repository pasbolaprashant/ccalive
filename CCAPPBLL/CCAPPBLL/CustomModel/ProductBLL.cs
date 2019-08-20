using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL
{
   public class ProductBLL
    {

        public long ProductID { get; set; }
        public string ProductCode { get; set; }
        public string ProductName { get; set; }
        public long? BrandID { get; set; }
        public string BrandName { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<int> ProductShelfLife { get; set; }
        public string Stream { get; set; }
        public string Segment { get; set; }

    }


    public class ProductLocationModel
    {
        public int Location_Id { get; set; }
        public string ManufacturingLocation { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }

}
