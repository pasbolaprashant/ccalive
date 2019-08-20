using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplaintReapplicationSystemInfo
    {

        public long? Complaint_ID { get; set; }
        public long? Substrate_ID { get; set; }
        public string CoatType_ID { get; set; }
        public Nullable<long> ComplaintHandler_Id { get; set; }
        public string ApplicationType { get; set; }
        public string ApplicationTypeValue { get; set; }
        public string Value3 { get; set; }
        public string Value4 { get; set; }
        public string Value5 { get; set; }
        public string Value6 { get; set; }
        public string Value7 { get; set; }
        public string Value8 { get; set; }
        public string CreatedBy { get; set; }
    }

    public class ComplaintReappPhotoInfo
    {
        public long ComplaintReappPhoto_Id { get; set; }
        public long ComplaintHandler_Id { get; set; }
        public Nullable<long> Complaint_ID { get; set; }
        public string PhotoUrl { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
    }
}
