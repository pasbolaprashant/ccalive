//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCAPPDAL.DbContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblComplaintSettlementDtl
    {
        public int ComplaintSettlementDtl_Id { get; set; }
        public Nullable<int> ComplaintCompensation_Id { get; set; }
        public Nullable<int> CompensationDetailsType_ID { get; set; }
        public Nullable<int> SettlementModeId { get; set; }
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
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    
        public virtual tblComplaintCompensation tblComplaintCompensation { get; set; }
    }
}
