using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL.DbContext;
using CCAPPBLL.CustomModel;
using System.Data.Entity;

namespace CCAPPDAL.DALImpl
{
    public class ComplaintReappcationDAL
    {
        public static TblComplaintReapplication InsertIntoComplaintReappcation(ComplaintReapplicationModel obj)
        {
            try
            {
                using (var dbContext = new CustomerComplaintEntities())
                {
                    TblComplaintReapplication tr = new TblComplaintReapplication
                    {
                        Complaint_ID = obj.Complaint_ID,
                        Department_ID = obj.Department_ID,
                        ProcessReplicated = obj.ProcessReplicated,
                        NonApplicationReason = obj.NonApplicationReason,
                        ReApplicationDate = obj.ReApplicationDate,
                        ReApplicationReqd = obj.ReApplicationReqd,
                        ClosureRecomended = obj.ClosureRecomended,
                        CustomerCommunication = obj.ProcessReplicated == true ? obj.ProblemDescription : obj.CustomerCommunication,
                        SystemFollowed = obj.SystemFollowed,
                        ApplicationComments = obj.ApplicationComments,
                        ComplaintObserved = obj.ComplaintObserved,
                        TMInformed = obj.TMInformed,
                        TMApproved = obj.TMApproved,
                        CourseOfAction = obj.CourseOfAction,
                        CustomerComplaintClosed = obj.CustomerComplaintClosed,
                        CreatedBy = obj.CreatedBy,
                        CreationDate = DateTime.Now,
                        EvidenceAvailable = obj.EvidenceAvailable,
                        VerifiedInSameBatch = obj.VerifiedInSameBatch,
                        IsSelf = obj.IsSelf,
                        AvailableForFutureEvidence = obj.AvailableForFutureEvidence,
                        SufficientEvidence = obj.SufficientEvidence,
                        RemarksForQuetsionaire = obj.RemarksForQuetsionaire,
                        IsQCretailSample=obj.IsQCretailSample,
                        IsQCretainAvailable=obj.IsQCretainAvailable,
                        Location_Id=obj.Location_Id
                        
                        //ModifiedBy
                        //ModifiedDate
                    };
                    dbContext.Entry(tr).State = EntityState.Added;
                    dbContext.SaveChanges();

                    return tr;
                }
            }
            catch(Exception Ex)
            {
                throw Ex;
            }

        }

        public static ComplaintReapplicationModel GetComplaintReapplication(int ComplaintID, int Department)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var obj = context.TblComplaintReapplications.Where(x => x.Complaint_ID == ComplaintID && x.Department_ID == Department).FirstOrDefault();

                if (obj != null)
                {

                    ComplaintReapplicationModel tr = new ComplaintReapplicationModel
                    {
                        Complaint_ID = obj.Complaint_ID,
                        Department_ID = obj.Department_ID,
                        ProcessReplicated = obj.ProcessReplicated,
                        NonApplicationReason = obj.NonApplicationReason,
                        ReApplicationDate = obj.ReApplicationDate,
                        ReApplicationReqd = Convert.ToBoolean(obj.ReApplicationReqd),
                        ClosureRecomended = Convert.ToBoolean(obj.ClosureRecomended),
                        ProblemDescription = obj.CustomerCommunication,
                        CustomerCommunication=obj.CustomerCommunication,
                        SystemFollowed = Convert.ToBoolean(obj.SystemFollowed),
                        ApplicationComments = obj.ApplicationComments,
                        ComplaintObserved = Convert.ToBoolean(obj.ComplaintObserved),
                        TMInformed = Convert.ToBoolean(obj.TMInformed),
                        TMApproved = Convert.ToBoolean(obj.TMApproved),
                        CourseOfAction = Convert.ToBoolean(obj.CourseOfAction),
                        CustomerComplaintClosed = Convert.ToBoolean(obj.CustomerComplaintClosed),
                        CreatedBy = obj.CreatedBy,
                        ComplaintHandler_ID = obj.ComplaintHandler_ID,
                        EvidenceAvailable = obj.EvidenceAvailable,
                        VerifiedInSameBatch = obj.VerifiedInSameBatch,
                        IsSelf = obj.IsSelf,
                        AvailableForFutureEvidence = obj.AvailableForFutureEvidence,
                        SufficientEvidence = obj.SufficientEvidence,
                        RemarksForQuetsionaire = obj.RemarksForQuetsionaire,
                        Location_Id=obj.Location_Id,
                        IsQCretainAvailable=obj.IsQCretainAvailable,
                        IsQCretailSample=obj.IsQCretailSample

                        //ModifiedBy
                        //ModifiedDate
                    };

                    return tr;
                }
                else
                {
                    return null;
                }
            }
        }

        public static bool InsertDataIntoTblSystemInfo(ComplaintReapplicationSystemInfo obj)
        {
            try
            {
                using (var dbContext = new CustomerComplaintEntities())
                {
                    //var ComplaintId = dbContext.TblComplaintRequestHdrs.Where(x => x.Dealer_ID == Dealer_ID).Select(x => x.Complaint_ID).First();
                    if (obj.ApplicationType != "" || obj.ApplicationType != null)
                    {
                        TblComplaintReapplicationSystemInfoDtl tcr = new TblComplaintReapplicationSystemInfoDtl
                        {
                            Complaint_ID = obj.Complaint_ID,
                            Substrate_ID =Convert.ToInt64(obj.Substrate_ID),
                            CoatType_ID = obj.CoatType_ID,
                            ApplicationType = obj.ApplicationType,
                            ApplicationTypeValue = obj.ApplicationTypeValue,
                            Value3 = obj.Value3,
                            Value4 = obj.Value4,
                            Value5 = obj.Value5,
                            Value6 = obj.Value6,
                            Value7 = obj.Value7,
                            Value8 = obj.Value8,
                            CreatedBy = obj.CreatedBy,
                            CreationDate = DateTime.Now,
                            ComplaintHandler_Id = obj.ComplaintHandler_Id
                        };
                        dbContext.Entry(tcr).State = EntityState.Added;
                        dbContext.SaveChanges();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch(Exception Ex)
            {
                throw Ex;
            }
        }

        public static IList<ComplaintReapplicationSystemInfo> GetComplaintReappSysInfo(int ComplaintHeaderID)
        {
            try
            {
                using (var dbContext = new CustomerComplaintEntities())
                {
                    var obj = dbContext.TblComplaintReapplicationSystemInfoDtls.Where(x => x.ComplaintHandler_Id == ComplaintHeaderID).ToList();

                    IList<ComplaintReapplicationSystemInfo> lst = null;

                    lst = obj.Select(x => new ComplaintReapplicationSystemInfo {
                        Complaint_ID = x.Complaint_ID,
                        Substrate_ID = Convert.ToInt64(x.Substrate_ID),
                        CoatType_ID = x.CoatType_ID,
                        ApplicationType = x.ApplicationType,
                        ApplicationTypeValue = x.ApplicationTypeValue,
                        Value3 = x.Value3,
                        Value4 = x.Value4,
                        Value5 = x.Value5,
                        Value6 = x.Value6,
                        Value7 = x.Value7,
                        Value8 = x.Value8,
                        CreatedBy = x.CreatedBy,                       
                        ComplaintHandler_Id = x.ComplaintHandler_Id
                    }).ToList();

                    return lst;

                }
            }
            catch (Exception Ex)
            {
                throw Ex;
            }
        }

        public static bool InsertDataIntoTblPhotoUrl(ComplaintReappPhotoInfo obj)
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                //var ComplaintId = dbContext.TblComplaintRequestHdrs.Where(x => x.Dealer_ID == Dealer_ID).Select(x => x.Complaint_ID).First();
                tblComplaintReappPhotoDtl tp = new tblComplaintReappPhotoDtl
                {
                    ComplaintHandler_Id=obj.ComplaintHandler_Id,
                    Complaint_ID=obj.Complaint_ID,
                    PhotoUrl=obj.PhotoUrl,
                    CreatedBy=obj.CreatedBy,
                    CreationDate=DateTime.Now

                };
                dbContext.Entry(tp).State = EntityState.Added;
                dbContext.SaveChanges();
                return true;
            }
        }

        public static IList<ComplaintReappPhotoInfo> GetComplaintReappPhotoUrl(int ComplaintHandlerId)
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                var ComplaintId = dbContext.tblComplaintReappPhotoDtls.Where(x => x.ComplaintHandler_Id == ComplaintHandlerId).ToList();

                IList<ComplaintReappPhotoInfo> lst = null;

                lst = ComplaintId.Select(x => new ComplaintReappPhotoInfo {
                    ComplaintHandler_Id = x.ComplaintHandler_Id,
                    Complaint_ID = x.Complaint_ID,
                    PhotoUrl = x.PhotoUrl,
                    CreatedBy = x.CreatedBy,
                    CreationDate = DateTime.Now
                }).ToList();

                return lst;
            }
        }

        public static TblComplaintReapplication CreateRequest(ComplaintReappInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var tbl = InsertIntoComplaintReappcation(info.Model);

                foreach(var item in info.SystemInfo.ToList())
                {
                    if (item.Substrate_ID != null)
                    {
                        item.ComplaintHandler_Id = tbl.ComplaintHandler_ID;
                        item.Complaint_ID = tbl.Complaint_ID;

                        InsertDataIntoTblSystemInfo(item);
                    }
                }
                //var dtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == tbl.Complaint_ID).FirstOrDefault();
                //dtl.EvidenceAvailable = info.Questionaire.EvidenceAvailable;
                //dtl.VerifiedInSameBatch = info.Questionaire.VerifiedInSameBatch;
                //dtl.IsSelf = info.Questionaire.IsSelf;
                //dtl.AvailableForFutureEvidence = info.Questionaire.AvailableForFutureEvidence;
                //dtl.SufficientEvidence = info.Questionaire.SufficientEvidence;
                //dtl.RemarksForQuetsionaire = info.Questionaire.RemarksForQuetsionaire;
                //context.Entry(dtl).State = EntityState.Modified;
                //context.SaveChanges();

                //if (tbl.Department_ID == 2)
                //{
                //    PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(tbl.Complaint_ID), tbl.CreatedBy);
                //}
                //else if(tbl.Department_ID==4)
                //{
                //    PendingRequestDAL.TSEAssignForCH(Convert.ToInt32(tbl.Complaint_ID), tbl.CreatedBy);
                //}
                return tbl;
            }
        }

        public static ComplaintSavedReappInfo GetComplaintHandlerDetails(int ComplaintID, int Department)
        {
            ComplaintSavedReappInfo obj = new ComplaintSavedReappInfo();
            obj.Model = GetComplaintReapplication(ComplaintID, Department);
            if (obj.Model != null)
            {
                obj.SystemInfo = GetComplaintReappSysInfo(Convert.ToInt32(obj.Model.ComplaintHandler_ID));
                obj.PhotoInfo = GetComplaintReappPhotoUrl(Convert.ToInt32(obj.Model.ComplaintHandler_ID));
            }

            return obj;
        }

    }
}
