using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class QuarantineInfo
    {
       
        public int Complaint_Id { get; set; }
        public int StockSAPProductVol { get; set; }
        public string StockSAPProductUnit { get; set; }
        public Nullable<int> SysValueProductVol { get; set; }
        public string SysValueProductUnit { get; set; }
        public string AffectedBatchNumbers { get; set; }
        public Nullable<decimal> ExpectedCostOfQuartine { get; set; }
        public string ExpectedCostOfQuartineCurr { get; set; }
        public Nullable<System.DateTime> DateOfExpectedClosure { get; set; }
        public Nullable<bool> StockReceived { get; set; }
        public Nullable<bool> DisposalComplete { get; set; }
        public string CreatedBy { get; set; }
       public string Remarks { get; set; }
        public string IsSelected { get; set; }

        public int Department_ID { get; set; }

    }
}
