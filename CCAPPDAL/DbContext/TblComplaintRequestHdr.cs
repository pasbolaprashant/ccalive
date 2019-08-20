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
    
    public partial class TblComplaintRequestHdr
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TblComplaintRequestHdr()
        {
            this.TblComplaintReapplicationSystemInfoDtls = new HashSet<TblComplaintReapplicationSystemInfoDtl>();
            this.TblComplaintRequestDtls = new HashSet<TblComplaintRequestDtl>();
            this.TblComplaintRequestPhotoDtls = new HashSet<TblComplaintRequestPhotoDtl>();
            this.tblComplaintSystemInfoDtls = new HashSet<tblComplaintSystemInfoDtl>();
        }
    
        public long Complaint_ID { get; set; }
        public int ComplaintNumber { get; set; }
        public System.DateTime VehicleRepairDate { get; set; }
        public long Dealer_ID { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAccountName { get; set; }
        public string CustomerPhone { get; set; }
        public string CustomerEmailID { get; set; }
        public string CustomerAddress { get; set; }
        public string CatalystTicketNumber { get; set; }
        public Nullable<long> Product_ID { get; set; }
        public Nullable<long> Batch_Id { get; set; }
        public Nullable<decimal> ComplaintQty { get; set; }
        public string ComplaintQtyType { get; set; }
        public string ComplaintDesc { get; set; }
        public string RequestRCA { get; set; }
        public string RequestRCAOutType { get; set; }
        public Nullable<bool> EvidenceAvailable { get; set; }
        public Nullable<bool> VerifiedInSameBatch { get; set; }
        public Nullable<bool> IsSelf { get; set; }
        public Nullable<bool> AvailableForFutureEvidence { get; set; }
        public Nullable<bool> SufficientEvidence { get; set; }
        public string RemarksForQuetsionaire { get; set; }
        public Nullable<decimal> Tempreature { get; set; }
        public Nullable<decimal> Humidity { get; set; }
        public string BatchNumber { get; set; }
        public Nullable<System.DateTime> ManifactureDate { get; set; }
        public Nullable<System.DateTime> ShelfLife { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblComplaintReapplicationSystemInfoDtl> TblComplaintReapplicationSystemInfoDtls { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblComplaintRequestDtl> TblComplaintRequestDtls { get; set; }
        public virtual tblDealerMaster tblDealerMaster { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblComplaintRequestPhotoDtl> TblComplaintRequestPhotoDtls { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblComplaintSystemInfoDtl> tblComplaintSystemInfoDtls { get; set; }
    }
}
