using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class BatchAndMfgModel
    {
        public int ProductBatch_ID { get; set; }
        public string BatchNumber { get; set; }
        public System.DateTime ManufactureDate { get; set; }
        public Nullable<int> ShelfLife { get; set; }
        public Nullable<DateTime> ShelfLifeDate { get; set; }
            
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public Nullable<int> ProductShelfLife { get; set; }




    }

    public class productBatchModel
    {
        public int ProductID { get; set; }
        public int ProductBatch_ID { get; set; }
        public string BatchNumber { get; set; }
        public System.DateTime ManufactureDate { get; set; }
        public Nullable<int> ShelfLife { get; set; }
       // public Nullable<DateTime> ShelfLifeDate { get; set; }
       public System.DateTime ShelfLifeDate { get; set; }
        public string CreatedBy { get; set; }
    }
}
