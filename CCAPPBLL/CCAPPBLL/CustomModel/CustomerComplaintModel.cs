using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class CustomerComplaintModel
    {
        public long Dealer_ID { get; set; }
        public string CustomerName { get; set; }
        public string CreatedBy { get; set; }
        public string CustomerPhone { get; set; }
        public string CustomerAddress { get; set; }
        public string CustomerEmail { get; set; }
       // public string DealerCode { get; set; }
        public string CustomerAccountName { get; set; }
        public DateTime DateOfVehicleRepair { get; set; }

        public Nullable<decimal> ComplaintQty { get; set; }

        //public decimal ComplaintQty { get; set; }
        public string ComplaintDesc { get; set; }
        //public bool IsDeleted { get; set; }
        public Nullable<int> ProductCode { get; set; }


        public Nullable<int> BatchNumber { get; set; }
        public string BatchNumber1 { get; set; }
        public string QtyOfComplaintStock { get; set; }
        public Nullable<bool> EvidenceAvailable { get; set; }
        public Nullable<bool> VerifiedInSameBatch { get; set; }
        public Nullable<bool> IsSelf { get; set; }
        public Nullable<bool> AvailableForFutureEvidence { get; set; }
        public Nullable<bool> SufficientEvidence { get; set; }
        public string RemarksForQuetsionaire { get; set; }
        public string RequestRCA { get; set; }
        public Nullable<DateTime> CMApprovedDate { get; set; }
      //  public string ComplaintNumber { get; set; }              before

        public int ComplaintNumber { get; set; }
        public Nullable<DateTime> CreationDate { get; set; }

        public Nullable<decimal> Tempreature { get; set; }
        public Nullable<decimal> Humidity { get; set; }

       //  public decimal Tempreature { get; set; }
       // public decimal Humidity { get; set; }
        public Nullable<DateTime> ManuFactureDate { get; set; }
        public Nullable<DateTime> ShelfLife { get; set; }
        public int ComplaintId { get; set; }
        //public string ComplaintNumber { get; set; }
       public string Remark { get; set; }

            public string DeLerAssignId { get; set; }
        public string CatalystTicketNumber { get; set; }

        

    }

    public class CCReportInfo
    {
        public int ComplaintNumber { get; set; }
        public string DealerCode { get; set; }
        public string CustomerName { get; set; }
        public string ProductCode { get; set; }
        public string BatchNumber { get; set; }
        public string CaomplaintCategory { get; set; }
        public Nullable<decimal> ComplaintQty { get; set; }
        public string ComplaintQtyType { get; set; }
        public string EmpName { get; set; }
        public System.DateTime ComplaintDate { get; set; }
        public string Approved_Reject { get; set; }
        public Nullable<System.DateTime> Approval_rejectionDate { get; set; }
        public string PlantRemarks { get; set; }
        public Nullable<System.DateTime> RCAPlantDate { get; set; }
        public string RDRemarks { get; set; }
        public Nullable<System.DateTime> RCARDRemarks { get; set; }
        public Nullable<System.DateTime> ClosedDate { get; set; }
        public string QUARRemarks { get; set; }
        public string Reprocess_Quar { get; set; }

        

      
        public string Segment { get; set; }
        public string Stream { get; set; }
        public string BrandName { get; set; }
        public string ProductName { get; set; }
        public Nullable<int> Location_Id { get; set; }
        public string ManufacturingLocation { get; set; }
        public Nullable<System.DateTime> ManufactureDate { get; set; }
        public string DepotName { get; set; }
        public string ComplaintDesc { get; set; }
        public Nullable<bool> IsQCretainAvailable { get; set; }
        public Nullable<bool> IsQCretailSample { get; set; }
        public bool IsComplaintValid { get; set; }
        public string RequestRCA { get; set; }
        public string RequestRCAOutType { get; set; }
        public long TSE_Avalable { get; set; }
        public string TSE_Remarks { get; set; }
        public string Re_Qua_Sell_Close { get; set; }
        public Nullable<System.DateTime> Re_Qua_Sell_Close_creationDate { get; set; }
        public string RCApprovalForCM { get; set; }
        public Nullable<System.DateTime> RCApprovalForCM_SubmittedDate { get; set; }
        public string Analysis_Details { get; set; }
        public Nullable<System.DateTime> Analysis_Date { get; set; }

    }

    public class TotalRCACompCount_Model
    {
        public int TotalCount { get; set; }
        public int RCACount { get; set; }
        public int CompCount { get; set; }
        public int Month { get; set; }
        public string monthName { get; set; }
    }



}

