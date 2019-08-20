using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class CompensationTypeModel
    {
        public int ComplaintCompensationDtl_Id { get; set; }
        public int CompensationDetails_ID { get; set; }
        public int Type { get; set; }
        public string TypeName { get; set; }
        public int Compensation_TypeID { get; set; }
        public string Compensation_Type { get; set; }
        public bool IsSelected { get; set; }
        public int? Value { get; set; }
        public string Unit { get; set; }
        public Nullable<decimal> CompensationValue { get; set; }
        public string CompensationUnit { get; set; }
        public Nullable<decimal> DamageValue { get; set; }
        public string DamageUnit { get; set; }
        public Nullable<decimal> GoodwillValue { get; set; }
        public string GoodwillUnit { get; set; }
    
    }
    public class SettlementModeModel
    {
        public int ComplaintSettlementDtl_Id { get; set; }
        public int CompensationDetails_ID { get; set; }
        public int Type { get; set; }
        public string TypeName { get; set; }
        public int Compensation_TypeID { get; set; }
        public int SettlementMode_ID { get; set; }
        public string SettlementMode { get; set; }
        public bool IsSelected { get; set; }
        public Nullable<decimal> CreditNoteValue { get; set; }
        public string CreditNoteUnit { get; set; }
        public Nullable<decimal> FOCValue { get; set; }
        public int? FOCProduct_ID { get; set; }
        public int? FOCProductQty { get; set; }
        public string FOCBatchNumber { get; set; }
        public Nullable<decimal> ReplacementValue { get; set; }
        public int? ReplacementProduct_ID { get; set; }
        public int? ReplacementProductQty { get; set; }
        public string ReplacementProductBatchNumber { get; set; }
        public string SettlementEPNumber { get; set; }
        public Nullable<System.DateTime> MaterialBillingDate { get; set; }
        public Nullable<System.DateTime> CNIssuesDate { get; set; }
    }
}
