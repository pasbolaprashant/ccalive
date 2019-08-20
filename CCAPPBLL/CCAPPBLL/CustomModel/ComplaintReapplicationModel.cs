using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplaintReapplicationModel
    {
        public Nullable<long> Complaint_ID { get; set; }
        public Nullable<long> Department_ID { get; set; }
        public Nullable<long> ComplaintHandler_ID { get; set; }
        public bool ProcessReplicated { get; set; }
        public string NonApplicationReason { get; set; }
        public Nullable<System.DateTime> ReApplicationDate { get; set; }
        public bool ReApplicationReqd { get; set; }
        public bool ClosureRecomended { get; set; }
        public string CustomerCommunication { get; set; }
        public bool SystemFollowed { get; set; }
        public string ApplicationComments { get; set; }
        public bool ComplaintObserved { get; set; }
        public bool TMInformed { get; set; }
        public bool TMApproved { get; set; }
        public bool CourseOfAction { get; set; }
        public bool CustomerComplaintClosed { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ProblemDescription { get; set; }
        public Nullable<bool> EvidenceAvailable { get; set; }
        public Nullable<bool> VerifiedInSameBatch { get; set; }
        public Nullable<bool> IsSelf { get; set; }
        public Nullable<bool> AvailableForFutureEvidence { get; set; }
        public Nullable<bool> SufficientEvidence { get; set; }
        public string RemarksForQuetsionaire { get; set; }
              
        public Nullable<int> Location_Id { get; set; }
        public Nullable<bool> IsQCretainAvailable { get; set; }
        public Nullable<bool> IsQCretailSample { get; set; }

        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }

        //public string ModifiedBy { get; set; }
        //public Nullable<System.DateTime> ModifiedDate { get; set; }
    }

    public class ComplaintReappInfo
    {
        public ComplaintReapplicationModel Model { get; set; }
        public IList<ComplaintReapplicationSystemInfo> SystemInfo { get; set; }
        public ComplaintQuestionaireInfo Questionaire { get; set; }
        public string Remarks { get; set; }
    }

    public class ComplaintSavedReappInfo
    {
        public ComplaintReapplicationModel Model { get; set; }
        public IList<ComplaintReapplicationSystemInfo> SystemInfo { get; set; }
        public IList<ComplaintReappPhotoInfo> PhotoInfo { get; set; }

    }

    public class TSEInfo
    {
        public string EMP_CODE { get; set; }
        public string EmpName { get; set; }
    }

    public class ComplaintQuestionaireInfo
    {
        public Nullable<bool> EvidenceAvailable { get; set; }
        public Nullable<bool> VerifiedInSameBatch { get; set; }
        public Nullable<bool> IsSelf { get; set; }
        public Nullable<bool> AvailableForFutureEvidence { get; set; }
        public Nullable<bool> SufficientEvidence { get; set; }
        public string RemarksForQuetsionaire { get; set; }
    }
}
