using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplaintCompensationInfo
    {
       
        public int Department_Id { get; set; }
        public int Complaint_Id { get; set; }
        public int CompensationType { get; set; }
        public Nullable<decimal> CompensationValue { get; set; }
        public string CompensationUnit { get; set; }
        public Nullable<decimal> DamageValue { get; set; }
        public string DamageUnit { get; set; }
        public Nullable<decimal> GoodwillValue { get; set; }
        public string GoodwillUnit { get; set; }
        public Nullable<int> SettlementMode { get; set; }
        public Nullable<decimal> CreditNoteValue { get; set; }
        public string CreditNoteUnit { get; set; }
        public Nullable<decimal> FOCValue { get; set; }
        public Nullable<int> FOCProduct_ID { get; set; }
        public Nullable<int> FOCProductQty { get; set; }
        public string FOCBatchNumber { get; set; }
        public Nullable<decimal> ReplacementValue { get; set; }
        public Nullable<int> ReplacementProduct_ID { get; set; }
        public Nullable<int> ReplacementProductQty { get; set; }
        public string ReplacementProductBatchNumber { get; set; }
        public string SettlementEPNumber { get; set; }
        public Nullable<System.DateTime> MaterialBillingDate { get; set; }
        public Nullable<System.DateTime> CNIssuesDate { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public List<CompensationTypeModel> CompensationTypes { get; set; }
        public List<SettlementModeModel> SettlementModes { get; set; }
        public Nullable<int> ComplaintCompensation_Id { get; set; } // 16-11-2017 added by prashant

    }

    public class ComplaintCompensationInfoReconsider
    {

        public int Department_Id { get; set; }
        public int Complaint_Id { get; set; }
        public int CompensationType { get; set; }
        public Nullable<decimal> CompensationValue { get; set; }
        public string CompensationUnit { get; set; }
        public Nullable<decimal> DamageValue { get; set; }
        public string DamageUnit { get; set; }
        public Nullable<decimal> GoodwillValue { get; set; }
        public string GoodwillUnit { get; set; }
        public Nullable<int> SettlementMode { get; set; }
        public Nullable<decimal> CreditNoteValue { get; set; }
        public string CreditNoteUnit { get; set; }
        public Nullable<decimal> FOCValue { get; set; }
        public Nullable<int> FOCProduct_ID { get; set; }
        public Nullable<int> FOCProductQty { get; set; }
        public string FOCBatchNumber { get; set; }
        public Nullable<decimal> ReplacementValue { get; set; }
        public Nullable<int> ReplacementProduct_ID { get; set; }
        public Nullable<int> ReplacementProductQty { get; set; }
        public string ReplacementProductBatchNumber { get; set; }
        public string SettlementEPNumber { get; set; }
        public Nullable<System.DateTime> MaterialBillingDate { get; set; }
        public Nullable<System.DateTime> CNIssuesDate { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public List<CompensationTypeModel> CompensationTypesArray { get; set; }
        public List<SettlementModeModel> SettlementModesArray { get; set; }
        public Nullable<int> ComplaintCompensation_Id { get; set; } // 16-11-2017 added by prashant
    }


}
