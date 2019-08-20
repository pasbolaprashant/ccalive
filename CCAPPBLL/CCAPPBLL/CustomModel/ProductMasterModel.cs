using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ProductMasterModel
    {
        public Int64 Product_ID { get; set;}
        public string ProductCode{ get; set;}
        public Int64 Brand_ID { get; set; }
        public string ProductDescription { get; set; }

        public Nullable<int> ProductShelfLife { get; set; }
        public string Stream { get; set; }
        public string Segment { get; set; }

    }
}
