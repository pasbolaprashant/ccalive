using CCAPPDAL.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL;
using CCAPPBLL.CustomModel;
using System.Data.Entity;
using System.Net.Mail;

namespace CCAPPDAL.DALImpl
{
    public class RequestCreationDAL
    {
        public static bool InsertDataIntoTblRequestHdr(CustomerComplaintModel obj,int Complaint_Number)        // before string Complaint_Number
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                var Complaint_Number_Check = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).FirstOrDefault();
                if (Complaint_Number_Check != null)
                {
                   return false;
                }
                else
                {
                    TblComplaintRequestHdr tcr = new TblComplaintRequestHdr
                    {
                        ComplaintNumber = Complaint_Number,
                        VehicleRepairDate = obj.DateOfVehicleRepair,
                        Dealer_ID = Convert.ToInt64(obj.Dealer_ID),
                        CustomerName = obj.CustomerName,
                        CustomerAccountName = obj.CustomerAccountName,
                        CustomerPhone = obj.CustomerPhone,
                        CustomerEmailID = obj.CustomerEmail,
                        CustomerAddress = obj.CustomerAddress,
                        Product_ID = obj.ProductCode,
                        ComplaintQty = obj.ComplaintQty,
                        ComplaintDesc = obj.ComplaintDesc,
                        IsDeleted = false,
                        CreatedBy = obj.CreatedBy,
                        CreationDate = DateTime.Now,
                        Batch_Id = obj.BatchNumber,
                        BatchNumber=obj.BatchNumber1,
                        ComplaintQtyType = obj.QtyOfComplaintStock,
                        EvidenceAvailable = obj.EvidenceAvailable,
                        VerifiedInSameBatch = obj.VerifiedInSameBatch,
                        IsSelf = obj.IsSelf,
                        AvailableForFutureEvidence = obj.AvailableForFutureEvidence,
                        SufficientEvidence = obj.SufficientEvidence,
                        RemarksForQuetsionaire = obj.RemarksForQuetsionaire,
                        Tempreature = obj.Tempreature,
                        Humidity = obj.Humidity,
                        ManifactureDate=obj.ManuFactureDate,
                        ShelfLife=obj.ShelfLife,
                        CatalystTicketNumber=obj.CatalystTicketNumber
                    };
                    dbContext.Entry(tcr).State = EntityState.Added;
                    dbContext.SaveChanges();
                    return true;

                }
                
            }
        }

        public static bool InsertDataIntoTblSystemInfo  (SystemInfo obj, int Complaint_Number, string Created_By)    // before string Complaint_Number
        { 
            using (var dbContext = new CustomerComplaintEntities())
            {
                var Cmp_ID = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).Select(x => x.Complaint_ID).First();
 
                tblComplaintSystemInfoDtl tcr = new tblComplaintSystemInfoDtl
                {
                    Complaint_ID = Cmp_ID,
                    Substrate_ID = Convert.ToInt64(obj.Substrate_ID),
                    CoatType_ID=obj.CoatType_ID,
                    ApplicationType=obj.ApplicationType,
                    ApplicationTypeValue=obj.ApplicationTypeValue,
                    Value3=obj.Value3,
                    Value4 =obj.Value4,
                    Value5 =obj.Value5,
                    Value6 =obj.Value6,
                    Value7 =obj.Value7,
                    Value8 =obj.Value8,
                    Value9=obj.Value9,
                    Value10=obj.Value10,
                    SubstrateRelated=obj.SubstrateRelated,
                    CreatedBy= Created_By,
                    CreationDate=DateTime.Now
                };
                dbContext.Entry(tcr).State = EntityState.Added;
                dbContext.SaveChanges();
                return true;
            }
        }

        public static bool InsertDataIntoTblComplaintReqDtl(ComplainTypeSaveModel obj, int Complaint_Number, string Created_By)  // before string Complaint_Number
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                foreach (long e in obj.SelectedComplaintsArray)
                {
                    var Cmp_ID = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).Select(x => x.Complaint_ID).First();
                    TblComplaintRequestDtl tcr = new TblComplaintRequestDtl
                    {
                        Complaint_ID = Cmp_ID,
                        ComplaintCategory_ID = obj.ComplaintCategory_ID,
                        ComplaintType_ID = e,
                        CreatedBy= Created_By,
                        CreationDate=DateTime.Now
                };
                
                dbContext.Entry(tcr).State = EntityState.Added;
                dbContext.SaveChanges();

                }
                return true;
            }
        }

        public static bool InsertDataIntoTblPhotoDtl(int ComplaintNumber,string PhotoUrl) // before string Complaint_Number
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                var ComplaintId = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == ComplaintNumber).FirstOrDefault();
                TblComplaintRequestPhotoDtl tr = new TblComplaintRequestPhotoDtl
                {
                    Complaint_ID = ComplaintId.Complaint_ID,
                    PhotoUrl = PhotoUrl,
                    IsDeleted=false,
                    CreatedBy = ComplaintId.CreatedBy,
                    CreationDate = DateTime.Now
                };
                dbContext.Entry(tr).State = EntityState.Added;
                dbContext.SaveChanges();
                return true;
            }
        }

        public static string SubmitComplaint(RequestCreationModel obj)
        {
            //CreatedBy = obj.CustomerComplaint.CustomerName;
            //Dealer_ID = obj.CustomerComplaint.Dealer_ID;
            
            using (var dbContext = new CustomerComplaintEntities())
            {
                var Complaint_Number_Max = dbContext.TblComplaintRequestHdrs.Select(x => x.ComplaintNumber).Max();
               // long CmpNo = Convert.ToInt64(Complaint_Number_Max);

                long CmpNo = Complaint_Number_Max;

                CmpNo += 1;
                int Complaint_Number = Convert.ToInt32(CmpNo);    // before string Complaint_Number = omplaint_Number = CmpNo.ToString(); 

                var chk = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).FirstOrDefault();

                if (chk == null)
                {
                    try
                    {
                        RequestCreationDAL.InsertDataIntoTblRequestHdr(obj.CustomerComplaint, Complaint_Number);
                        foreach (var i in obj.SystemInformation)
                        {
                            if (i.Substrate_ID != null)
                            {
                                RequestCreationDAL.InsertDataIntoTblSystemInfo(i, Complaint_Number, obj.CustomerComplaint.CreatedBy);
                            }
                        }

                        foreach (var o in obj.ComplaintTypeArray)
                        {
                            RequestCreationDAL.InsertDataIntoTblComplaintReqDtl(o, Complaint_Number,obj.CustomerComplaint.CreatedBy);
                        }
                        var data = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).FirstOrDefault();
                        var AssignedTo = dbContext.tblComplaintStakeHolders.FirstOrDefault();


                        if(obj.CustomerComplaint.DeLerAssignId != null )
                        { 
                        bool Status = AddComplaintStatus(Convert.ToInt32(data.Complaint_ID), 80, 81, obj.CustomerComplaint.DeLerAssignId, 12, 1,obj.CustomerComplaint.CreatedBy ,obj.CustomerComplaint.Remark);
                        }
                        else
                        {
                            bool Status = AddComplaintStatus(Convert.ToInt32(data.Complaint_ID), 2, 4, AssignedTo.ComplaintHandler, 1, 2, obj.CustomerComplaint.CreatedBy, obj.CustomerComplaint.Remark);



                            var cmpName = dbContext.Sp_GETName(AssignedTo.ComplaintHandler).FirstOrDefault();

                            var proInfo = dbContext.tblProductMasters.Where(X => X.Product_ID == obj.CustomerComplaint.ProductCode).FirstOrDefault();
                            var delInfo = dbContext.tblDealerMasters.Where(X => X.Dealer_ID == obj.CustomerComplaint.Dealer_ID).FirstOrDefault();

                            var cmptRqst = dbContext.TblComplaintRequestHdrs.Where(X => X.ComplaintNumber == Complaint_Number).FirstOrDefault();

                            var complatnt = dbContext.TblComplaintRequestDtls.Where(X => X.Complaint_ID == cmptRqst.Complaint_ID).FirstOrDefault();

                            var compCat = dbContext.tblComplaintCategoryMasters.Where(x => x.ComplaintCategory_ID == complatnt.ComplaintCategory_ID).FirstOrDefault();


                            var compCatType = dbContext.tblComplaintTypeMasters.Where(x => x.ComplaintCategory_ID == complatnt.ComplaintCategory_ID).ToList();

                            string selectedComplainttype = "";

                            foreach (var k in obj.ComplaintTypeArray[0].SelectedComplaintsArray)
                            {
                                var aa = dbContext.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k).FirstOrDefault();

                                selectedComplainttype += "," + aa.ComplaintType;

                            }
                            selectedComplainttype = selectedComplainttype.Remove(0, 1);




                            var templt = dbContext.TblTemplateMasters.FirstOrDefault();


                            #region Send Email

                            try
                            {

                                var CHEmail = UserDAL.GetEmail(AssignedTo.ComplaintHandler);
                                var RequesterEmail = UserDAL.GetEmail(obj.CustomerComplaint.CreatedBy);
                                var CMEmail = UserDAL.GetEmail(AssignedTo.ComplaintManager);
                                var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                                var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);


                                var empName = dbContext.Sp_GETName(obj.CustomerComplaint.CreatedBy).FirstOrDefault();

                                string subject = "Complaint Number: " + Complaint_Number + " Registered on CC portal by " + empName.Emp_First_name;
                                //    string Body = "Complaint: " + Complaint_Number + " has been submitted. Please review the complaint to proceed further.";
                                //string body = string.Empty;


                                MailAddressCollection To = new MailAddressCollection();
                                To.Add(CHEmail.email_id);
                               //  To.Add("prashant.pasbola32@gmail.com");
                              //  To.Add("ankur8007@gmail.com");
                               // To.Add("ankur.verma@phoenixtech.consulting");
                                MailAddressCollection CC = new MailAddressCollection();
                               CC.Add(RequesterEmail.email_id);
                               CC.Add(RM1.email_id);
                               CC.Add(RM2.email_id);
                                CC.Add(CMEmail.email_id);
                                 //CC.Add("prashant.pasbola32@gmail.com");
                                //To.Add("prashant.pasbola32@gmail.com");

                                string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "";
                                
                                Body1 = templt.Templat_Body.Replace("{Name}", cmpName.Emp_First_name); //replacing the required things  
                                Body2 += Body1.Replace("{Product Name}", proInfo.ProductName);
                                Body3 += Body2.Replace("{SKU Code}", proInfo.ProductCode);
                                Body4 += Body3.Replace("{dealer name}", delInfo.DealerName);
                                Body5 += Body4.Replace("{dealer code}", delInfo.DealerCode);
                                Body6 += Body5.Replace("{Ticket Number}", Complaint_Number.ToString());
                                Body7 += Body6.Replace("{Submission Date}", Convert.ToDateTime(cmptRqst.CreationDate).ToShortDateString());
                                Body8 += Body7.Replace("{Category of Complaint}", compCat.CaomplaintCategory);


                                Body9 += Body8.Replace("{Type of Complaint}", selectedComplainttype);
                                Body10 += Body9.Replace("{Number of Complaint stock Unit}", obj.CustomerComplaint.ComplaintQty + " " + obj.CustomerComplaint.QtyOfComplaintStock);
                                Body11 += Body10.Replace("{Remarks}", obj.CustomerComplaint.ComplaintDesc);
                                Body12 += Body11.Replace("{Requestor Name}", empName.Emp_First_name);



                                if (obj.CustomerComplaint.BatchNumber != 0)
                                {
                                    Body13 += Body12.Replace("{Batch Number}", (obj.CustomerComplaint.BatchNumber).ToString());
                                }
                                else
                                {
                                    Body13 += Body12.Replace("{Batch Number}", (obj.CustomerComplaint.BatchNumber1).ToString());
                                }




                                Body = Body13;



                                string str = Email.sendEmail(subject, RequesterEmail.email_id, To, CC, Body);
                            }
                            catch (Exception ex)
                            {
                                return ex.Message;
                            }



                            //  string str = Email.sendEmail(subject, "prashant.pasbola32@gmail.com", To, CC, Body);
                            #endregion

                        }



                    }
                    catch (Exception e)
                    {

                        return e.Message;
                    }
                }
                else
                {
                    return SubmitComplaint(obj);
                }

                return ""+Complaint_Number;

            }
        }

        public static bool AddComplaintStatus(int ComplaintID,int StatusID, int FutStatusId,string AssignedTo,int RoleID,int AssignedRoleID, string EmpCode, string Remark)
        {
            using (var context = new CustomerComplaintEntities())
            { 
                tblApprovalHeader hdr = new tblApprovalHeader
                {
                    Complaint_ID = ComplaintID,
                    Status_ID = StatusID,
                    AssignTo = AssignedTo,
                    Role_Id = RoleID,
                    AssignedRole_Id = AssignedRoleID,
                    IsDeleted =false,
                    CreatedBy = EmpCode,
                    CreationDate = DateTime.Now
                };
                context.Entry(hdr).State = EntityState.Added;
                context.SaveChanges();

                tblApprovalDetail dtl = new tblApprovalDetail
                {

                    ApprovalHeader_ID = hdr.ApprovalHeader_ID,
                    Status_ID = StatusID,
                    Role_Id = RoleID,
                    Employee_Code = EmpCode,
                    Remarks = Remark,
                    IsDeleted = false,
                    CreatedBy=EmpCode,
                    CreationDate=DateTime.Now
                };
                context.Entry(dtl).State = EntityState.Added;
                context.SaveChanges();

                tblFutureStatu fut = new tblFutureStatu {
                    Complaint_Id=ComplaintID,
                    Status_ID= FutStatusId,
                    AssignedTo=AssignedTo,
                    Role_Id=AssignedRoleID,
                    IsDeleted=false,
                    CreatedBy=EmpCode,
                    CreationDate=DateTime.Now
                };
                context.Entry(fut).State = EntityState.Added;
                context.SaveChanges();

            


                return true;

            }
        }

        public static CustomerComplaintModel GetComplaintHeader(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var det = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == ComplaintID && x.IsDeleted == false).FirstOrDefault();
                var hdr = context.tblApprovalHeaders.Where(x => x.Complaint_ID == ComplaintID && x.IsDeleted == false).FirstOrDefault();
                var com = context.tblComplaintCompensations.Where(x=>x.Complaint_Id == ComplaintID && x.IsDeleted == false).FirstOrDefault();

                CustomerComplaintModel obj = new CustomerComplaintModel();
                if (det != null)
                {


                    obj.DateOfVehicleRepair = det.VehicleRepairDate;
                    obj.Dealer_ID = det.Dealer_ID;
                    obj.CustomerName = det.CustomerName;
                    obj.CustomerAccountName = det.CustomerAccountName;
                    obj.CustomerPhone = det.CustomerPhone;
                    obj.CustomerEmail = det.CustomerEmailID;
                    obj.CustomerAddress = det.CustomerAddress;
                    obj.ProductCode = Convert.ToInt32(det.Product_ID);
                    obj.ComplaintQty = det.ComplaintQty;
                    obj.ComplaintDesc = det.ComplaintDesc;
                    obj.CreatedBy = det.CreatedBy;
                    obj.BatchNumber = Convert.ToInt32(det.Batch_Id);
                    obj.BatchNumber1 = det.BatchNumber;
                    obj.QtyOfComplaintStock = det.ComplaintQtyType;
                    obj.EvidenceAvailable = det.EvidenceAvailable;
                    obj.VerifiedInSameBatch = det.VerifiedInSameBatch;
                    obj.IsSelf = det.IsSelf;
                    obj.AvailableForFutureEvidence = det.AvailableForFutureEvidence;
                    obj.SufficientEvidence = det.SufficientEvidence;
                    obj.RemarksForQuetsionaire = det.RemarksForQuetsionaire;
                    obj.RequestRCA = det.RequestRCA;
                    obj.CMApprovedDate = hdr.ModifiedDate;
                    obj.ComplaintNumber = det.ComplaintNumber;
                    obj.CreationDate = det.CreationDate;
                    obj.Tempreature = Convert.ToDecimal(det.Tempreature);
                    obj.Humidity = Convert.ToDecimal(det.Humidity);
                    obj.ManuFactureDate = Convert.ToDateTime(det.ManifactureDate);
                    obj.ShelfLife = Convert.ToDateTime(det.ShelfLife);
                    // obj.Remark = com.Remark;

                    if (com != null)
                    {
                        if (com.Remark != null)
                        {
                            obj.Remark = com.Remark;
                        }
                    }

                }

                return obj;
            }
        }

        public static List<SystemInfo> GetComplaintSystemInfo(int ComplaintId)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var det = context.tblComplaintSystemInfoDtls.Where(x => x.Complaint_ID == ComplaintId).ToList();

                List<SystemInfo> sys = new List<SystemInfo>();

                sys = det.Select(x => new SystemInfo
                {
                    Substrate_ID = x.Substrate_ID,
                    CoatType_ID = x.CoatType_ID,
                    ApplicationType = x.ApplicationType,
                    ApplicationTypeValue = x.ApplicationTypeValue,
                    Value3 = x.Value3,
                    Value4 = x.Value4,
                    Value5 = x.Value5,
                    Value6 = x.Value6,
                    Value7 = x.Value7,
                    Value8 = x.Value8,
                    Value9=x.Value9,
                    Value10=x.Value10,
                    SubstrateRelated=x.SubstrateRelated

                }).ToList();

                return sys;
            }
        }

        public static List<ComplainTypeSaveModel> GetComplaintTypeList(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var det = context.TblComplaintRequestDtls.Where(x => x.Complaint_ID == ComplaintID).Select(x=>x.ComplaintCategory_ID).Distinct().ToList();

                List<ComplainTypeSaveModel> obj = new List<ComplainTypeSaveModel>();

                obj = det.Select(x => new ComplainTypeSaveModel {

                    ComplaintCategory_ID=Convert.ToInt32(x.Value),
                    SelectedComplaintsArray=context.TblComplaintRequestDtls.Where(y=>y.Complaint_ID==ComplaintID && y.ComplaintCategory_ID==x.Value).Select(y=>y.ComplaintType_ID).ToList(),
                   

                }).ToList();

                return obj;
            }
        }

        public static List<ComplaintPhotoInfo> GetComplaintPhotoDtl(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var det = context.TblComplaintRequestPhotoDtls.Where(x => x.Complaint_ID == ComplaintID && x.IsDeleted==false).ToList();

                List<ComplaintPhotoInfo> obj = new List<ComplaintPhotoInfo>();

                obj = det.Select(x => new ComplaintPhotoInfo
                {
                    ComplaintPhoto_ID=x.ComplaintPhoto_ID,
                    Complaint_ID=x.Complaint_ID,
                    PhotoUrl=x.PhotoUrl,
                    IsDeleted=Convert.ToBoolean(x.IsDeleted)

                }).ToList();

                return obj;
            }
        }

        public static RequestCreationModel GetComplaintDetails(int ComplaintId)
        {
            RequestCreationModel obj = new RequestCreationModel();

            obj.CustomerComplaint = GetComplaintHeader(ComplaintId);
            obj.ComplaintTypeArray = GetComplaintTypeList(ComplaintId);
            obj.SystemInformation = GetComplaintSystemInfo(ComplaintId);
            obj.PhotoInfo = GetComplaintPhotoDtl(ComplaintId);

            return obj;
        }


        public static bool ReSubmitrequest(RequestCreationModel obj, int Complaint_Number)   // before string Complaint_Number
        {
            using (var dbContext = new CustomerComplaintEntities())
            {
                try
                {
                    var AssignedTo = dbContext.tblComplaintStakeHolders.FirstOrDefault();
                    var Complaint_Number_Check = dbContext.TblComplaintRequestHdrs.Where(x => x.ComplaintNumber == Complaint_Number).FirstOrDefault();

                    if (Complaint_Number_Check != null)
                    {
                        Complaint_Number_Check.CustomerName = obj.CustomerComplaint.CustomerName;
                        Complaint_Number_Check.CustomerPhone = obj.CustomerComplaint.CustomerPhone;
                        Complaint_Number_Check.Batch_Id = obj.CustomerComplaint.BatchNumber;
                        Complaint_Number_Check.BatchNumber = obj.CustomerComplaint.BatchNumber1;
                        Complaint_Number_Check.ComplaintDesc = obj.CustomerComplaint.ComplaintDesc;
                        Complaint_Number_Check.ComplaintQty = obj.CustomerComplaint.ComplaintQty;
                        Complaint_Number_Check.ComplaintQtyType = obj.CustomerComplaint.QtyOfComplaintStock;
                        Complaint_Number_Check.Dealer_ID = obj.CustomerComplaint.Dealer_ID;
                        Complaint_Number_Check.CustomerEmailID = obj.CustomerComplaint.CustomerEmail;
                        Complaint_Number_Check.CustomerAddress = obj.CustomerComplaint.CustomerAddress;
                        Complaint_Number_Check.ManifactureDate = obj.CustomerComplaint.ManuFactureDate;
                        Complaint_Number_Check.VehicleRepairDate = obj.CustomerComplaint.DateOfVehicleRepair;
                        Complaint_Number_Check.ShelfLife = obj.CustomerComplaint.ShelfLife;
                        Complaint_Number_Check.RemarksForQuetsionaire = obj.CustomerComplaint.RemarksForQuetsionaire;
                        Complaint_Number_Check.Product_ID = obj.CustomerComplaint.ProductCode;
                        Complaint_Number_Check.ModifiedBy = obj.CustomerComplaint.CreatedBy;
                        Complaint_Number_Check.ModifiedDate = DateTime.Now;

                        Complaint_Number_Check.Tempreature = obj.CustomerComplaint.Tempreature;

                        Complaint_Number_Check.Humidity = obj.CustomerComplaint.Humidity;


                        dbContext.Entry(Complaint_Number_Check).State = EntityState.Modified;
                        dbContext.SaveChanges();

                        var complaintdtl = dbContext.TblComplaintRequestDtls.Where(x => x.Complaint_ID == obj.CustomerComplaint.ComplaintId).ToList();
                        foreach (var item in complaintdtl.ToList())
                        {
                            dbContext.Entry(item).State = EntityState.Deleted;
                            dbContext.SaveChanges();
                        }
                        var sysinfo = dbContext.tblComplaintSystemInfoDtls.Where(x => x.Complaint_ID == obj.CustomerComplaint.ComplaintId).ToList();
                        foreach (var item in sysinfo.ToList())
                        {
                            dbContext.Entry(item).State = EntityState.Deleted;
                            dbContext.SaveChanges();
                        }

                        //RequestCreationDAL.InsertDataIntoTblRequestHdr(obj.CustomerComplaint, Complaint_Number);
                        foreach (var i in obj.SystemInformation)
                        {
                            if (i.Substrate_ID != null)
                            {
                                RequestCreationDAL.InsertDataIntoTblSystemInfo(i, Complaint_Number, obj.CustomerComplaint.CreatedBy);
                            }
                        }

                        foreach (var o in obj.ComplaintTypeArray)
                        {
                            RequestCreationDAL.InsertDataIntoTblComplaintReqDtl(o, Complaint_Number, obj.CustomerComplaint.CreatedBy);
                        }


                        var assign_Info = dbContext.tblFutureStatus.Where(x => x.Complaint_Id == obj.CustomerComplaint.ComplaintId).FirstOrDefault();  //-----------for assign catlyst case---//

                        var createCheck = dbContext.TblComplaintRequestHdrs.Where(x => x.CreatedBy == AssignedTo.Catalyst && x.Complaint_ID == obj.CustomerComplaint.ComplaintId).FirstOrDefault();

                        if (createCheck != null)
                        {

                            PendingRequestDAL.UpdateComplaintStatus(obj.CustomerComplaint.ComplaintId, 2, 4, AssignedTo.ComplaintHandler, 1, 2, obj.CustomerComplaint.CreatedBy, obj.CustomerComplaint.RemarksForQuetsionaire);
                        }
                       else {
                         PendingRequestDAL.UpdateComplaintStatus(obj.CustomerComplaint.ComplaintId, 2, 4, AssignedTo.ComplaintHandler, 1, 2, obj.CustomerComplaint.CreatedBy, obj.CustomerComplaint.RemarksForQuetsionaire);

                       }
                        return true;


                    }
                    else
                    {

                        return false;

                    }
                }
                catch(Exception Ex)
                {
                    throw Ex;
                }
                
                
            }
        }


        public static bool DeletePhoto(int ComplaintPhoto_Id)
        {

            using (var context = new CustomerComplaintEntities())
            {
                var det = context.TblComplaintRequestPhotoDtls.Where(x => x.ComplaintPhoto_ID == ComplaintPhoto_Id).FirstOrDefault();
                det.IsDeleted = true;
                context.Entry(det).State = EntityState.Modified;
                context.SaveChanges();
                return true;
            }

        }
    }
}
