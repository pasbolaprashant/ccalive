using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class DealerMasterModel
    {
        public long Dealer_ID { get; set; }
        public string DealerCode { get; set; }
        public string DealerName { get; set; }
        public string DealerAddress { get; set; }

    }

    public class DepotMaster
    {
        public long DepotId { get; set; }

        public string DepotName { get; set; }
        public string DepotCode { get; set; }
     
    }

}
