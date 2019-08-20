using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DbContext;
    using System.Data.Entity;

namespace CCAPPDAL.DALImpl
{
    public class ComplaintRCADAL
    {
        public static string AddComplaintRCA(ComplaintRCAInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var RCA = context.tblComplaintRCAs.Where(x => x.Complaint_ID == obj.Complaint_ID && x.Department_ID == obj.Department_ID).FirstOrDefault();

                if (RCA == null)
                {
                    tblComplaintRCA info = new tblComplaintRCA();

                    info.Complaint_ID = obj.Complaint_ID;
                    info.Department_ID = obj.Department_ID;
                    info.RCAComments = obj.RCAComments;
                    info.IsRectifiable = obj.IsRectifiable;
                    info.IsReprocessing = obj.IsReprocessing;
                    info.ReprocessingComments = obj.ReprocessingComments;
                    info.ClosureComments = obj.ClosureComments;
                    info.AffectedProductVol = obj.AffectedProductVol;
                    info.AffectedProductUnit = obj.AffectedProductUnit;
                    info.StockSAPProductVol = obj.StockSAPProductVol;
                    info.StockSAPProductUnit = obj.StockSAPProductUnit;
                    info.SysValueProductVol = obj.SysValueProductVol;
                    info.SysValueProductUnit = obj.SysValueProductUnit;
                    info.SiteReprocessing = obj.SiteReprocessing;
                    info.ReprocessingCost = obj.ReprocessingCost;
                    info.ReprocessingCostCurrency = obj.ReprocessingCostCurrency;
                    info.DateOfExpectedClosure = obj.DateOfExpectedClosure;
                    info.CreatedBy = obj.CreatedBy;
                    info.CreationDate = DateTime.Now;

                    info.Reason = obj.Reason;
                    info.IsValidate = obj.IsValidate;
                    info.Isconfirmed = obj.Isconfirmed;

                    info.Description = obj.Description;
                    info.IsRelated = obj.IsRelated;
                    info.CorrectiveAction = obj.CorrectiveAction;
                    info.ImmediateAction = obj.ImmediateAction;
                    info.PreventiveAction = obj.PreventiveAction;
                    info.DocumentUpload = obj.DocumentUpload;
                    info.IsSelected = obj.IsSelected;
                    info.Remarks = obj.Remarks;


                    context.Entry(info).State = EntityState.Added;
                    context.SaveChanges();
                }
                else
                {
                    RCA.RCAComments = obj.RCAComments;
                    RCA.IsRectifiable = obj.IsRectifiable;
                    RCA.IsReprocessing = obj.IsReprocessing;
                    RCA.ReprocessingComments = obj.ReprocessingComments;
                    RCA.ClosureComments = obj.ClosureComments;
                    RCA.AffectedProductVol = obj.AffectedProductVol;
                    RCA.AffectedProductUnit = obj.AffectedProductUnit;
                    RCA.StockSAPProductVol = obj.StockSAPProductVol;
                    RCA.StockSAPProductUnit = obj.StockSAPProductUnit;
                    RCA.SysValueProductVol = obj.SysValueProductVol;
                    RCA.SysValueProductUnit = obj.SysValueProductUnit;
                    RCA.SiteReprocessing = obj.SiteReprocessing;
                    RCA.ReprocessingCost = obj.ReprocessingCost;
                    RCA.ReprocessingCostCurrency = obj.ReprocessingCostCurrency;
                    RCA.DateOfExpectedClosure = obj.DateOfExpectedClosure;
                    RCA.ModifiedBy = obj.CreatedBy;
                    RCA.ModifiedDate = DateTime.Now;
                    RCA.IsRelated = obj.IsRelated;
                    RCA.CorrectiveAction = obj.CorrectiveAction;
                    RCA.ImmediateAction = obj.ImmediateAction;
                    RCA.PreventiveAction = obj.PreventiveAction;
                    RCA.DocumentUpload = obj.DocumentUpload;
                    RCA.Description = obj.Description;

                    RCA.Reason = obj.Reason;
                    RCA.IsValidate = obj.IsValidate;
                    RCA.Isconfirmed = obj.Isconfirmed;
                    RCA.IsSelected = obj.IsSelected;
                    RCA.Remarks = obj.Remarks;

                    context.Entry(RCA).State = EntityState.Modified;
                    context.SaveChanges();
                }
                return "Success : RCA Details added succesfully";

            }
        }

        public static ComplaintRCAInfo GetComplaintRCA(int ComplaintID, int DepartmentID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var obj = context.tblComplaintRCAs.Where(x => x.Complaint_ID == ComplaintID && x.Department_ID == DepartmentID).FirstOrDefault();
                if (obj != null)
                {
                    ComplaintRCAInfo info = new ComplaintRCAInfo();
                    info.Complaint_ID = obj.Complaint_ID;
                    info.Department_ID = obj.Department_ID;
                    info.RCAComments = obj.RCAComments;
                    info.IsRectifiable = obj.IsRectifiable;
                    info.IsReprocessing = obj.IsReprocessing;
                    info.ReprocessingComments = obj.ReprocessingComments;
                    info.ClosureComments = obj.ClosureComments;
                    info.AffectedProductVol = obj.AffectedProductVol;
                    info.AffectedProductUnit = obj.AffectedProductUnit;
                    info.StockSAPProductVol = obj.StockSAPProductVol;
                    info.StockSAPProductUnit = obj.StockSAPProductUnit;
                    info.SysValueProductVol = obj.SysValueProductVol;
                    info.SysValueProductUnit = obj.SysValueProductUnit;
                    info.SiteReprocessing = obj.SiteReprocessing;
                    info.ReprocessingCost = obj.ReprocessingCost;
                    info.ReprocessingCostCurrency = obj.ReprocessingCostCurrency;
                    info.DateOfExpectedClosure = obj.DateOfExpectedClosure;
                    info.CreatedBy = obj.CreatedBy;
                    info.Description = obj.Description;
                    info.DocumentUpload = obj.DocumentUpload;
                    info.ImmediateAction = obj.ImmediateAction;
                    info.IsRelated = obj.IsRelated;
                    info.PreventiveAction = obj.PreventiveAction;
                    info.CorrectiveAction = obj.CorrectiveAction;
                    info.Isconfirmed = obj.Isconfirmed;
                    info.IsValidate = obj.IsValidate;
                    info.Reason = obj.Reason;
                    info.IsSelected = obj.IsSelected;
                    info.Remarks = obj.Remarks;


                    return info;
                }
                else
                {
                    return null;
                }

            }
        }

        public static string CreateComplaintRCA(ComplaintRCAInfo obj)
        {
            string msg = AddComplaintRCA(obj);
            

             return msg;
         }

        public static string AddQuarantine(QuarantineInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                tblComplaintQuarantine info = new tblComplaintQuarantine
                {

                    Complaint_Id = obj.Complaint_Id,
                    StockSAPProductVol = obj.StockSAPProductVol,
                    StockSAPProductUnit = obj.StockSAPProductUnit,
                    SysValueProductVol = obj.SysValueProductVol,
                    SysValueProductUnit = obj.SysValueProductUnit,
                    AffectedBatchNumbers = obj.AffectedBatchNumbers,
                    ExpectedCostOfQuartine = obj.ExpectedCostOfQuartine,
                    ExpectedCostOfQuartineCurr = obj.ExpectedCostOfQuartineCurr,
                    DateOfExpectedClosure = obj.DateOfExpectedClosure,
                    StockReceived = obj.StockReceived,
                    DisposalComplete = obj.DisposalComplete,
                    CreatedBy = obj.CreatedBy,
                    CreationDate = DateTime.Now,
                    IsSelected=obj.IsSelected,
                  
    };

                context.Entry(info).State = EntityState.Added;
                context.SaveChanges();

                return "Success : Quarantine Details added succesfully";
            }
        }

        public static QuarantineInfo GetQuarantine(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var obj = context.tblComplaintQuarantines.Where(x => x.Complaint_Id == ComplaintID).FirstOrDefault();
                QuarantineInfo info = new QuarantineInfo
                {

                    Complaint_Id = obj.Complaint_Id,
                    StockSAPProductVol = obj.StockSAPProductVol,
                    StockSAPProductUnit = obj.StockSAPProductUnit,
                    SysValueProductVol = obj.SysValueProductVol,
                    SysValueProductUnit = obj.SysValueProductUnit,
                    AffectedBatchNumbers = obj.AffectedBatchNumbers,
                    ExpectedCostOfQuartine = obj.ExpectedCostOfQuartine,
                    ExpectedCostOfQuartineCurr = obj.ExpectedCostOfQuartineCurr,
                    DateOfExpectedClosure = obj.DateOfExpectedClosure,
                    StockReceived = obj.StockReceived,
                    DisposalComplete = obj.DisposalComplete,
                    CreatedBy = obj.CreatedBy,
                    IsSelected=obj.IsSelected

                };



                return info;
            }
        }

        public static string QurantineStockReceipt(QuarantineInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.tblComplaintQuarantines.Where(x => x.Complaint_Id == obj.Complaint_Id).FirstOrDefault();

                dtl.StockReceived = obj.StockReceived;
                dtl.DisposalComplete =obj.DisposalComplete;
                dtl.ModifiedBy = obj.CreatedBy;
                dtl.ModifiedDate = DateTime.Now;

                context.Entry(dtl).State = EntityState.Modified;
                context.SaveChanges();

                return "Success : Quarantine receipt added succesfully";
            }
        }
    }
}