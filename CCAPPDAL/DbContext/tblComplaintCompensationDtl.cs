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
    
    public partial class tblComplaintCompensationDtl
    {
        public int ComplaintCompensationDtl_Id { get; set; }
        public Nullable<int> ComplaintCompensation_Id { get; set; }
        public Nullable<int> CompensationDetailsType_ID { get; set; }
        public Nullable<int> CompensationType { get; set; }
        public Nullable<decimal> CompensationValue { get; set; }
        public string CompensationUnit { get; set; }
        public Nullable<decimal> DamageValue { get; set; }
        public string DamageUnit { get; set; }
        public Nullable<decimal> GoodwillValue { get; set; }
        public string GoodwillUnit { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    
        public virtual tblComplaintCompensation tblComplaintCompensation { get; set; }
    }
}