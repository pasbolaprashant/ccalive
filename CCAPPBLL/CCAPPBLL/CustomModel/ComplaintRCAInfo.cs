using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplaintRCAInfo
    {
        
        public int Complaint_ID { get; set; }
        public int Department_ID { get; set; }
        public string RCAComments { get; set; }
        public Nullable<bool> IsRectifiable { get; set; }
        public Nullable<bool> IsReprocessing { get; set; }
        public string ReprocessingComments { get; set; }
        public string ClosureComments { get; set; }
        public Nullable<decimal> AffectedProductVol { get; set; }
        public string AffectedProductUnit { get; set; }
        public Nullable<decimal> StockSAPProductVol { get; set; }
        public string StockSAPProductUnit { get; set; }
        public Nullable<decimal> SysValueProductVol { get; set; }
        public string SysValueProductUnit { get; set; }
        public string SiteReprocessing { get; set; }
        public Nullable<decimal> ReprocessingCost { get; set; }
        public string ReprocessingCostCurrency { get; set; }
        public Nullable<System.DateTime> DateOfExpectedClosure { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string Remarks { get; set; }

        
        public string IsRelated { get; set; }
        public string Description { get; set; }
        public string ImmediateAction { get; set; }
        public string CorrectiveAction { get; set; }
        public string PreventiveAction { get; set; }
        public string DocumentUpload { get; set; }
                
        public Nullable<bool> IsValidate { get; set; }
        public Nullable<bool> Isconfirmed { get; set; }
        public string Reason { get; set; }

        public string IsSelected { get; set; }



    }
}
