using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DbContext;
using System.Data.Entity;
using System.Net.Mail;

namespace CCAPPDAL.DALImpl
{
    public class PendingRequestDAL
    {
        public static IList<PendingRequestInfo> GetPendingRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetPendingRequestForApproval(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    //CustomerAccountName = x.CustomerAccountName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = Convert.ToInt64(x.ComplaintCategory_ID),
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    StatusId = x.Status_ID,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetPendingCompensationRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetPendingCompRequestForApproval(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    CustomerAccountName = x.CustomerAccountName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetApprovedCompensationRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetApprovedCompRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    CompensationURL = x.CompensationURL

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetRejectedCompensationRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetRejectedCompRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetInProcessCompensationRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetInProcessCompRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    CustomerAccountName = x.CustomerAccountName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    StatusId = x.CurrentStatusId.Value

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetInProcessRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetPendingRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    //CustomerAccountName = x.CustomerAccountName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = Convert.ToInt64(x.ComplaintCategory_ID),
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    FutStatusId = x.FutStatusId,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    StatusId = x.Status_ID,
                    CurrentStatus = x.CurrentStatus

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetUserClosedRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetUserClosedRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    StatusId = x.Status_ID,
                    CurrentStatus = x.CurrentStatus,
                    IsComplaintValid = x.IsComplaintValid,
                    IsCompensationRequire = x.IsCompensationRequire

                }).ToList();

                return lst;
            }
        }

        public static IList<PendingRequestInfo> GetUserRejectedRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetUserRejectedRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = x.ComplaintCategory_ID,
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    StatusId = x.Status_ID,
                    CurrentStatus = x.CurrentStatus

                }).ToList();

                return lst;
            }
        }

        public static List<StatusInfo> GetStatusDetails(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var status = context.SP_GetRequestStatusDetails(ComplaintID).ToList();

                List<StatusInfo> lst = new List<StatusInfo>();

                lst = status.Select(x => new StatusInfo
                {

                    CreationDate = x.CreationDate,
                    StatusName = x.StatusName,
                    Remarks = x.Remarks,
                    RoleName = x.RoleName,
                    EmpName = x.EmpName,
                    seq = x.seq


                }).ToList();

                var fut = context.SP_GetRequestFutureStatusDetails(ComplaintID).ToList();

                lst.AddRange(fut.Select(x => new StatusInfo
                {

                    CreationDate = x.CreationDate,
                    StatusName = x.StatusName,
                    Remarks = x.Remarks,
                    RoleName = x.RoleName,
                    EmpName = x.EmpName,
                    seq = x.seq

                }).ToList());

                return lst;

            }
        }

        public static ComplaintEmployeeInfo GetComplaintEmployee(int ComplaintId)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var EmployeeInfo = context.SP_GetEmployeeRequestDetails(ComplaintId).FirstOrDefault();

                ComplaintEmployeeInfo info = new ComplaintEmployeeInfo
                {
                    ComplaintNumber = EmployeeInfo.ComplaintNumber,
                    EMP_CODE = EmployeeInfo.EMP_CODE,
                    Emp_First_name = EmployeeInfo.Emp_First_name,
                    Dept_name = EmployeeInfo.Dept_name,
                    CreationDate = EmployeeInfo.CreationDate,
                    SBU_Name = EmployeeInfo.SBU_Name
                };
                return info;
            }
        }

        public static List<StatusInfo> GetCompensationStatusDetails(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var status = context.SP_GetCompensationRequestStatusDetails(ComplaintID).ToList();

                List<StatusInfo> lst = new List<StatusInfo>();

                lst = status.Select(x => new StatusInfo
                {

                    CreationDate = x.CreationDate,
                    StatusName = x.StatusName,
                    Remarks = x.Remarks,
                    RoleName = x.RoleName,
                    EmpName = x.EmpName,
                    seq = x.seq


                }).ToList();

                var fut = context.SP_GetCompensationFutureStatusDetails(ComplaintID).ToList();

                lst.AddRange(fut.Select(x => new StatusInfo
                {

                    CreationDate = x.CreationDate,
                    StatusName = x.StatusName,
                    Remarks = x.Remarks,
                    RoleName = x.RoleName,
                    EmpName = x.EmpName,
                    seq = x.seq

                }).ToList());

                return lst;

            }
        }

        public static RequesterInfo GetRequesterDetails(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetRequesterDetails(EmpCode).FirstOrDefault();

                RequesterInfo info = new RequesterInfo
                {
                    EMP_CODE = dtl.EMP_CODE,
                    Emp_First_name = dtl.Emp_First_name,
                    Emp_Last_name = dtl.Emp_Last_name,
                    Desg_Desc = dtl.Desg_Desc
                };

                return info;
            }
        }

        public static string CHAssignForClosure(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var complaint = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(ComplaintID, 7, 5, AssignedTo.ComplaintManager, 2, 3, EmpCode, Remarks);

                #region
                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();

                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();


                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);



                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo.ComplaintManager).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();
                    var QC = context.Sp_GETName("NPI1700").FirstOrDefault();                    //-------------FOR Quality Control (Javed Akhtar)  ----------//



                    var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(complaint.CreatedBy);
                    var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);


                    var FromEmail = UserDAL.GetEmail(EmpCode);


                    string subject = "Complaint NO: " + complaint.ComplaintNumber + " validated by Complaint Handler.";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(CMEmail.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(QC.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[2].Templat_Body.Replace("{Name}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);
                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);
                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Requestor Name}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks by Complaint Handler}", Remarks);


                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }


                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                #endregion

                return "Success: Complaint assigned to Complaint Manager";
            }
        }

        public static string TSEAssignForCH(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var complaint = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(ComplaintID, 9, 13, AssignedTo.ComplaintHandler, 4, 2, EmpCode, Remarks);

                #region Send Email

                try
                {

                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();

                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();


                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);




                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo.ComplaintHandler).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();


                    var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(complaint.CreatedBy);
                    var TSE = UserDAL.GetEmail(EmpCode);
                    var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);
                    var TSERM1 = UserDAL.GetEmail(TSE.RM1);
                    var TSERM2 = UserDAL.GetEmail(TSE.RM2);
                    var TM = context.Sp_GETName("NPI1567").FirstOrDefault();                    //-------------FOR Technical Manger ( Rahul Patil )   ----------//



                    string subject = "Complaint NO: " + complaint.ComplaintNumber + " Field Analysis Done by TSE  ";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(CHEmail.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(TSERM1.email_id);
                    CC.Add(TSERM1.email_id);
                    //CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);
                    CC.Add(TM.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[4].Templat_Body.Replace("{Complaint Handler Name}", RequesterName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{TSE Name}", empName.Emp_First_name);

                    Body13 += Body12.Replace("{Remarks by TSE}", Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, TSE.email_id, To, CC, Body);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                #endregion



                return "Success: Complaint assigned for Complaint Handler";
            }
        }

        public static string CMAssignToTSE(AssignInfo info)
        {
            //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
            using (var context = new CustomerComplaintEntities())
            {
                var complaint = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                bool Status = UpdateComplaintStatus(info.ComplaintID, 7, 8, info.AssignTo, 2, 4, info.EmpCode, info.Remarks);


                #region Send Email

                try
                {

                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == info.ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);


                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(info.AssignTo).FirstOrDefault();
                    var empName = context.Sp_GETName(info.EmpCode).FirstOrDefault();


                    var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(complaint.CreatedBy);
                    var TSE = UserDAL.GetEmail(info.AssignTo);
                    var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);
                    var TSERM1 = UserDAL.GetEmail(TSE.RM1);
                    var TSERM2 = UserDAL.GetEmail(TSE.RM2);

                    string subject = "Complaint NO: " + complaint.ComplaintNumber + " for doing the field analysis ";


                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(TSE.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(TSERM1.email_id);
                    CC.Add(TSERM1.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[3].Templat_Body.Replace("{Name}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{TSE Name}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks by CH For TSE}", info.Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }



                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }


                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }

                #endregion

            }

            return "Success: Complaint assigned to TSE for investigation";
        }

        /// <summary>
        ///                                              Complaint reject by Complaint Manager 
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CMCloseRequest(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                //bool Status = UpdateComplaintStatus(info.ComplaintID, 6, 6, "", 3, 3, info.EmpCode, info.Remarks);
                bool Status = UpdateComplaintStatus(info.ComplaintID, 53, 53, "", 3, 3, info.EmpCode, info.Remarks);



                #region

                try
                {

                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == info.ComplaintID).ToList();

                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();


                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();

                    var templt = context.TblTemplateMasters.ToList();


                    var empName = context.Sp_GETName(info.EmpCode).FirstOrDefault();
                    var ReqstrName = context.Sp_GETName(ComplaintDetail.CreatedBy).FirstOrDefault();

                    var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(ComplaintDetail.CreatedBy);
                    var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);


                    var FromEmail = UserDAL.GetEmail(info.EmpCode);


                    string subject = "Complaint Number " + ComplaintDetail.ComplaintNumber + " is Not Valid and is henceforth rejected.";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterEmail.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[6].Templat_Body.Replace("{Complaint Manager}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);
                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);
                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Requestor}", ReqstrName.Emp_First_name);
                    Body13 += Body12.Replace("{Complaint Manager Remarks} ", info.Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }

                #endregion

                return "Success: Complaint has been closed.";
            }
        }

        public static string CHRecommendforRCAPlnt(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                //if (info.IsComplaint == true)
                //{
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                var ComplaintHdr = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                ComplaintHdr.RequestRCA = info.Location;

                context.Entry(ComplaintHdr).State = EntityState.Modified;
                context.SaveChanges();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(info.ComplaintID, 30, 29, AssignedTo.ComplaintManager, 2, 3, info.EmpCode, info.Remarks);



                #region Send Email

                try
                {

                    var cmptRqst = context.TblComplaintRequestHdrs.Where(X => X.Complaint_ID == info.ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == info.ComplaintID).FirstOrDefault();


                    var proInfo = context.tblProductMasters.Where(X => X.Product_ID == cmptRqst.Product_ID).FirstOrDefault();
                    var delInfo = context.tblDealerMasters.Where(X => X.Dealer_ID == cmptRqst.Dealer_ID).FirstOrDefault();

                    var compCat = context.tblComplaintCategoryMasters.Where(x => x.ComplaintCategory_ID == complatnt.ComplaintCategory_ID).FirstOrDefault();
                    var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == complatnt.ComplaintType_ID).ToList();


                    string selectedComplainttype = "";

                    foreach (var k in compCatType)
                    {
                        selectedComplainttype += "," + k.ComplaintType;
                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var templt = context.TblTemplateMasters.ToList();

                    var RequesterName = context.Sp_GETName(AssignedTo.ComplaintManager).FirstOrDefault();
                    var empName = context.Sp_GETName(info.EmpCode).FirstOrDefault();


                    var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(cmptRqst.CreatedBy);
                    var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);
                    var FromEmail = UserDAL.GetEmail(info.EmpCode);

                    string subject = "Complaint: " + cmptRqst.ComplaintNumber + "validated by Complaint Handler.";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(CMEmail.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[2].Templat_Body.Replace("{Name}", empName.Emp_First_name);                  //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", proInfo.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", proInfo.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", delInfo.DealerName);
                    Body5 += Body4.Replace("{dealer code}", delInfo.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", cmptRqst.ComplaintNumber.ToString());
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(cmptRqst.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", compCat.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", cmptRqst.ComplaintQty + " " + cmptRqst.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", cmptRqst.ComplaintDesc);
                    Body12 += Body11.Replace("{Requestor Name}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks by Complaint Handler}", info.Remarks);

                    if (cmptRqst.BatchNumber != null)
                    {
                        Body14 += Body13.Replace("{Batch Number}", (cmptRqst.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body = Body13;
                    }

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                #endregion


                return "Success: Complaint recommended by CH and assigned to Complaint Manager";
                //}
                //else
                //{
                //    var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                //    //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                //    bool Status = UpdateComplaintStatus(info.ComplaintID, 7, 5, AssignedTo.ComplaintManager, 2, 3, info.EmpCode);

                //    return "Success: Closure process initiated. Complaint assigned to Complaint Manager";
                //}
            }
        }





        /// <summary>
        ///                                                  APPROVE BY COMPLAINT MANAGER
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CHApprovalRCAPlnt(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                //if (info.IsComplaint==true)
                //{
                var msg = "";

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == info.Location).FirstOrDefault();
                var AssignedTo1 = context.tblFlowMatrices.Where(x => x.Type == info.RequestRCAOutType).FirstOrDefault();
                var CompStake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var ComplaintHdr = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                ComplaintHdr.RequestRCA = info.Location;
                ComplaintHdr.RequestRCAOutType = info.RequestRCAOutType;
                ComplaintHdr.ModifiedDate = DateTime.Now;

                context.Entry(ComplaintHdr).State = EntityState.Modified;
                context.SaveChanges();

                tblComplaintReapplicationInfo tblcr = new tblComplaintReapplicationInfo();

                tblcr.Complaint_ID = info.ComplaintID;
                tblcr.IsCompensationRequire = info.IsCompensationRequire;
                tblcr.IsComplaintValid = info.IsComplaintValid;
                tblcr.Department_ID = 3;

                tblcr.CreatedBy = info.EmpCode;
                tblcr.CreationDate = DateTime.Now;
                context.Entry(tblcr).State = EntityState.Added;
                context.SaveChanges();

                ////var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();


                if (info.IsCompensationRequire == false && info.IsComplaintValid == false)
                {
                    bool Status = UpdateComplaintStatus(info.ComplaintID, 62, 63, AssignedTo.Plant, 3, 3, info.EmpCode, info.Remarks);

                }
                else
                {
                    if (info.Location == "Local")
                    {
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 14, 15, AssignedTo.Plant, 3, 6, info.EmpCode, info.Remarks);

                        string Loc = "Plant";

                        bool script_Temp = send_Temp(info.ComplaintID, AssignedTo.Plant, info.EmpCode, info.Remarks, Loc);




                        msg = "Success: RCA process initiated. Complaint assigned to Plant";
                    }
                    else if (info.Location == "GroupAR")
                    {
                        string Loc = "Group AR";
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 14, 22, AssignedTo.R_And_D, 3, 8, info.EmpCode, info.Remarks);
                        bool script_Temp = send_Temp(info.ComplaintID, AssignedTo.R_And_D, info.EmpCode, info.Remarks, Loc);
                        msg = "Success: RCA process initiated. Complaint assigned to R & D";
                    }
                    else if (info.RequestRCAOutType == "SMP")
                    {
                        string Loc = "SMP";
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 14, 64, AssignedTo1.OutSourced, 3, 10, info.EmpCode, info.Remarks);
                        bool script_Temp = send_Temp(info.ComplaintID, AssignedTo1.OutSourced, info.EmpCode, info.Remarks, Loc);
                        msg = "Success: RCA process initiated. Complaint assigned to SMP";
                    }
                    else
                    {
                        string Loc = "Non Paint Manager";
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 14, 65, AssignedTo1.OutSourced, 3, 11, info.EmpCode, info.Remarks);
                        bool script_Temp = send_Temp(info.ComplaintID, AssignedTo1.OutSourced, info.EmpCode, info.Remarks, Loc);
                        msg = "Success: RCA process initiated. Complaint assigned to NON Paint";
                    }
                }



                //string str = Email.sendEmail(subject, RequesterEmail.email_id, To, CC, Body);




                #region Send Email

                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == info.ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo.Plant).FirstOrDefault();
                    var empName = context.Sp_GETName(info.EmpCode).FirstOrDefault();

                    var RequestrName = context.Sp_GETName(ComplaintHdr.CreatedBy).FirstOrDefault();



                    var Plant = UserDAL.GetEmail(AssignedTo.Plant);
                    var CHEmail = UserDAL.GetEmail(CompStake.ComplaintHandler);
                    var CMEmail = UserDAL.GetEmail(CompStake.ComplaintManager);
                    var PlantRM1 = UserDAL.GetEmail(Plant.RM1);
                    var PlantRM2 = UserDAL.GetEmail(Plant.RM2);
                    var RequesterEmail = UserDAL.GetEmail(info.EmpCode);

                    string subject = "Complaint Number: " + ComplaintHdr.ComplaintNumber + " is Valid and Compensation is form available .";


                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequestrName.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(Plant.email_id);
                    //CC.Add(PlantRM1.email_id);
                    //CC.Add(PlantRM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[5].Templat_Body.Replace("{Requestor}", RequestrName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);



                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Complaint Manager}", empName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks by Complaint Manager}", info.Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }


                #endregion


                return "" + msg + " ";
                //}
                //else
                //{
                //    var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                //    //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                //    bool Status = UpdateComplaintStatus(info.ComplaintID, 7, 5, AssignedTo.ComplaintManager, 2, 3, info.EmpCode);

                //    return "Success: Closure process initiated. Complaint assigned to Complaint Manager";
                //}
            }
        }

        /// <summary>
        ///                                                 AFTER TSE ASSIGN  REJECT BY CM
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CHRejectRCA(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                //if (info.IsComplaint==true)
                //{

                var CompStake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == info.Location).FirstOrDefault();
                var ComplaintHdr = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                //ComplaintHdr.RequestRCA = info.Location;

                //context.Entry(ComplaintHdr).State = EntityState.Modified;
                //context.SaveChanges();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(info.ComplaintID, 52, 52, "", 3, 3, info.EmpCode, info.Remarks);

                #region Send Email
                //var Plant = UserDAL.GetEmail(AssignedTo.Plant);
                //var CHEmail = UserDAL.GetEmail(CompStake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(CompStake.ComplaintManager);
                //var PlantRM1 = UserDAL.GetEmail(Plant.RM1);
                //var PlantRM2 = UserDAL.GetEmail(Plant.RM2);
                //var RequesterEmail = UserDAL.GetEmail(info.EmpCode);
                //var ComplaintCreatedby = UserDAL.GetEmail(ComplaintHdr.CreatedBy);

                //string subject = "Complaint: " + ComplaintHdr.ComplaintNumber + " has been rejected CM";
                //string Body = "Complaint: " + ComplaintHdr.ComplaintNumber + " has been rejected by CM.";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(ComplaintCreatedby.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);


                //string str = Email.sendEmail(subject, RequesterEmail.email_id, To, CC, Body);




                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == info.ComplaintID).ToList();

                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var empName = context.Sp_GETName(info.EmpCode).FirstOrDefault();
                    var ReqstrName = context.Sp_GETName(ComplaintDetail.CreatedBy).FirstOrDefault();

                    var CHEmail = UserDAL.GetEmail(CompStake.ComplaintHandler);
                    var RequesterEmail = UserDAL.GetEmail(ComplaintDetail.CreatedBy);
                    var CMEmail = UserDAL.GetEmail(CompStake.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);


                    var FromEmail = UserDAL.GetEmail(info.EmpCode);


                    string subject = "Complaint Number " + ComplaintDetail.ComplaintNumber + " is Not Valid and is henceforth rejected.";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterEmail.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[6].Templat_Body.Replace("{Complaint Manager}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);
                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);
                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Requestor}", ReqstrName.Emp_First_name);
                    Body13 += Body12.Replace("{Complaint Manager Remarks} ", info.Remarks);


                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }











                #endregion

                return "Success: Complaint rejected by Complaint Manager";
                //}
                //else
                //{
                //    var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                //    //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                //    bool Status = UpdateComplaintStatus(info.ComplaintID, 7, 5, AssignedTo.ComplaintManager, 2, 3, info.EmpCode);

                //    return "Success: Closure process initiated. Complaint assigned to Complaint Manager";
                //}
            }
        }

        public static string PlntAssignToCM(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();




                //  var AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(ComplaintID, 16, 67, Stake.ComplaintManager, 6, 3, EmpCode, Remarks);
                string Loc = "Plant";

                bool script_Temp2 = send_Temp2(ComplaintID, Stake.ComplaintManager, EmpCode, Remarks, Loc);

                #region Send Email
                //var Plant = UserDAL.GetEmail(EmpCode);
                //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                //var BM= UserDAL.GetEmail(AssignedTo);



                //string subject = "Complaint: " + ComDtl.ComplaintNumber + " has been updated by Plant";
                //string Body = "Complaint: " + ComDtl.ComplaintNumber + " has been Updated by Plant. Please review to proceed further";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(BM.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);
                //CC.Add(CMEmail.email_id);
                //CC.Add(Plant.email_id);


                //string str = Email.sendEmail(subject, Plant.email_id, To, CC, Body);
                #endregion
                return "Success: RCA Done, Complaint has been assigned to CM";



            }
        }

        public static string RDAssignToCM(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var FlowDetails = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();

                bool Status = UpdateComplaintStatus(ComplaintID, 23, 67, Stake.ComplaintManager, 8, 3, EmpCode, Remarks);

                string Loc = "R&D";

                bool script_Temp2 = send_Temp2(ComplaintID, Stake.ComplaintManager, EmpCode, Remarks, Loc);

                #region Send Email
                //var Plant = UserDAL.GetEmail(FlowDetails.Plant);
                //var RD = UserDAL.GetEmail(EmpCode);
                //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                //var BM = UserDAL.GetEmail(AssignedTo);



                //string subject = "Complaint: " + ComDtl.ComplaintNumber + " has been updated by R&D";
                //string Body = "Complaint: " + ComDtl.ComplaintNumber + " has been Updated by R&D. Please review to proceed further";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(BM.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);
                //CC.Add(CMEmail.email_id);
                //CC.Add(Plant.email_id);


                //string str = Email.sendEmail(subject, RD.email_id, To, CC, Body);
                #endregion

                return "Success: RCA Done, Complaint has been assigned to CM";

            }
        }

        public static string PlntAssignToRD(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(ComplaintID, 24, 22, AssignedTo.R_And_D, 6, 8, EmpCode, Remarks);


                string Loc = "R&D";

                bool script_Temp1 = send_Temp1(ComplaintID, AssignedTo.R_And_D, EmpCode, Remarks, Loc);


                #region Send Email
                //var Plant = UserDAL.GetEmail(AssignedTo.Plant);
                //var RD = UserDAL.GetEmail(AssignedTo.R_And_D);
                //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                //var RDRM1 = UserDAL.GetEmail(RD.RM1);
                //var RDRM2 = UserDAL.GetEmail(RD.RM2);




                //string subject = "Complaint: " + LocationDetails.ComplaintNumber + " has been updated by Plant";
                //string Body = "Complaint: " + LocationDetails.ComplaintNumber + " has been Updated by Plant. Please review to proceed further";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(RD.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);
                //CC.Add(CMEmail.email_id);

                //CC.Add(RDRM1.email_id);
                //CC.Add(RDRM1.email_id);


                // string str = Email.sendEmail(subject, Plant.email_id, To, CC, Body);
                #endregion

                return "Success: Complaint assigned to R&D for further RCA";
            }
        }


        public static string SMPAssignToCM(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCAOutType).FirstOrDefault();


                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                bool Status = UpdateComplaintStatus(ComplaintID, 66, 67, Stake.ComplaintManager, 10, 3, EmpCode, Remarks);



                string Loc = "SMP";

                bool script_Temp3 = send_Temp2(ComplaintID, Stake.ComplaintManager, EmpCode, Remarks, Loc);


                #region Send Email
                //var Plant = UserDAL.GetEmail(AssignedTo.Plant);
                //var RD = UserDAL.GetEmail(AssignedTo.R_And_D);
                //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                //var RDRM1 = UserDAL.GetEmail(RD.RM1);
                //var RDRM2 = UserDAL.GetEmail(RD.RM2);




                //string subject = "Complaint: " + LocationDetails.ComplaintNumber + " has been updated by Plant";
                //string Body = "Complaint: " + LocationDetails.ComplaintNumber + " has been Updated by Plant. Please review to proceed further";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(RD.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);
                //CC.Add(CMEmail.email_id);

                //CC.Add(RDRM1.email_id);
                //CC.Add(RDRM1.email_id);


                // string str = Email.sendEmail(subject, Plant.email_id, To, CC, Body);
                #endregion

                return "Success: RCA Done, Complaint has been assigned to CM";
            }
        }


        public static string PlntAssignToBM(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();

                var AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                if (AssignedTo != null)
                {
                    bool Status = UpdateComplaintStatus(ComplaintID, 69, 17, AssignedTo, 3, 7, EmpCode, Remarks);


                    #region Send Email
                    //var Plant = UserDAL.GetEmail(EmpCode);
                    //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                    //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                    //var BM= UserDAL.GetEmail(AssignedTo);



                    //string subject = "Complaint: " + ComDtl.ComplaintNumber + " has been updated by Plant";
                    //string Body = "Complaint: " + ComDtl.ComplaintNumber + " has been Updated by Plant. Please review to proceed further";

                    //MailAddressCollection To = new MailAddressCollection();
                    //To.Add(BM.email_id);

                    //MailAddressCollection CC = new MailAddressCollection();
                    //CC.Add(CHEmail.email_id);
                    //CC.Add(CMEmail.email_id);
                    //CC.Add(Plant.email_id);


                    //string str = Email.sendEmail(subject, Plant.email_id, To, CC, Body);
                    #endregion
                    return "Success: Complaint assigned for Business Manager for Approval";
                }
                else
                {
                    return "Error: BM not defined for this request";
                }


            }
        }


        public static string BMApprove(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var RCADetails = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 6).FirstOrDefault();
                var RCADetails1 = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 3).FirstOrDefault();

                decimal BMLimit;
                string ToAssign;
                var smpAnonPaint = "";

                bool AssignPlant = false;
                bool AssignOut = false;
                if (LocationDetails.RequestRCA == "OutSourced")
                {
                    AssignOut = true;
                    var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCAOutType).FirstOrDefault();
                    ToAssign = AssignedTo.OutSourced;
                    BMLimit = AssignedTo.BMLimit.Value;
                    smpAnonPaint = AssignedTo.Type;
                }
                else
                {
                    AssignPlant = true;
                    var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                    ToAssign = AssignedTo.Plant;
                    BMLimit = AssignedTo.BMLimit.Value;
                }


                var CM = context.tblComplaintStakeHolders.FirstOrDefault();
                //bool AssignPlant = false;
                //bool AssignR_D = false;
                //if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == true)
                //{
                //    AssignPlant = true;
                //}
                //else if (RCADetails.IsRectifiable == true )
                //{
                //    AssignPlant = false;
                //}
                //else if (RCADetails.IsRectifiable == false)
                //{
                //    AssignR_D = true;
                //}

                if (RCADetails1.ReprocessingCost > BMLimit)
                {
                    if (RCADetails1.IsSelected == "Reprocessing")
                    {
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 31, "NPI0455", 7, 9, info.EmpCode, info.Remarks);




                    }
                }
                else
                {
                    if (AssignPlant)
                    {
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 19, ToAssign, 7, 6, info.EmpCode, info.Remarks);

                        string SubDialog = "is approved by BM (For Reprocessing)";

                        string Dialog = "The request to “Reprocess” the following Complaint Batch has been approved. Stock Receipt has been initiated..";

                        bool script_Temp4 = send_TempCM(info.ComplaintID, ToAssign, info.EmpCode, info.Remarks, SubDialog, Dialog);
                    }
                    else if (AssignOut)
                    {

                        if (smpAnonPaint == "SMP")
                        {
                            bool Status = UpdateComplaintStatus(info.ComplaintID, 82, 84, ToAssign, 7, 10, info.EmpCode, info.Remarks);

                            string SubDialog = "is approved by BM (For Reprocessing)";

                            string Dialog = "The request to “Reprocess” the following Complaint Batch has been approved. Stock Receipt has been initiated..";

                            bool script_Temp4 = send_TempCM(info.ComplaintID, ToAssign, info.EmpCode, info.Remarks, SubDialog, Dialog);
                        }
                        else
                        {
                            //bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 19, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);
                            bool Status = UpdateComplaintStatus(info.ComplaintID, 83, 85, ToAssign, 7, 11, info.EmpCode, info.Remarks);

                            string SubDialog = "is approved by BM (For Reprocessing)";

                            string Dialog = "The request to “Reprocess” the following Complaint Batch has been approved. Stock Receipt has been initiated..";

                            bool script_Temp4 = send_TempCM(info.ComplaintID, ToAssign, info.EmpCode, info.Remarks, SubDialog, Dialog);
                        }
                    }
                    // else
                    // {
                    //   bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 37, CM.ComplaintManager, 8, 3, info.EmpCode, info.Remarks);
                    // }
                }

                return "Success: RCA approved and is send for further process.";
            }
        }

        public static string BHApprove(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var RCADetails = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 6).FirstOrDefault();
                var RCADetails1 = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 3).FirstOrDefault();
                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var CM = context.tblComplaintStakeHolders.FirstOrDefault();
                bool AssignPlant = false;
                bool AssignR_D = false;
                if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == true)
                {
                    AssignPlant = true;
                }
                else if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == false)
                {
                    AssignPlant = false;
                }
                else if (RCADetails.IsRectifiable == false)
                {
                    AssignR_D = true;
                }

                bool Status = UpdateComplaintStatus(info.ComplaintID, 32, 19, AssignedTo.Plant, 9, 6, info.EmpCode, info.Remarks);



                return "Success: Complaint approved and is assigned to Plant for Stock Receipt";
            }
        }

        public static string BMApproveRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var RCADetails = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 8).FirstOrDefault();
                var RCADetails1 = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 3).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var CM = context.tblComplaintStakeHolders.FirstOrDefault();
                bool AssignPlant = false;
                bool AssignR_D = false;
                if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == true)
                {
                    AssignR_D = true;
                }
                else if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == false)
                {
                    //Quartine
                    AssignPlant = false;
                }
                else if (RCADetails.IsRectifiable == false)
                {
                    //Quartine
                    AssignR_D = true;
                }
                if (RCADetails1.ReprocessingCost > AssignedTo.BMLimit)
                {
                    if (RCADetails.IsReprocessing == true)
                    {
                        bool Status = UpdateComplaintStatus(info.ComplaintID, 26, 33, "NPI0455", 7, 9, info.EmpCode, info.Remarks);

                    }
                }
                else
                {

                    //if (AssignR_D)
                    //{
                    bool Status = UpdateComplaintStatus(info.ComplaintID, 26, 27, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);

                    string SubDialog = "is approved by BM (For Reprocessing)";

                    string Dialog = "The request to “Reprocess” the following Complaint Batch has been approved. Stock Receipt has been initiated.";

                    bool script_Temp4 = send_TempCM(info.ComplaintID, AssignedTo.Plant, info.CreatedBy, info.Remarks, SubDialog, Dialog);



                    //}
                    // else
                    //{
                    //bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 19, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);
                    //bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 22, AssignedTo.R_And_D, 6, 8, info.EmpCode, info.Remarks);
                    //  bool Status = UpdateComplaintStatus(info.ComplaintID, 26, 37, CM.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);
                    // }


                }


                return "Success: RCA approved succesfully";


            }
        }

        public static string BMApproveSelling(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var RCADetails = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 8).FirstOrDefault();
                var RCADetails1 = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 3).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var CM = context.tblComplaintStakeHolders.FirstOrDefault();


                bool Status = UpdateComplaintStatus(info.ComplaintID, 74, 71, " ", 7, 9, info.EmpCode, info.Remarks);

                string SubDialog = "is approved by BM (To Sell)";

                string Dialog = "The request to “Sell” the following Complaint Batch has been approved.";

                bool script_Temp4 = send_TempCM(info.ComplaintID, CM.ComplaintManager, info.EmpCode, info.Remarks, SubDialog, Dialog);

                return "Success: RCA approved succesfully";


            }
        }



        public static string BHApproveRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();
                var RCADetails = context.tblComplaintRCAs.Where(x => x.Complaint_ID == info.ComplaintID && x.Department_ID == 8).FirstOrDefault();
                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var CM = context.tblComplaintStakeHolders.FirstOrDefault();
                bool AssignPlant = false;
                bool AssignR_D = false;
                if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == true)
                {
                    AssignPlant = true;
                }
                else if (RCADetails.IsRectifiable == true && RCADetails.IsReprocessing == false)
                {
                    //Quartine
                    AssignPlant = false;
                }
                else if (RCADetails.IsRectifiable == false)
                {
                    //Quartine
                    AssignR_D = true;
                }

                // bool Status = UpdateComplaintStatus(info.ComplaintID, 34, 19, AssignedTo.Plant, 9, 6, info.EmpCode, info.Remarks);

                if (AssignPlant)
                {
                    bool Status = UpdateComplaintStatus(info.ComplaintID, 34, 27, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);
                }
                else
                {
                    //bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 19, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);
                    //bool Status = UpdateComplaintStatus(info.ComplaintID, 18, 22, AssignedTo.R_And_D, 6, 8, info.EmpCode, info.Remarks);
                    bool Status = UpdateComplaintStatus(info.ComplaintID, 34, 37, CM.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);
                }


                return "Success: RCA approved succesfully";
            }
        }

        public static string BMReject(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 20, 20, "", 7, 6, info.EmpCode, info.Remarks);

                return "Success: RCA rejected succesfully";
            }
        }

        public static string BMReconsider(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                // var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 79, 67, AssignedTo.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);

                return "Success: RCA has been assigned back to Complaint Manager";
            }
        }

        public static string BHReject(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 35, 35, "", 9, 9, info.EmpCode, info.Remarks);

                return "Success: RCA rejected succesfully";
            }
        }

        public static string BHReconsider(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 58, 15, AssignedTo.Plant, 9, 6, info.EmpCode, info.Remarks);

                return "Success: RCA has been assigned back to plant";
            }
        }

        public static string BMRejectRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 28, 28, "", 7, 6, info.EmpCode, info.Remarks);

                return "Success: RCA rejected succesfully";
            }
        }

        public static string BMReconsiderRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                //  var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();


                bool Status = UpdateComplaintStatus(info.ComplaintID, 79, 67, AssignedTo.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);

                return "Success: RCA is assigned back to Complaint Manager..";
            }
        }

        public static string BMReconsiderQuartine(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                //  var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();


                bool Status = UpdateComplaintStatus(info.ComplaintID, 79, 67, AssignedTo.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);


                #region Send mail

                string SubDialog = "is reconsidered to CM by BM (To Quarantine)";

                string Dialog = "Please reconsider your request to “Quarantine” the following Complaint Batch.";

                bool script_Temp4 = send_TempCM(info.ComplaintID, AssignedTo.ComplaintManager, info.EmpCode, info.Remarks, SubDialog, Dialog);

                #endregion




                return "Success: RCA is assigned back to Complaint Manager..";
            }
        }

        public static string BMReconsiderSelling(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                //  var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();


                bool Status = UpdateComplaintStatus(info.ComplaintID, 79, 67, AssignedTo.ComplaintManager, 7, 3, info.EmpCode, info.Remarks);


                #region Send mail

                string SubDialog = "is reconsidered to CM by BM (To Sell)";

                string Dialog = "Please reconsider your request to “Sell” the following Complaint Batch";

                bool script_Temp4 = send_TempCM(info.ComplaintID, AssignedTo.ComplaintManager, info.EmpCode, info.Remarks, SubDialog, Dialog);

                #endregion


                return "Success: RCA is assigned back to Complaint Manager..";
            }
        }



        public static string BHRejectRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 36, 36, "", 9, 9, info.EmpCode, info.Remarks);

                return "Success: RCA rejected succesfully";
            }
        }

        public static string BHReconsiderRD(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 59, 22, AssignedTo.R_And_D, 9, 8, info.EmpCode, info.Remarks);

                return "Success: RCA has been assigned back to R&D";
            }
        }

        public static string InitiateQuartine(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 23, 37, AssignedTo.ComplaintManager, 8, 3, info.EmpCode, info.Remarks);

                return "Success: Quarantine Process initiated";
            }
        }

        public static string QurantineReceipt(QuarantineInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                string str = ComplaintRCADAL.QurantineStockReceipt(info);

                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.Complaint_Id, 43, 43, "", 6, 6, info.CreatedBy, info.Remarks);

                var stack = context.tblComplaintStakeHolders.FirstOrDefault();

                #region Send mail

                string SubDialog = "Reprocessing has been Completed.";

                string Dialog = "The Reprocessing for the following Complaint batch has completed.The New Batch Number for the product is “New Batch Number";

                bool script_Temp4 = send_TempCM(info.Complaint_Id, stack.ComplaintManager, info.CreatedBy, info.Remarks, SubDialog, Dialog);

                #endregion

                return str;
            }
        }

        public static string CMSubmitQurantine(QuarantineInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.Complaint_Id).FirstOrDefault();

                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();


                var createCheck = context.TblComplaintRequestHdrs.Where(x => x.CreatedBy == Stake.Catalyst && x.Complaint_ID == info.Complaint_Id).FirstOrDefault();

                var futSt = context.tblFutureStatus.Where(x => x.IsDeleted == false && x.Complaint_Id == info.Complaint_Id).FirstOrDefault();

                var AssignedTo = "";

                if (createCheck != null)
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(futSt.AssignedTo).FirstOrDefault();
                }
                else
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(LocationDetails.CreatedBy).FirstOrDefault();

                }






                if (AssignedTo != null)
                {
                    string msg = CreateComplaintRCA1(info);

                    //string str1 =   ComplaintRCADAL.CreateComplaintRCA(info);

                    string str = ComplaintRCADAL.AddQuarantine(info);



                    //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                    bool Status = UpdateComplaintStatus(info.Complaint_Id, 38, 39, AssignedTo, 3, 7, info.CreatedBy, info.Remarks);
                    string SubDialog = "forwarded to BM by CM (For Quarantine)";

                    string Dialog = "To rectify the following product complaint, we have recommended to “Quarantine” the following Product Batch.";

                    bool script_Temp4 = send_TempCM(info.Complaint_Id, AssignedTo, info.CreatedBy, info.Remarks, SubDialog, Dialog);



                    return str;
                }
                else
                {
                    return "Error: BM not defined for this request";
                }
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CMReprocessingSubmit(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();

                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();

                var createCheck = context.TblComplaintRequestHdrs.Where(x => x.CreatedBy == Stake.Catalyst && x.Complaint_ID == ComplaintID).FirstOrDefault();

                var futSt = context.tblFutureStatus.Where(x => x.IsDeleted == false && x.Complaint_Id == ComplaintID).FirstOrDefault();

                var AssignedTo = "";

                if (createCheck != null)
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(futSt.AssignedTo).FirstOrDefault();
                }
                else
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                }



                //var AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();

                var FlowDetails = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();
                if (AssignedTo != null)
                {
                    bool Status = UpdateComplaintStatus(ComplaintID, 69, 68, AssignedTo, 3, 7, EmpCode, Remarks);

                    #region Send Email

                    string SubDialog = "is approved by BM (For Reprocessing)";

                    string Dialog = "The request to “Reprocess” the following Complaint Batch has been approved.Stock Receipt has been initiated.";

                    bool script_Temp4 = send_TempCM(ComplaintID, AssignedTo, EmpCode, Remarks, SubDialog, Dialog);

                    #endregion

                    return "Success: Complaint assigned for Business Manager for Approval";
                }
                else
                {
                    return "Error: BM not defined for this request";
                }
            }
        }

        public static string CMSellingSubmit(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();

                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var FlowDetails = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();




                var createCheck = context.TblComplaintRequestHdrs.Where(x => x.CreatedBy == Stake.Catalyst && x.Complaint_ID == ComplaintID).FirstOrDefault();

                var futSt = context.tblFutureStatus.Where(x => x.IsDeleted == false && x.Complaint_Id == ComplaintID).FirstOrDefault();

                var AssignedTo = "";

                if (createCheck != null)
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(futSt.AssignedTo).FirstOrDefault();
                }
                else
                {
                    AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                }







                if (AssignedTo != null)
                {
                    bool Status = UpdateComplaintStatus(ComplaintID, 70, 73, AssignedTo, 3, 7, EmpCode, Remarks);

                    #region Send Email

                    string SubDialog = "forwarded to BM by CM (To Sell)";

                    string Dialog = "To rectify the following product complaint, we have recommended to “Sell” the following Product Batch.";

                    bool script_Temp4 = send_TempCM(ComplaintID, AssignedTo, EmpCode, Remarks, SubDialog, Dialog);

                    #endregion

                    return "Success: Complaint assigned for Business Manager for Approval";
                }
                else
                {
                    return "Error: BM not defined for this request";
                }
            }
        }

        public static string CMClosingComplaintSubmit(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComDtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID).FirstOrDefault();
                var AssignedTo = context.SP_GetBusinessManagerForUser(ComDtl.CreatedBy).FirstOrDefault();
                var Stake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                var FlowDetails = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == ComDtl.RequestRCA).FirstOrDefault();
                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();

                bool Status = UpdateComplaintStatus(ComplaintID, 72, 71, " ", 3, 3, EmpCode, Remarks);

                #region Send Email
                //var Plant = UserDAL.GetEmail(FlowDetails.Plant);
                //var RD = UserDAL.GetEmail(EmpCode);
                //var CHEmail = UserDAL.GetEmail(Stake.ComplaintHandler);
                //var CMEmail = UserDAL.GetEmail(Stake.ComplaintManager);
                //var BM = UserDAL.GetEmail(AssignedTo);



                //string subject = "Complaint: " + ComDtl.ComplaintNumber + " has been updated by R&D";
                //string Body = "Complaint: " + ComDtl.ComplaintNumber + " has been Updated by R&D. Please review to proceed further";

                //MailAddressCollection To = new MailAddressCollection();
                //To.Add(BM.email_id);

                //MailAddressCollection CC = new MailAddressCollection();
                //CC.Add(CHEmail.email_id);
                //CC.Add(CMEmail.email_id);
                //CC.Add(Plant.email_id);


                //string str = Email.sendEmail(subject, RD.email_id, To, CC, Body);
                #endregion

                return "Success: RCA has been closed";

            }
        }


        public static string BMApproveQurantine(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var QurantineDtl = context.tblComplaintQuarantines.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 40, 42, AssignedTo.Plant, 7, 6, info.EmpCode, info.Remarks);

                #region Send Email

                string SubDialog = "is approved by BM (Qurantine)";

                string Dialog = "The request to “Qurantine” the following Complaint Batch has been approved.";

                bool script_Temp4 = send_TempCM(info.ComplaintID, AssignedTo.Plant, info.EmpCode, info.Remarks, SubDialog, Dialog);

                #endregion



                return "Success: Quarantine Receipt initiated";



            }
        }

        public static string BMRejectQurantine(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var QurantineDtl = context.tblComplaintQuarantines.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var LocationDetails = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == info.ComplaintID).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == LocationDetails.RequestRCA).FirstOrDefault();

                bool Status = UpdateComplaintStatus(info.ComplaintID, 41, 41, "", 7, 7, info.EmpCode, info.Remarks);
                return "Success: Quarantine details rejected";



            }
        }

        public static string PlntStockReceipt(int ComplaintID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                // var AssignedTo1 = context.tblFlowMatrices.Where(x => x.Type == "Local").FirstOrDefault();


                string SMP = "";
                string NonPaint = "";
                var sp = context.tblFlowMatrices.Where(x => x.Type == "SMP").FirstOrDefault();
                SMP = sp.OutSourced;
                var NP = context.tblFlowMatrices.Where(x => x.Type == "NonPaint").FirstOrDefault();
                NonPaint = NP.OutSourced;
                string msg;

                if (SMP == EmpCode)
                {
                    bool Status = UpdateComplaintStatus(ComplaintID, 86, 86, "", 10, 10, EmpCode, Remarks);


                    #region Send Email

                    string SubDialog = "Reprocessing has been Completed.";

                    string Dialog = "The Reprocessing for the following Complaint batch has completed.The New Batch Number for the product is “New Batch Number”";

                    bool script_Temp4 = send_TempCM(ComplaintID, AssignedTo.ComplaintManager, EmpCode, Remarks, SubDialog, Dialog);

                    #endregion


                    msg = "Success: Stock Receipt by SMP";
                }
                else if (NonPaint == EmpCode)
                {
                    bool Status = UpdateComplaintStatus(ComplaintID, 87, 87, "", 11, 11, EmpCode, Remarks);

                    #region Send Email

                    string SubDialog = "Reprocessing has been Completed.";

                    string Dialog = "The Reprocessing for the following Complaint batch has completed.The New Batch Number for the product is “New Batch Number”";

                    bool script_Temp4 = send_TempCM(ComplaintID, AssignedTo.ComplaintManager, EmpCode, Remarks, SubDialog, Dialog);

                    #endregion

                    msg = "Success: Stock Receipt by NonPaint";
                }
                else
                {



                    bool Status = UpdateComplaintStatus(ComplaintID, 21, 21, "", 6, 6, EmpCode, Remarks);

                    #region Send Email

                    string SubDialog = "Reprocessing has been Completed.";

                    string Dialog = "The Reprocessing for the following Complaint batch has completed.The New Batch Number for the product is “New Batch Number”";

                    bool script_Temp4 = send_TempCM(ComplaintID, AssignedTo.ComplaintManager, EmpCode, Remarks, SubDialog, Dialog);

                    #endregion
                    msg = "Success: Stock Receipt by Plant";
                }


                return "" + msg;
            }
        }

        public static bool UpdateComplaintStatus(int ComplaintID, int StatusID, int FutStatusId, string AssignedTo, int RoleID, int AssignedRoleID, string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var hdr = context.tblApprovalHeaders.Where(x => x.Complaint_ID == ComplaintID && x.IsDeleted == false).FirstOrDefault();


                hdr.Status_ID = StatusID;
                hdr.AssignTo = AssignedTo;
                hdr.Role_Id = RoleID;
                hdr.AssignedRole_Id = AssignedRoleID;
                hdr.IsDeleted = false;
                hdr.ModifiedBy = EmpCode;
                hdr.ModifiedDate = DateTime.Now;

                context.Entry(hdr).State = EntityState.Modified;
                context.SaveChanges();

                tblApprovalDetail dtl = new tblApprovalDetail
                {

                    ApprovalHeader_ID = hdr.ApprovalHeader_ID,
                    Status_ID = StatusID,
                    Role_Id = RoleID,
                    Employee_Code = EmpCode,
                    Remarks = "",
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(dtl).State = EntityState.Added;
                context.SaveChanges();

                tblFutureStatu fut = new tblFutureStatu
                {
                    Complaint_Id = ComplaintID,
                    Status_ID = FutStatusId,
                    AssignedTo = AssignedTo,
                    Role_Id = AssignedRoleID,
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(fut).State = EntityState.Added;
                context.SaveChanges();

                return true;

            }
        }

        public static bool UpdateComplaintStatus(int ComplaintID, int StatusID, int FutStatusId, string AssignedTo, int RoleID, int AssignedRoleID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var hdr = context.tblApprovalHeaders.Where(x => x.Complaint_ID == ComplaintID && x.IsDeleted == false).FirstOrDefault();


                hdr.Status_ID = StatusID;
                hdr.AssignTo = AssignedTo;
                hdr.Role_Id = RoleID;
                hdr.AssignedRole_Id = AssignedRoleID;
                hdr.IsDeleted = false;
                hdr.ModifiedBy = EmpCode;
                hdr.ModifiedDate = DateTime.Now;

                context.Entry(hdr).State = EntityState.Modified;
                context.SaveChanges();

                tblApprovalDetail dtl = new tblApprovalDetail
                {

                    ApprovalHeader_ID = hdr.ApprovalHeader_ID,
                    Status_ID = StatusID,
                    Role_Id = RoleID,
                    Employee_Code = EmpCode,
                    Remarks = Remarks,
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(dtl).State = EntityState.Added;
                context.SaveChanges();

                tblFutureStatu fut = new tblFutureStatu
                {
                    Complaint_Id = ComplaintID,
                    Status_ID = FutStatusId,
                    AssignedTo = AssignedTo,
                    Role_Id = AssignedRoleID,
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(fut).State = EntityState.Added;
                context.SaveChanges();


                return true;
            }
        }

        public static bool UpdateCompensationStatus(int CompensationId, int StatusID, int FutStatusId, string AssignedTo, int RoleID, int AssignedRoleID, string EmpCode, string Remarks)
        {
            using (var context = new CustomerComplaintEntities())
            {
                tblApprovalHeader hdr = context.tblApprovalHeaders.Where(x => x.Compensation_Id == CompensationId && x.IsDeleted == false).FirstOrDefault();

                if (hdr == null)
                {
                    hdr = new tblApprovalHeader
                    {

                        Compensation_Id = CompensationId,
                        Status_ID = StatusID,
                        AssignTo = AssignedTo,
                        Role_Id = RoleID,
                        AssignedRole_Id = AssignedRoleID,
                        IsDeleted = false,
                        CreatedBy = EmpCode,
                        CreationDate = DateTime.Now
                    };
                    context.Entry(hdr).State = EntityState.Added;
                    context.SaveChanges();
                }
                else
                {
                    hdr.Status_ID = StatusID;
                    hdr.AssignTo = AssignedTo;
                    hdr.Role_Id = RoleID;
                    hdr.AssignedRole_Id = AssignedRoleID;
                    hdr.IsDeleted = false;
                    hdr.ModifiedBy = EmpCode;
                    hdr.ModifiedDate = DateTime.Now;

                    context.Entry(hdr).State = EntityState.Modified;
                    context.SaveChanges();
                }

                tblApprovalDetail dtl = new tblApprovalDetail
                {

                    ApprovalHeader_ID = hdr.ApprovalHeader_ID,
                    Status_ID = StatusID,
                    Role_Id = RoleID,
                    Employee_Code = EmpCode,
                    Remarks = Remarks,
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(dtl).State = EntityState.Added;
                context.SaveChanges();

                tblFutureStatu fut = new tblFutureStatu
                {
                    Compensation_Id = CompensationId,
                    Status_ID = FutStatusId,
                    AssignedTo = AssignedTo,
                    Role_Id = AssignedRoleID,
                    IsDeleted = false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(fut).State = EntityState.Added;
                context.SaveChanges();

                return true;

            }
        }


        /// <summary>
        ///                                       Compensation Reconsider By Bussiness Manager
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CompensationBMReconsider(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.tblComplaintCompensations.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var complaintdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == compdtl.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == complaintdtl.RequestRCA).FirstOrDefault();
                decimal CompValue = 0;

                UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 60, 49, compdtl.CreatedBy, 7, 1, info.EmpCode, info.Remarks);


                try
                {

                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();

                    // var proInfo = context.tblProductMasters.Where(X => X.Product_ID == complaintdtl.Product_ID).FirstOrDefault();
                    // var delInfo = context.tblDealerMasters.Where(X => X.Dealer_ID == complaintdtl.Dealer_ID).FirstOrDefault();




                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var GetReconsiderTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 10).FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);

                    var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                    var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                    var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);


                    //var SH = UserDAL.GetEmail(UserEmail.);

                    var RequesterEmail = UserDAL.GetEmail(info.EmpCode);




                    string subject = "Complaint Number " + complaintdtl.ComplaintNumber + " Submitted by" + UserEmail.Emp_First_name + " sent for reconsider of Compensation.";         //+ " submitted by" + UserEmail.Emp_First_name + ".";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(UserEmail.email_id);
                    MailAddressCollection CC = new MailAddressCollection();
                    // CC.Add(RequesterEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(ComplaintHandler.email_id);
                    CC.Add(ComplaintManager.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = GetReconsiderTemplate.Templat_Body.Replace("{Requestor Name}", UserEmail.Emp_First_name);                        //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", complaintdtl.ComplaintNumber.ToString());
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);
                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Business Manager Remarks}", info.Remarks);
                    Body13 += Body12.Replace("{Business Manager}", RequesterEmail.Emp_First_name);


                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, RequesterEmail.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

                return "Success: Compensation form assigned to user";

            }
        }


        /// <summary>
        ///                                           Compensation Approve By BUssiness Manager 
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        /// 

        public static string CompensationBMApprove(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.tblComplaintCompensations.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var complaintdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == compdtl.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == complaintdtl.RequestRCA).FirstOrDefault();


                var cmptCompDtl = context.tblComplaintCompensationDtls.Where(x => x.ComplaintCompensation_Id == compdtl.ComplaintCompensation_Id).FirstOrDefault();


                decimal CompValue = 0;

                if (cmptCompDtl.CompensationType == 1)
                {
                    CompValue = Convert.ToDecimal(cmptCompDtl.CompensationValue) + Convert.ToDecimal(cmptCompDtl.DamageValue) + Convert.ToDecimal(cmptCompDtl.GoodwillValue);
                }
                //else if (compdtl.CompensationType == 1)
                //{
                //    CompValue = Convert.ToDecimal(compdtl.DamageValue);
                //}
                //else
                //{
                //    CompValue = Convert.ToDecimal(compdtl.GoodwillValue);
                //}




                if (CompValue > 100000)
                {
                     UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 46, 47, "NPI0455", 7, 9, info.EmpCode, info.Remarks);

                    try
                    {
                        var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                        var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();

                        var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                        var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 14).FirstOrDefault();

                        string selectedComplainttype = "";
                        foreach (var k in complatnt)
                        {
                            var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                            selectedComplainttype += "," + compCatType.ComplaintType;

                        }
                        selectedComplainttype = selectedComplainttype.Remove(0, 1);

                        var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);
                        var BusinessHead = UserDAL.GetEmail("NPI0455");

                        var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                        var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                        var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                        var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                        //var SH = UserDAL.GetEmail(UserEmail.);



                        var ApproveEmail = UserDAL.GetEmail(info.EmpCode);


                        string subject = "Complaint Number " + ComplaintDetail.ComplaintNumber + "Submitted by" + UserEmail.Emp_First_name + "is approved for Compensation. ";  //+ " submitted by" + UserEmail.Emp_First_name + ".";

                        MailAddressCollection To = new MailAddressCollection();
                        To.Add(BusinessHead.email_id);
                        MailAddressCollection CC = new MailAddressCollection();
                        // CC.Add(ApproveEmail.email_id);
                        CC.Add(RM1.email_id);
                        CC.Add(RM2.email_id);
                        CC.Add(ComplaintHandler.email_id);
                        CC.Add(ComplaintManager.email_id);

                        string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                        Body1 = GetApproveTemplate.Templat_Body.Replace("{Business Head}", BusinessHead.Emp_First_name); //replacing the required things  
                        Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                        Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                        Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                        Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                        Body6 += Body5.Replace("{Ticket Number}", complaintdtl.ComplaintNumber.ToString());
                        Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                        Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                        Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                        Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                        Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                        Body12 += Body11.Replace("{Business Manager Remarks}", info.Remarks);
                        Body13 += Body12.Replace("{Business Manager}", ApproveEmail.Emp_First_name);
                        if (ComplaintDetail.BatchNumber != "0")
                        {
                            Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                            Body = Body14;
                        }
                        else
                        {
                            Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                            Body = Body14;
                        }

                        string str = Email.sendEmail(subject, ApproveEmail.email_id, To, CC, Body);


                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }

                    return "Success: Compensation form assigned to business Head";
                }
                else
                {
                    UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 46, 49, complaintdtl.CreatedBy, 7, 1, info.EmpCode, info.Remarks);

                    try
                    {
                        var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                        var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();

                        var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                        var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 9).FirstOrDefault();

                        string selectedComplainttype = "";
                        foreach (var k in complatnt)
                        {
                            var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                            selectedComplainttype += "," + compCatType.ComplaintType;

                        }
                        selectedComplainttype = selectedComplainttype.Remove(0, 1);

                        var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);
                        var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                        var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                        var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                        var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                        //var SH = UserDAL.GetEmail(UserEmail.);

                        var ApproveEmail = UserDAL.GetEmail(info.EmpCode);


                        string subject = "Complaint Number " + ComplaintDetail.ComplaintNumber + "Submitted by" + UserEmail.Emp_First_name + "is approved for Compensation. ";  //+ " submitted by" + UserEmail.Emp_First_name + ".";

                        MailAddressCollection To = new MailAddressCollection();
                        To.Add(UserEmail.email_id);
                        MailAddressCollection CC = new MailAddressCollection();
                        // CC.Add(ApproveEmail.email_id);
                        CC.Add(RM1.email_id);
                        CC.Add(RM2.email_id);
                        CC.Add(ComplaintHandler.email_id);
                        CC.Add(ComplaintManager.email_id);

                        string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                        Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor Name}", UserEmail.Emp_First_name); //replacing the required things  
                        Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                        Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                        Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                        Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                        Body6 += Body5.Replace("{Ticket Number}", complaintdtl.ComplaintNumber.ToString());
                        Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                        Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                        Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                        Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                        Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                        Body12 += Body11.Replace("{Business Manager Remarks}", info.Remarks);
                        Body13 += Body12.Replace("{Business Manager}", ApproveEmail.Emp_First_name);
                        if (ComplaintDetail.BatchNumber != "0")
                        {
                            Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                            Body = Body14;
                        }
                        else
                        {
                            Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                            Body = Body14;
                        }

                        string str = Email.sendEmail(subject, ApproveEmail.email_id, To, CC, Body);


                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }

                    return "Success: Compensation form assigned to user";
                }


            }
        }


        /// <summary>
        ///                                           Compensation Reject  By BUssiness Manager 
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        public static string CompensationBMReject(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.tblComplaintCompensations.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var complaintdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == compdtl.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == complaintdtl.RequestRCA).FirstOrDefault();
                decimal CompValue = 0;

                UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 50, 50, "", 7, 7, info.EmpCode, info.Remarks);

                try
                {
                    var GetRejectTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 8).FirstOrDefault();


                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);




                    var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);

                    var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                    var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                    //	var SH = UserDAL.GetEmail(UserEmail);
                    var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);

                    var RejecterEmail = UserDAL.GetEmail(info.EmpCode);


                    string subject = "Complaint Number" + ComplaintDetail.ComplaintNumber + " Submitted by" + UserEmail.Emp_First_name + "is rejected for Compensation.";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(UserEmail.email_id);
                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(ComplaintHandler.email_id);
                    CC.Add(ComplaintManager.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = GetRejectTemplate.Templat_Body.Replace("{Name}", UserEmail.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Business Manager Remarks}", info.Remarks);
                    Body13 += Body12.Replace("{Business Manager}", RejecterEmail.Emp_First_name);
                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }


                    string str = Email.sendEmail(subject, RejecterEmail.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }




                return "Success: Compensation form rejected successfully";



            }
        }







        public static string CompensationBHApprove(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.tblComplaintCompensations.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var complaintdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == compdtl.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == complaintdtl.RequestRCA).FirstOrDefault();
                decimal CompValue = 0;

                UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 48, 49, complaintdtl.CreatedBy, 9, 1, info.EmpCode, info.Remarks);


                try
                {
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 12).FirstOrDefault();


                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);




                    var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);

                    var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                    var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                    //	var SH = UserDAL.GetEmail(UserEmail);
                    var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);

                    var ApproveEmail = UserDAL.GetEmail(info.EmpCode);


                    string subject = "Complaint Number" + ComplaintDetail.ComplaintNumber + " Submitted by" + UserEmail.Emp_First_name + " is approved for Compensation.";



                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(UserEmail.email_id);
                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(ComplaintHandler.email_id);
                    CC.Add(ComplaintManager.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor’s Name}", UserEmail.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Business Head Remarks}", info.Remarks);
                    Body13 += Body12.Replace("{Business Head}", ApproveEmail.Emp_First_name);
                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }


                    string str = Email.sendEmail(subject, ApproveEmail.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }



                return "Success: Compensation form assigned to user";



            }
        }

        public static string CompensationBHReject(AssignInfo info)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.tblComplaintCompensations.Where(x => x.Complaint_Id == info.ComplaintID).FirstOrDefault();
                var complaintdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == compdtl.Complaint_Id).FirstOrDefault();

                var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == complaintdtl.RequestRCA).FirstOrDefault();
                decimal CompValue = 0;


                UpdateCompensationStatus(compdtl.ComplaintCompensation_Id, 51, 51, "", 9, 9, info.EmpCode, info.Remarks);

                try
                {
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 13).FirstOrDefault();


                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(info.ComplaintID).FirstOrDefault();

                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == compdtl.Complaint_Id).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);




                    var UserEmail = UserDAL.GetEmail(complaintdtl.CreatedBy);

                    var RM1 = UserDAL.GetEmail(UserEmail.RM1);
                    var RM2 = UserDAL.GetEmail(UserEmail.RM2);
                    //	var SH = UserDAL.GetEmail(UserEmail);
                    var ComplaintHandler = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var ComplaintManager = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);

                    var RejectEmail = UserDAL.GetEmail(info.EmpCode);


                    string subject = "Complaint Number" + ComplaintDetail.ComplaintNumber + " Submitted by" + UserEmail.Emp_First_name + " is rejected for Compensation.";



                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(UserEmail.email_id);
                    MailAddressCollection CC = new MailAddressCollection();
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(ComplaintHandler.email_id);
                    CC.Add(ComplaintManager.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor’s Name}", UserEmail.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Business Head Remarks}", info.Remarks);
                    Body13 += Body12.Replace("{Business Head}", RejectEmail.Emp_First_name);
                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }


                    string str = Email.sendEmail(subject, RejectEmail.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }



                return "Success: Compensation form rejected successfully";



            }
        }

        public static IList<TSEInfo> GetTSEList()
        {
            using (var context = new CustomerComplaintEntities())
            {
                var lst = context.SP_GetTSE().ToList();

                IList<TSEInfo> info = null;

                info = lst.Select(x => new TSEInfo
                {

                    EmpName = x.EmpName,
                    EMP_CODE = x.EMP_CODE

                }).ToList();

                return info;
            }
        }

        public static RequestCountInfo GetTotalRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestCount(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }
        public static RequestCountInfo GetTotalInProgressRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestInProcess(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }
        public static RequestCountInfo GetTotalApprovedRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestApproved(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Count) };
            }
        }

        public static RequestCountInfo GetTotal_CH_Request(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestApproved_CH(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Count) };
            }
        }

        public static RequestCountInfo GetTotal_TSE_Request(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestApproved_TSE(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Count) };
            }
        }

        public static List<ManufacturingList> GetManufacturing_productStream_ApprovedComplaint(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var lst = context.Sp_Manufacturing_productStream_ApprovedComplaint(EmpCode).ToList();

                List<ManufacturingList> objList = new List<ManufacturingList>();
                // List<CplId> cpId = null;

                List<CplIdStream> cdpId = new List<CplIdStream>(); ;
                //var StreamLst = StreamList(EmpCode);

                foreach (var item in lst)
                {
                    //LocationName = item.ManufacturingLocation;
                    var Idx = objList.Where(x => x.ManufacturingLocation != null &&  x.ManufacturingLocation.Equals(item.ManufacturingLocation)).FirstOrDefault();
                    if (Idx == null)
                    {


                        //objList.Add(new ManufacturingList()
                        //{
                        //   //ManufacturingLocation = item.ManufacturingLocation,
                        //    strms = item.Stream,
                        //    Cplids = lst.Where(x => x.Stream.Equals(item.Stream)).Select(x => new CplId()
                        //    {
                        //        complaint_id = x.complaint_id,
                        //        strms = x.Stream


                        //    }).ToList(),
                        //});

                        objList.Add(new ManufacturingList()
                        {
                            ManufacturingLocation = item.ManufacturingLocation,
                            strms = item.Stream,
                            Cplids = lst.Where(x => x.ManufacturingLocation.Equals(item.ManufacturingLocation)).Select(x => new CplId()
                            {
                                complaint_Count = x.complaint_Count,
                                strms = x.Stream,
                                ConcateResults = x.Concate


                            }).ToList(),
                        });




                    }
                }


                //foreach (var item in StreamLst)
                //{
                //    if (item.Stream != null && !item.Stream.Equals("") && !item.Stream.Equals(string.Empty))
                //    {
                //        List<CplIdStream> List = lst.Where(x => x.Stream.Equals(item.Stream)).Select(x=>new CplIdStream() {
                //            complaint_id = x.complaint_id,
                //            strms = x.Stream


                //        }).ToList();
                //        cdpId.Add(new CplIdStream()
                //        {
                //            strms = item.Stream,

                //            Id = GenerateValue(item.Stream , EmpCode  , List)//

                //        });
                //    }
                //}




                return objList;
            }
        }


        //public static List<int?> GenerateValue(string name, string empCode, List<CplIdStream> list)
        //{

        //    var StreamLst = StreamList(empCode);

        //    List<int?> streamValue = new List<int?>();
        //    foreach (var item in StreamLst)
        //    {
        //        if (name.Equals(item.Stream))
        //        {

        //            foreach (var item1 in list)
        //            {

        //                streamValue.Add(item1.complaint_id);
        //            }
                    
        //        }
        //        else {
        //            streamValue.Add(0);

        //        }
        //    }

        //    return streamValue;

        //}

        public static List<Brand_productStream_ApprovedComplaint> GetBrand_productStream_ApprovedComplaint(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var lst = context.Sp_Brand_productStream_ApprovedComplaint(EmpCode).ToList();

                List<Brand_productStream_ApprovedComplaint> objList = new List<Brand_productStream_ApprovedComplaint>();

                foreach (var item in lst)
                {
                    //LocationName = item.ManufacturingLocation;
                    var Idx = objList.Where(x => x.BrandName.Equals(item.BrandName)).FirstOrDefault();
                    if (Idx == null)
                    {
                        objList.Add(new Brand_productStream_ApprovedComplaint()
                        {
                            BrandName = item.BrandName,
                            Cplids = lst.Where(x => x.BrandName.Equals(item.BrandName)).Select(x => new CplId()
                            {
                                complaint_Count = x.Complaint_Count,
                                strms = x.Stream

                            }).ToList(),
                        });
                    }
                }
                return objList;
            }
        }


        public static List<Segment_productStream_ApprovedComplaint> GetSegment_productStream_ApprovedComplaint(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var lst = context.Sp_Segment_productStream_ApprovedComplaint(EmpCode).ToList();

                List<Segment_productStream_ApprovedComplaint> objList = new List<Segment_productStream_ApprovedComplaint>();

                foreach (var item in lst)
                {
                    //LocationName = item.ManufacturingLocation;
                    var Idx = objList.Where(x => x.Segment.Equals(item.Segment)).FirstOrDefault();
                    if (Idx == null)
                    {
                        objList.Add(new Segment_productStream_ApprovedComplaint()
                        {
                            Segment = item.Segment,
                            Cplids = lst.Where(x => x.Segment.Equals(item.Segment)).Select(x => new CplId()
                            {
                                complaint_Count = x.Complaint_Count,
                                strms = x.Stream


                            }).ToList(),
                        });
                    }
                }
                return objList;
            }
        }






        public static List<ManufacturingList> StreamList(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {

                //var lst = context.Sp_Manufacturing_productStream_ApprovedComplaint(EmpCode).ToList();


                List<ManufacturingList> info = null;

                //info = context.Sp_Manufacturing_productStream_ApprovedComplaint(EmpCode).Select(x => new ManufacturingList
                info = context.tblProductMasters.Select(x => new ManufacturingList
                {
                  strms=x.Stream,
                    //ManufacturingLocation=x.ManufacturingLocation
                }).Distinct().OrderBy(x => x.strms).ToList();

                return info;
            }
        }









        public static RequestCountInfo GetTotalRejectedRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRequestRejected(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Count) };
            }
        }

        public static void Reconsider(ReconsiderUserBLL obj)                                        //---------Reconder by CH ---------------//
        {
            using (var context = new CustomerComplaintEntities())
            {
                //int AssignedRoleID = UserDAL.GetUserRole(obj.AssignTo);

                var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                int Com_ID = Convert.ToInt32(obj.Complaint_ID);

                var assign_Info = context.tblFutureStatus.Where(x => x.Complaint_Id == Com_ID).FirstOrDefault();  //-----------for assign catlyst case---//

                var createCheck = context.TblComplaintRequestHdrs.Where(x => x.CreatedBy == ComplntStkHld.Catalyst && x.Complaint_ID == Com_ID).FirstOrDefault();

                if (createCheck != null)
                {
                    bool st = UpdateComplaintStatus(Convert.ToInt32(obj.Complaint_ID), 55, 54, assign_Info.AssignedTo, 2, 1, obj.ModifiedBy, obj.Remarks);
                }
                else
                {
                    bool st = UpdateComplaintStatus(Convert.ToInt32(obj.Complaint_ID), 55, 54, obj.AssignTo, 2, 1, obj.ModifiedBy, obj.Remarks);

                }



                var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(Convert.ToInt32(obj.Complaint_ID)).FirstOrDefault();


                var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == ComplaintDetail.ComplaintType_ID).ToList();



                string selectedComplainttype = "";

                foreach (var k in compCatType)
                {
                    selectedComplainttype += "," + k.ComplaintType;
                }
                selectedComplainttype = selectedComplainttype.Remove(0, 1);

                var templt = context.TblTemplateMasters.ToList();


                var RequesterName = context.Sp_GETName(ComplaintDetail.CreatedBy).FirstOrDefault();
                var empName = context.Sp_GETName(obj.ModifiedBy).FirstOrDefault();



                #region Send Email

                try
                {

                    var CHEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var EmployeeEmail = UserDAL.GetEmail(obj.ModifiedBy);
                    var CMEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(RequesterName.RM1);
                    var RM2 = UserDAL.GetEmail(RequesterName.RM2);
                    var QC = context.Sp_GETName("NPI1700").FirstOrDefault();


                    string subject = "Reconsider by CH: Complaint Number" + ComplaintDetail.ComplaintNumber + " submitted by " + RequesterName.Emp_First_name + ".";

                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterName.email_id);
                    MailAddressCollection CC = new MailAddressCollection();
                    // CC.Add(EmployeeEmail.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CMEmail.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(QC.email_id);



                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                    Body1 = templt[1].Templat_Body.Replace("{Name}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);

                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{Requestor Name}", RequesterName.Emp_First_name);

                    Body13 += Body12.Replace("{Remarks by Complaint Handler}", obj.Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }

                    string str = Email.sendEmail(subject, EmployeeEmail.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                #endregion

            }
        }


        public static void ReconsiderCM(ReconsiderUserBLL obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var AssignedTo = context.tblComplaintStakeHolders.FirstOrDefault();
                bool st = UpdateComplaintStatus(Convert.ToInt32(obj.Complaint_ID), 61, 54, AssignedTo.ComplaintHandler, 3, 1, obj.ModifiedBy, obj.Remarks);
            }


        }

        public static RequestCountInfo GetTotalInProcessCompRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalInProcessCompRequest(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Value) };
            }
        }

        public static RequestCountInfo GetTotalPendingRequestForApproval(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalPendingRequestForApproval(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Value) };
            }
        }

        public static RequestCountInfo GetTotalApprovedCompRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalApprovedCompRequest(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Value) };
            }
        }

        public static RequestCountInfo GetTotalRejectedCompRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRejectedCompRequest(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Value) };
            }
        }

        //----------------------------COUNT FOR PENDING RCA -  PLANT --------------------------------------//

        public static RequestCountInfo GetTotalPendingRequestForPlant(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetApproveProcessCountRCA(EmpCode).Where(x => x.Status_ID == 15 || x.Status_ID == 19).ToList();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }

        //----------------------------COUNT FOR PENDING RCA -  R & D -----------------------------------------//

        public static RequestCountInfo GetTotalPendingRequestForRnD(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetApproveProcessCountRCA(EmpCode).Where(x => x.Status_ID == 22).ToList();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }

        //----------------------------COUNT FOR PENDING R & D - BM -----------------------------------------//


        public static RequestCountInfo GetTotalPendingRequestForRnDBM(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetApproveProcessCountRCA(EmpCode).Where(x => x.Status_ID == 25).ToList();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }

        //----------------------------COUNT FOR PENDING Quarantine -----------------------------------------//

        public static RequestCountInfo GetTotalPendingRequestForQuarantine(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetApproveProcessCountRCA(EmpCode).Where(x => x.Status_ID == 37).ToList();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }

        //----------------------------COUNT FOR PENDING BusinessManager -----------------------------------------//

        public static RequestCountInfo GetTotalPendingRequestForBusinessManager(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GetApproveProcessCountRCA(EmpCode).Where(x => x.Status_ID == 17 || x.Status_ID == 25).ToList();

                return new RequestCountInfo { Count = dtl.Count };
            }
        }

        //----------------------------COUNT FOR PENDING RCA Reject -----------------------------------------//

        public static RequestCountInfo GetTotalRCAReject(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_TotalRCARjectCount(EmpCode).FirstOrDefault();

                return new RequestCountInfo { Count = Convert.ToInt32(dtl.Value) };
            }
        }

        //----------------------------COUNT FOR Total RCA COMP Count-----------------------------------------//



        public static List<TotalRCACompCount_Model> GetTotalRCACompCount(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.Sp_GetTotalRCACompCount(EmpCode).ToList();

                List<TotalRCACompCount_Model> list = null;

                list = dtl.Select(x => new TotalRCACompCount_Model
                {
                    CompCount = x.CompCount,
                    Month = x.Month,
                    RCACount = x.RCACount,
                    monthName = x.monthName,
                    TotalCount = x.TotalCount

                }).ToList();

                return list;


            }
        }


        public static IList<CCReportInfo> GenerateCCReport()
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dtl = context.SP_GenerateCCReport().ToList();

                IList<CCReportInfo> list = null;

                list = dtl.Select(x => new CCReportInfo
                {
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    ComplaintDate = x.CReationDate,
                    Segment = x.Segment,
                    Stream = x.Stream,
                    BrandName = x.BrandName,
                    ProductCode = x.SKUCode,
                    BatchNumber = x.BatchNumber,
                    ProductName = x.ProductName,
                    DealerCode = x.DealerCode,
                    DepotName = x.DepotName,
                    ComplaintQty = x.ComplaintQty,
                    ComplaintQtyType = x.ComplaintQtyType,
                    CaomplaintCategory = x.CaomplaintCategory,
                    ComplaintDesc = x.ComplaintDesc,
                    EmpName = x.EmpName,
                    ManufactureDate = x.ManufactureDate,
                    ManufacturingLocation = x.ManufacturingLocation,
                    IsQCretailSample = x.IsQCretailSample,
                    IsQCretainAvailable = x.IsQCretainAvailable,
                    Analysis_Date = x.Analysis_Date,
                    Analysis_Details = x.Analysis_Details,
                    TSE_Avalable = x.TSE_Avalable,
                    TSE_Remarks = x.TSE_Remarks,
                    IsComplaintValid = x.IsComplaintValid,
                    Approved_Reject = x.Approved_Reject,
                    Approval_rejectionDate = x.Approval_rejectionDate,
                    RequestRCA = x.RequestRCA,
                    PlantRemarks = x.PlantRemarks,
                    RCAPlantDate = x.RCAPlantDate,
                    RDRemarks = x.RDRemarks,
                    RCARDRemarks = x.RCARDRemarks,
                    ClosedDate = x.ClosedDate,
                    QUARRemarks = x.QUARRemarks,
                    Reprocess_Quar = x.Reprocess_Quar,

                    RCApprovalForCM = x.RCApprovalForCM,
                    RCApprovalForCM_SubmittedDate = x.RCApprovalForCM_SubmittedDate,
                    RequestRCAOutType = x.RequestRCAOutType,
                    Re_Qua_Sell_Close = x.Re_Qua_Sell_Close,
                    Re_Qua_Sell_Close_creationDate = x.Re_Qua_Sell_Close_creationDate,
                 

                }).ToList();

                return list;


            }
        }

        public static IList<PendingRequestInfo> GetALLComplaintDetail()
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.Sp_GetALLComplaintRecord().ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    //CustomerAccountName = x.CustomerAccountName,
                    ComplaintCategory = x.CaomplaintCategory,
                    ComplaintCategory_ID = Convert.ToInt64(x.ComplaintCategory_ID),
                    Dealer = x.Dealer,
                    ProductName = x.ProductName,
                    BatchNumber = x.BatchNumber,
                    ManufactureDate = Convert.ToDateTime(x.ManufactureDate),
                    StatusName = x.StatusName,
                    FutStatusId = x.FutStatusId,
                    CreatedBy = x.CreatedBy,
                    CreationDate = x.CreationDate,
                    StatusId = x.Status_ID,
                    CurrentStatus = x.CurrentStatus,
                    IsSelected = false

                }).ToList();

                return lst;
            }
        }


        public static string DeleteComplaint(PendingRequestInfo obj)
        {
            using (var CDcontext = new CustomerComplaintEntities())
            {
                var Complaintdelete = CDcontext.TblComplaintRequestHdrs.Where(c => c.Complaint_ID == obj.Complaint_ID).FirstOrDefault();
                if (Complaintdelete != null)
                {
                    Complaintdelete.IsDeleted = true;
                    Complaintdelete.ModifiedDate = DateTime.Now;
                    Complaintdelete.ModifiedBy = obj.ModifiedBy;

                    CDcontext.Entry(Complaintdelete).State = EntityState.Modified;
                    CDcontext.SaveChanges();
                    return "success";
                }
                return "error";
            }

        }


        public static string BulkDelete(List<PendingRequestInfo> obj)
        {
            using (var CDcontext = new CustomerComplaintEntities())
            {
                foreach (var k in obj)
                {
                    var Complaintdelete = CDcontext.TblComplaintRequestHdrs.Where(c => c.Complaint_ID == k.Complaint_ID).FirstOrDefault();
                    if (Complaintdelete != null && k.IsSelected == true)
                    {
                        Complaintdelete.IsDeleted = true;
                        Complaintdelete.ModifiedDate = DateTime.Now;

                        Complaintdelete.ModifiedBy=k.ModifiedBy;
                        CDcontext.Entry(Complaintdelete).State = EntityState.Modified;
                        CDcontext.SaveChanges();
                    }
                }
                return "Success";
            }
        }


        //-----------email template----------//

        public static bool send_Temp(int ComplaintID, string AssignedTo, string EmpCode, string Remarks, string Location)
        {
            using (var context = new CustomerComplaintEntities())
            {


                #region Send Email

                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 15).FirstOrDefault();

                    var Complaint_HandlerRemark = PendingRequestDAL.GetStatusDetails(ComplaintID);

                    string CH_remark = "";

                    foreach (var i in Complaint_HandlerRemark)
                    {
                        if (i.RoleName == "Complaint Handler")
                        {

                            CH_remark = i.Remarks;
                        }

                    }


                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();

                    // var RequestrName = context.Sp_GETName(ComplaintHdr.CreatedBy).FirstOrDefault();



                    var Send_To = UserDAL.GetEmail(AssignedTo);
                    var CHEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var CMEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(Send_To.RM1);
                    var RM2 = UserDAL.GetEmail(Send_To.RM2);
                    var RequesterEmail = UserDAL.GetEmail(EmpCode);

                    // string subject = "Complaint Number: " + ComplaintDetail.ComplaintNumber + " is Valid and Compensation is form available .";
                    string subject = "", subject1 = "", subject2 = "";
                    subject1 = GetApproveTemplate.Template_Subject.Replace("{Complaint Number}", ComplaintDetail.ComplaintNumber);
                    subject2 += subject1.Replace("{Location}", Location);

                    subject = subject2;




                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterName.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    //CC.Add(Send_To.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "", Body15 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);



                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{To}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Complaint Manager’s Remarks}", Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());

                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());

                    }

                    Body15 += Body14.Replace("{Complaint Handler’s Remarks}", CH_remark);
                    Body = Body15;

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }


                #endregion



                return true;
            }
        }

        public static bool send_Temp1(int ComplaintID, string AssignedTo, string EmpCode, string Remarks, string Location)
        {
            using (var context = new CustomerComplaintEntities())
            {


                #region Send Email

                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 16).FirstOrDefault();

                    var Complaint_HandlerRemark = PendingRequestDAL.GetStatusDetails(ComplaintID);

                    string CH_remark = "", CM_remark = "";

                    foreach (var i in Complaint_HandlerRemark)
                    {
                        if (i.RoleName == "Complaint Handler")
                        {

                            CH_remark = i.Remarks;
                        }
                        if (i.StatusName == "RCA Initiated")
                        {

                            CM_remark = i.Remarks;
                        }
                    }


                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();

                    // var RequestrName = context.Sp_GETName(ComplaintHdr.CreatedBy).FirstOrDefault();



                    var Send_To = UserDAL.GetEmail(AssignedTo);
                    var CHEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var CMEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(Send_To.RM1);
                    var RM2 = UserDAL.GetEmail(Send_To.RM2);
                    var RequesterEmail = UserDAL.GetEmail(EmpCode);

                    // string subject = "Complaint Number: " + ComplaintDetail.ComplaintNumber + " is Valid and Compensation is form available .";
                    string subject = "", subject1 = "", subject2 = "";
                    subject1 = GetApproveTemplate.Template_Subject.Replace("{Complaint Number}", ComplaintDetail.ComplaintNumber);
                    subject2 += subject1.Replace("{Location}", Location);

                    subject = subject2;




                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterName.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    //CC.Add(Send_To.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "", Body15 = "", Body16 = "", Body17 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);



                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{To}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Complaint Manager’s Remarks}", CM_remark);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());

                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());

                    }

                    Body15 += Body14.Replace("{Complaint Handler’s Remarks}", CH_remark);

                    Body16 += Body15.Replace("{New Flow}", "Plant's");

                    Body17 += Body16.Replace("{New Flow Remarks}", Remarks);


                    Body = Body17;

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }


                #endregion



                return true;
            }
        }

        public static bool send_Temp2(int ComplaintID, string AssignedTo, string EmpCode, string Remarks, string Location)
        {
            using (var context = new CustomerComplaintEntities())
            {


                #region Send Email

                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 17).FirstOrDefault();

                    var Complaint_HandlerRemark = PendingRequestDAL.GetStatusDetails(ComplaintID);

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();

                    // var RequestrName = context.Sp_GETName(ComplaintHdr.CreatedBy).FirstOrDefault();



                    var Send_To = UserDAL.GetEmail(AssignedTo);
                    var CHEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var CMEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(empName.RM1);
                    var RM2 = UserDAL.GetEmail(empName.RM2);
                    var RequesterEmail = UserDAL.GetEmail(EmpCode);

                    // string subject = "Complaint Number: " + ComplaintDetail.ComplaintNumber + " is Valid and Compensation is form available .";
                    string subject = "", subject1 = "", subject2 = "";
                    subject1 = GetApproveTemplate.Template_Subject.Replace("{Complaint Number}", ComplaintDetail.ComplaintNumber);
                    subject2 += subject1.Replace("{Location}", Location);

                    subject = subject2;




                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterName.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    //CC.Add(Send_To.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    CC.Add(CMEmail.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "", Body15 = "", Body16 = "", Body17 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);



                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{To}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks RCA}", Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        Body = Body14;
                    }


                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }


                #endregion



                return true;
            }
        }

        public static bool send_TempCM(int ComplaintID, string AssignedTo, string EmpCode, string Remarks, string SubDialog, string Dialog)
        {
            using (var context = new CustomerComplaintEntities())
            {


                #region Send Email

                try
                {
                    var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(ComplaintID).FirstOrDefault();
                    var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == ComplaintID).ToList();
                    var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();
                    var GetApproveTemplate = context.TblTemplateMasters.Where(x => x.Template_Id == 1015).FirstOrDefault();

                    var Complaint_HandlerRemark = PendingRequestDAL.GetStatusDetails(ComplaintID);

                    string selectedComplainttype = "";
                    foreach (var k in complatnt)
                    {
                        var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                        selectedComplainttype += "," + compCatType.ComplaintType;

                    }
                    selectedComplainttype = selectedComplainttype.Remove(0, 1);

                    var templt = context.TblTemplateMasters.ToList();


                    var RequesterName = context.Sp_GETName(AssignedTo).FirstOrDefault();
                    var empName = context.Sp_GETName(EmpCode).FirstOrDefault();

                    // var RequestrName = context.Sp_GETName(ComplaintHdr.CreatedBy).FirstOrDefault();



                    var Send_To = UserDAL.GetEmail(AssignedTo);
                    var CHEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintHandler);
                    var CMEmail = UserDAL.GetEmail(ComplntStkHld.ComplaintManager);
                    var RM1 = UserDAL.GetEmail(empName.RM1);
                    var RM2 = UserDAL.GetEmail(empName.RM2);
                    var RequesterEmail = UserDAL.GetEmail(EmpCode);

                    // string subject = "Complaint Number: " + ComplaintDetail.ComplaintNumber + " is Valid and Compensation is form available .";
                    string subject = "", subject1 = "", subject2 = "";
                    subject1 = GetApproveTemplate.Template_Subject.Replace("{Complaint Number}", ComplaintDetail.ComplaintNumber);
                    subject2 += subject1.Replace("{SubDialog}", SubDialog);

                    subject = subject2;




                    MailAddressCollection To = new MailAddressCollection();
                    To.Add(RequesterName.email_id);

                    MailAddressCollection CC = new MailAddressCollection();
                    //CC.Add(Send_To.email_id);
                    CC.Add(RM1.email_id);
                    CC.Add(RM2.email_id);
                    CC.Add(CHEmail.email_id);
                    //CC.Add(CMEmail.email_id);


                    string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "", Body15 = "";

                    Body1 = GetApproveTemplate.Templat_Body.Replace("{Requestor}", empName.Emp_First_name); //replacing the required things  
                    Body2 += Body1.Replace("{Product Name}", ComplaintDetail.ProductName);
                    Body3 += Body2.Replace("{SKU Code}", ComplaintDetail.ProductCode);
                    Body4 += Body3.Replace("{dealer name}", ComplaintDetail.DealerName);
                    Body5 += Body4.Replace("{dealer code}", ComplaintDetail.DealerCode);
                    Body6 += Body5.Replace("{Ticket Number}", ComplaintDetail.ComplaintNumber);
                    Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(ComplaintDetail.CreationDate).ToShortDateString());
                    Body8 += Body7.Replace("{Category of Complaint}", ComplaintDetail.CaomplaintCategory);



                    Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                    Body10 += Body9.Replace("{Number of Complaint stock Unit}", ComplaintDetail.ComplaintQty + " " + ComplaintDetail.ComplaintQtyType);

                    Body11 += Body10.Replace("{Remarks}", ComplaintDetail.ComplaintDesc);
                    Body12 += Body11.Replace("{To}", RequesterName.Emp_First_name);
                    Body13 += Body12.Replace("{Remarks By Emp}", Remarks);

                    if (ComplaintDetail.BatchNumber != "0")
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber).ToString());
                        //Body = Body14;
                    }
                    else
                    {
                        Body14 += Body13.Replace("{Batch Number}", (ComplaintDetail.BatchNumber1).ToString());
                        //Body = Body14;
                    }


                    Body15 += Body14.Replace("{Dialog}", Dialog);

                    Body = Body15;

                    string str = Email.sendEmail(subject, empName.email_id, To, CC, Body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }


                #endregion



                return true;
            }
        }




        public static string CreateComplaintRCA1(QuarantineInfo obj)
        {
            string msg = AddComplaintRCA1(obj);


            return msg;
        }

        public static string AddComplaintRCA1(QuarantineInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var RCA = context.tblComplaintRCAs.Where(x => x.Complaint_ID == obj.Complaint_Id && x.Department_ID == obj.Department_ID).FirstOrDefault();

                if (RCA == null)
                {
                    tblComplaintRCA info = new tblComplaintRCA();

                    info.Complaint_ID = obj.Complaint_Id;
                    info.Department_ID = 3;
                    info.StockSAPProductVol = obj.StockSAPProductVol;
                    info.StockSAPProductUnit = obj.StockSAPProductUnit;
                    info.SysValueProductVol = obj.SysValueProductVol;
                    info.SysValueProductUnit = obj.SysValueProductUnit;
                    info.DateOfExpectedClosure = obj.DateOfExpectedClosure;
                    info.CreatedBy = obj.CreatedBy;
                    info.CreationDate = DateTime.Now;
                    info.IsSelected = obj.IsSelected;
                    info.Remarks = obj.Remarks;


                    context.Entry(info).State = EntityState.Added;
                    context.SaveChanges();
                }
                else
                {

                    RCA.StockSAPProductVol = obj.StockSAPProductVol;
                    RCA.StockSAPProductUnit = obj.StockSAPProductUnit;
                    RCA.SysValueProductVol = obj.SysValueProductVol;
                    RCA.SysValueProductUnit = obj.SysValueProductUnit;
                    RCA.DateOfExpectedClosure = obj.DateOfExpectedClosure;
                    RCA.ModifiedBy = obj.CreatedBy;
                    RCA.ModifiedDate = DateTime.Now;
                    RCA.IsSelected = obj.IsSelected;
                    RCA.Remarks = obj.Remarks;

                    context.Entry(RCA).State = EntityState.Modified;
                    context.SaveChanges();
                }
                return "Success : RCA Details added succesfully";

            }
        }





        //---------------------------avrg.----------------------------//

        public static IList<Employess_Avrg_Response> GetEmployeeResponse(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
//                var empDt = context.Sp_Get_AllEmp_Details().ToList();

                List<Employess_Avrg_Response> objList = new List<Employess_Avrg_Response>();

                // var details = context.Sp_GetEmployess_Avrg_Response(EmpCode).ToList();
                var lst = context.Sp_Get_all_Request_Response_avrg().Where(z=>z.EmpCode== EmpCode).ToList();

                   foreach (var item in lst)
                {
                    var Idx = objList.Where(x => x.EmpCode.Equals(item.EmpCode)).FirstOrDefault();
                    if (Idx == null)
                    {
                        var detail = lst.Where(x => x.EmpCode.Equals(item.EmpCode)).ToList();
                        int diff = 0;
                       
                        string emp = "";
                        int totalComplaint = 0;
                        int totalDay = 0;

                        int count = detail.Count;

                        for (var i = 0; i < detail.Count; i ++)
                        {                       
                            totalDay = totalDay + detail[i].Avrage.Value;
                            totalComplaint = totalComplaint + detail[i].Total_No_Complaint;

                        }

                        objList.Add(new Employess_Avrg_Response()
                        {
                            TotalComplaint = totalComplaint,
                            TotalResponseTime_Indays = totalDay,
                            avrg = totalDay/ count,
                            EmpCode = item.EmpCode,                                   // detail[1].EmpCode,
                        });



                       
                    }

                }
                    return objList;
            }
        }

        //---------------------------avrg. detail----------------------------//

        public static IList<Employess_Avrg_Response> GetEmployeeResponseDetail(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.Sp_GetEmployess_Avrg_Response_DETAIL(EmpCode).ToList();

                List<Employess_Avrg_Response> lst = new List<Employess_Avrg_Response>();

                lst = details.Select(x => new Employess_Avrg_Response
                {
                   EmpCode = x.EmpCode,
                   TotalComplaint=Convert.ToInt32(x.Complaint),
                   TotalResponseTime_Indays=x.ResponseTime_Indays


                }).ToList();

                return lst;
            }
        }




        //-----------------insert code wise data in table ------------//



        public static string InsertEmployeeResponse()
        {
            using (var context = new CustomerComplaintEntities())
            {
                context.Database.ExecuteSqlCommand("TRUNCATE TABLE TblResponse");


                var empDt = context.Sp_Get_AllEmp_Details().ToList();

                //********************************  with  status wise --------------------//

                foreach (var ed in empDt)
                {
                    if (ed.EMP_CODE != null && ed.EMP_CODE != "")
                    {


                        var lst = context.Sp_Get_Responsive_deatil(ed.EMP_CODE).ToList();

                        if (lst.Count != 0)
                        {

                            List<ResponseListModel> objList = new List<ResponseListModel>();

                            foreach (var item in lst)
                            {
                                var Idx = objList.Where(x => x.CompliantId.Equals(item.CompliantId)).FirstOrDefault();
                                if (Idx == null)
                                {
                                    var detail = lst.Where(x => x.CompliantId.Equals(item.CompliantId)).ToList();

                                    int diff = 0;
                                    string crtn = "";
                                    string emp = "";


                                    if (detail.Count % 2 == 0)
                                    {


                                        for (var i = 0; i < detail.Count; i += 2)
                                        {
                                            string empCd = "";
                                            int StdId = detail[i + 1].StatusId.Value;
                                            DateTime ct = detail[i + 1].CreationDate.Value;
                                            empCd = detail[i + 1].EmpCode;

                                            var chkDup = context.TblResponses.Where(x => x.ComplaintId == item.CompliantId && x.EmpCode == empCd && x.StatusId== StdId && x.ResponseMonth== ct).FirstOrDefault();
                                            if (chkDup == null)
                                            { 


                                            diff = Convert.ToInt32(detail[i + 1].CreationDate.Value.Date.Subtract(detail[i].CreationDate.Value.Date).TotalDays);
                                            crtn = Convert.ToString(detail[i + 1].CreationDate.Value);
                                            emp = detail[1].EmpCode;

                                            TblResponse tr = new TblResponse();
                                            tr.EmpCode = detail[i + 1].EmpCode;
                                            tr.ResponseMonth = Convert.ToDateTime(crtn);
                                            tr.ResponseTime_InDay = diff;
                                            tr.ComplaintId = item.CompliantId.Value;
                                            tr.StatusId = detail[i + 1].StatusId.Value;

                                            context.Entry(tr).State = EntityState.Added;
                                            context.SaveChanges();
                                            }
                                        }
                                        objList.Add(new ResponseListModel()
                                        {
                                            CompliantId = item.CompliantId,
                                            Difference = diff, // Convert.ToInt32(detail[1].CreationDate.Value.Date.Subtract(detail[0].CreationDate.Value.Date).TotalDays),
                                            EmpCode = emp,                                   // detail[1].EmpCode,
                                            CreationDate = Convert.ToDateTime(crtn),                                 //   detail[1].CreationDate,
                                        });
                                    }
                                    
                                }
                            }
                        }
                    }
                }
                return "done";
  

               //********************************  with out status wise --------------------//


                //foreach (var ed in empDt)
                //{
                //    if (ed.EMP_CODE !=null && ed.EMP_CODE != "")
                //    { 
                //    var lst = context.Sp_Get_Responsive_deatil(ed.EMP_CODE).ToList();

                //    List<ResponseListModel> objList = new List<ResponseListModel>();

                //    foreach (var item in lst)
                //    {
                //        var Idx = objList.Where(x => x.CompliantId.Equals(item.CompliantId)).FirstOrDefault();
                //        if (Idx == null)
                //        {
                //            var detail = lst.Where(x => x.CompliantId.Equals(item.CompliantId)).ToList();
                //                int diff=0;
                //                string crtn ="";
                //                string emp = "";

                //                if (detail.Count % 2 == 0)
                //                {
                //                   for (var i = 0; i < detail.Count; i += 2)
                //                   {
                //                        diff = diff + Convert.ToInt32(detail[i+1].CreationDate.Value.Date.Subtract(detail[i].CreationDate.Value.Date).TotalDays);
                //                        crtn = Convert.ToString(detail[i+1].CreationDate.Value);
                //                        emp = detail[1].EmpCode;
                //                   }

                //                    objList.Add(new ResponseListModel()
                //                    {
                //                        CompliantId = item.CompliantId,
                //                        Difference = diff, // Convert.ToInt32(detail[1].CreationDate.Value.Date.Subtract(detail[0].CreationDate.Value.Date).TotalDays),
                //                        EmpCode = emp,                                   // detail[1].EmpCode,
                //                        CreationDate = Convert.ToDateTime(crtn),                                 //   detail[1].CreationDate,
                //                    });
                //                }
                //        }
                //    }

                //    TblResponse tr = new TblResponse();
                //    foreach (var insrt in objList)
                //    {
                //        tr.EmpCode = insrt.EmpCode;
                //        tr.ResponseMonth = insrt.CreationDate.Value;
                //        tr.ResponseTime_InDay = insrt.Difference;
                //        tr.ComplaintId = insrt.CompliantId.Value;

                //        context.Entry(tr).State = EntityState.Added;
                //        context.SaveChanges();
                //    }
                //    }
                //}

                //  return "done";
            }
        }




        public static List<ResponseListModel> GetEmployeeList()
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.Sp_Get_AllEmp_Details().ToList();
              
                List<ResponseListModel> lst = new List<ResponseListModel>();

                lst = details.Select(x => new ResponseListModel
                {
                   EmpCode=x.EMP_CODE

                }).ToList();

                return lst;
            }
        }





    }
}
