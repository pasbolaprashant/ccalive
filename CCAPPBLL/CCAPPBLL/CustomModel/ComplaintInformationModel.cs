using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    class ComplaintInformationModel
    {
        public string ProductCode { get; set; }
        public int Brand { get; set; }
        public string ProductDescription { get; set; }
        public string BatchNumber { get; set; }
        public DateTime DateMonthofManufacture { get; set; }
        public string QtyofComplaintstock { get; set; }
        public string CustomerAccountName { get; set; }
        
    }

    public class PendingRequestInfo
    {
        public long Complaint_ID { get; set; }
        public int ComplaintNumber { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAccountName { get; set; }
        public string Dealer { get; set; }
        public string ComplaintCategory { get; set; }
        public long ComplaintCategory_ID { get; set; }
        public string ProductName { get; set; }
        public string BatchNumber { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string StatusName { get; set; }
        public int FutStatusId { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public int StatusId { get; set; }
        
        public string CurrentStatus { get; set; }
        public string CompensationURL { get; set; }
        //for bulk delete
        public bool IsSelected { get; set; }

        public Nullable<bool> IsCompensationRequire { get; set; }
        public Nullable<bool> IsComplaintValid { get; set; }
        public string ModifiedBy { get; set; }
    }

    public class ComplaintPhotoInfo
    {
        public long ComplaintPhoto_ID { get; set; }
        public long Complaint_ID { get; set; }
        public string PhotoUrl { get; set; }
        public bool IsDeleted { get; set; }
      
    }

 


}
