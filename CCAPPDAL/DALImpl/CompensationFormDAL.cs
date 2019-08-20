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
    public class CompensationFormDAL
    {
        public static IList<PendingRequestInfo> GetPendingCompensationRequest(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var details = context.SP_GetPendingCompRequest(EmpCode).ToList();

                IList<PendingRequestInfo> lst = null;

                lst = details.Select(x => new PendingRequestInfo
                {
                    Complaint_ID = x.Complaint_ID,
                    ComplaintNumber = x.ComplaintNumber,
                    CustomerName = x.CustomerName,
                    CustomerAccountName = x.CustomerAccountName,
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

        public static string CreateCompensation(ComplaintCompensationInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == obj.Complaint_Id).FirstOrDefault();

                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == compdtl.RequestRCA).FirstOrDefault();
                var AssignedTo = context.SP_GetBusinessManagerForUser(compdtl.CreatedBy).FirstOrDefault();

                if (AssignedTo != null)
                {
                    tblComplaintCompensation Info = new tblComplaintCompensation();
                    Info.Department_Id = obj.Department_Id;
                    Info.Complaint_Id = obj.Complaint_Id;
                    Info.SettlementEPNumber = obj.SettlementEPNumber;
                    Info.MaterialBillingDate = obj.MaterialBillingDate;
                    Info.Remark = obj.Remark;
                    Info.CNIssuesDate = obj.CNIssuesDate;
                    Info.CreatedBy = obj.CreatedBy;
                    Info.CreationDate = DateTime.Now;
                    Info.IsDeleted = false;
                    context.Entry(Info).State = EntityState.Added;
                    context.SaveChanges();
                    foreach (var item in obj.CompensationTypes)
                    {
                        tblComplaintCompensationDtl InfoCCDtl = new tblComplaintCompensationDtl();
                        if (item.IsSelected == true && item.Type == 1)
                        {
                            if (item.Compensation_TypeID == 1)
                            {
                                InfoCCDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.CompensationValue = item.Value;
                                InfoCCDtl.CompensationUnit = item.Unit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;
                            }
                            else if (item.Compensation_TypeID == 2)
                            {
                                InfoCCDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.DamageValue = item.Value;
                                InfoCCDtl.DamageUnit = item.Unit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;

                            }
                            else
                            {
                                InfoCCDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.GoodwillValue = item.Compensation_TypeID;
                                InfoCCDtl.GoodwillUnit = item.Unit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;
                            }
                           context.Entry(InfoCCDtl).State = EntityState.Added;
                           context.SaveChanges();
                        }
                        else
                        {
                            continue;
                        }

                    }
                    foreach (var item in obj.SettlementModes)
                    {
                        tblComplaintSettlementDtl InfoDtl = new tblComplaintSettlementDtl();
                        if (item.IsSelected == true && item.Type == 2)
                        {

                            if (item.Compensation_TypeID == 1)
                            {
                                InfoDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.CreditNoteValue = item.CreditNoteValue;
                                InfoDtl.CreditNoteUnit = item.CreditNoteUnit;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;
                            }
                            else if (item.Compensation_TypeID == 2)
                            {
                                InfoDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.FOCValue = item.FOCValue;
                                InfoDtl.FOCProduct_ID = item.FOCProduct_ID;
                                InfoDtl.FOCProductQty = item.FOCProductQty;
                                InfoDtl.FOCBatchNumber = item.FOCBatchNumber;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;

                            }
                            else
                            {
                                InfoDtl.ComplaintCompensation_Id = Info.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.ReplacementValue = item.ReplacementValue;
                                InfoDtl.ReplacementProduct_ID = item.ReplacementProduct_ID;
                                InfoDtl.ReplacementProductQty = item.ReplacementProductQty;
                                InfoDtl.ReplacementProductBatchNumber = item.ReplacementProductBatchNumber;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;
                            }
                            context.Entry(InfoDtl).State = EntityState.Added;
                            context.SaveChanges();

                        }
                        else
                        {
                            continue;
                        }

                    }

                    PendingRequestDAL.UpdateCompensationStatus(Info.ComplaintCompensation_Id, 44, 45, Convert.ToString(AssignedTo), 1, 7, obj.CreatedBy, "");



                    #region Send Email
                    

                    var CompStake = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).FirstOrDefault();
                    var ComplaintHdr = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == obj.Complaint_Id).FirstOrDefault();


                    try
                    {
                        var ComplaintDetail = context.Sp_GetComplaintDetailForEmail(obj.Complaint_Id).FirstOrDefault();
                        var complatnt = context.TblComplaintRequestDtls.Where(X => X.Complaint_ID == obj.Complaint_Id).ToList();

                        var ComplntStkHld = context.tblComplaintStakeHolders.FirstOrDefault();

                        string selectedComplainttype = "";
                        foreach (var k in complatnt)
                        {
                            var compCatType = context.tblComplaintTypeMasters.Where(x => x.ComplaintType_ID == k.ComplaintType_ID).FirstOrDefault();
                            selectedComplainttype += "," + compCatType.ComplaintType;

                        }
                        selectedComplainttype = selectedComplainttype.Remove(0, 1);

                        var templt = context.TblTemplateMasters.ToList();


                        //var empName = context.Sp_GETName(obj.CreatedBy).FirstOrDefault();
                        var ReqstrName = context.Sp_GETName(obj.CreatedBy).FirstOrDefault();

                        var BMName = context.Sp_GETName(AssignedTo).FirstOrDefault();
                        


                        var CHEmail = UserDAL.GetEmail(CompStake.ComplaintHandler);
                        var RequesterEmail = UserDAL.GetEmail(obj.CreatedBy);
                        var CMEmail = UserDAL.GetEmail(CompStake.ComplaintManager);
                        var RM1 = UserDAL.GetEmail(RequesterEmail.RM1);
                        var RM2 = UserDAL.GetEmail(RequesterEmail.RM2);
                        var BM = UserDAL.GetEmail(AssignedTo);

                        var FromEmail = UserDAL.GetEmail(obj.CreatedBy);


                        string subject = "Complaint Number " + ComplaintDetail.ComplaintNumber + " Submitted by " + ReqstrName.Emp_First_name + " sent for Approval / Denial Compensation.";

                         

                        MailAddressCollection To = new MailAddressCollection();
                        To.Add(BM.email_id);

                        MailAddressCollection CC = new MailAddressCollection();
                       // CC.Add(RequesterEmail.email_id);
                        CC.Add(RM1.email_id);
                        CC.Add(RM2.email_id);
                        CC.Add(CHEmail.email_id);
                        CC.Add(CMEmail.email_id);
                        
                       


                        string Body = "", Body1 = "", Body2 = "", Body3 = "", Body4 = "", Body5 = "", Body6 = "", Body7 = "", Body8 = "", Body9 = "", Body10 = "", Body11 = "", Body12 = "", Body13 = "", Body14 = "";

                        Body1 = templt[10].Templat_Body.Replace("{Business Manager}", BMName.Emp_First_name); //replacing the required things  
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
                        Body13 += Body12.Replace("{Requestor's Remarks} ", obj.Remark);


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

                       string str = Email.sendEmail(subject, FromEmail.email_id, To, CC, Body);

                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.ToString());
                    }

                    #endregion










                    return "Success : Compensation generated succesfully and assigned to BM for approval";

                }
                else
                {
                    return "Error : Compensation cannot be generated as BM is not defined";
                }
            }
        }

        public static ComplaintCompensationInfo GetCompensationDetails(int ComplaintID)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var obj = context.tblComplaintCompensations.Where(x => x.Complaint_Id == ComplaintID).FirstOrDefault();
                var CCTypeInfo = context.SP_ComplaintCompensationDtl(obj.ComplaintCompensation_Id).ToList();
                var CSInfo = context.SP_ComplaintSettlementDtl(obj.ComplaintCompensation_Id).ToList();
                List<CompensationTypeModel> CompensationType = new List<CompensationTypeModel>();
                List<SettlementModeModel> SettlementModes = new List<SettlementModeModel>();
                foreach (var item in CCTypeInfo)
                {
                    if (CompensationType.Where(x => x.ComplaintCompensationDtl_Id == item.ComplaintCompensationDtl_Id).FirstOrDefault() == null)
                    {
                        CompensationType.Add(new CompensationTypeModel
                        {

                            ComplaintCompensationDtl_Id = item.ComplaintCompensationDtl_Id,
                            CompensationDetails_ID = item.CompensationDetailsType_ID.Value,
                            Type = 1,
                            TypeName = item.TypeName,
                            Compensation_TypeID = item.CompensationType.Value,
                            IsSelected = true,
                            CompensationValue = item.CompensationValue,
                            CompensationUnit = item.CompensationUnit,
                            DamageValue = item.DamageValue,
                            DamageUnit = item.DamageUnit,
                            GoodwillValue = item.GoodwillValue,
                            GoodwillUnit = item.GoodwillUnit
                        });
                    }

                }
                foreach (var item in CSInfo)
                {
                    if (SettlementModes.Where(x => x.ComplaintSettlementDtl_Id == item.ComplaintSettlementDtl_Id).FirstOrDefault() == null)
                    {
                        SettlementModes.Add(new SettlementModeModel
                        {
                            ComplaintSettlementDtl_Id = item.ComplaintSettlementDtl_Id,
                            CompensationDetails_ID = item.CompensationDetailsType_ID.Value,
                            Type = 2,
                            TypeName = item.TypeName,
                            IsSelected = true,
                            SettlementMode_ID = item.ComplaintSettlementDtl_Id,
                            CreditNoteValue = item.CreditNoteValue,
                            CreditNoteUnit = item.CreditNoteUnit,
                            FOCValue = item.FOCValue,
                            FOCProduct_ID = item.FOCProduct_ID,
                            FOCProductQty = item.FOCProductQty,
                            FOCBatchNumber = item.FOCBatchNumber,
                            ReplacementValue = item.ReplacementValue,
                            ReplacementProduct_ID = item.ReplacementProduct_ID,
                            ReplacementProductQty = item.ReplacementProductQty,
                            ReplacementProductBatchNumber = item.ReplacementProductBatchNumber,
                        });
                    }

                }
                ComplaintCompensationInfo info = new ComplaintCompensationInfo
                {

                    Department_Id = obj.Department_Id,
                    Complaint_Id = obj.Complaint_Id,
                    CompensationType = obj.CompensationType,
                    SettlementEPNumber = obj.SettlementEPNumber,
                    MaterialBillingDate = obj.MaterialBillingDate,
                    CNIssuesDate = obj.CNIssuesDate,
                    CreatedBy = obj.CreatedBy,
                    CompensationTypes = CompensationType,
                    SettlementModes = SettlementModes,
                    ComplaintCompensation_Id = obj.ComplaintCompensation_Id
                };
                return info;

            }
        }

        public static string UploadCompensationForm(int ComplaintID, string DocURL)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var CompensationForm = context.tblComplaintCompensations.Where(x => x.Complaint_Id == ComplaintID && x.IsDeleted == false).FirstOrDefault();

                CompensationForm.CompensationURL = DocURL;


                context.Entry(CompensationForm).State = EntityState.Modified;
                context.SaveChanges();

                return "Success: Compensation form uploaded succesfully";

            }
        }
        //compensation type details
        public static List<CompensationTypeModel> GetCompensationTypes()
        {
            List<CompensationTypeModel> CompensationType = new List<CompensationTypeModel>();
            using (var dbContext = new CustomerComplaintEntities())
            {
                var reqData = dbContext.tblCompensationDetailsTypeMasters.Where(x => x.Type == 1 && x.IsDeleted == false).ToList();
                foreach (var item in reqData)
                {
                    if (CompensationType.Where(x => x.CompensationDetails_ID == item.CompensationDetailsType_ID).FirstOrDefault() == null)
                    {
                        CompensationType.Add(new CompensationTypeModel
                        {
                            CompensationDetails_ID = item.CompensationDetailsType_ID,
                            Type = item.Type.Value,
                            Compensation_TypeID = item.Compensation_TypeID.Value,
                            Compensation_Type = item.Compensation_TypeName,
                            IsSelected = false,
                            Unit = null,
                            Value = null
                        });
                    }

                }
                return CompensationType;
            }
        }

        //settlement Mode details
        public static List<SettlementModeModel> GetSettlementModes()
        {
            List<SettlementModeModel> SettlementModes = new List<SettlementModeModel>();
            using (var dbContext = new CustomerComplaintEntities())
            {
                var reqData = dbContext.tblCompensationDetailsTypeMasters.Where(x => x.Type == 2 && x.IsDeleted == false).ToList();
                foreach (var item in reqData)
                {
                    if (SettlementModes.Where(x => x.CompensationDetails_ID == item.CompensationDetailsType_ID).FirstOrDefault() == null)
                    {
                        SettlementModes.Add(new SettlementModeModel
                        {
                            CompensationDetails_ID = item.CompensationDetailsType_ID,
                            Type = item.Type.Value,
                            TypeName = item.TypeName,
                            Compensation_TypeID = item.Compensation_TypeID.Value,
                            SettlementMode = item.Compensation_TypeName,
                            IsSelected = false,
                            CreditNoteValue = null,
                            CreditNoteUnit = null,
                            FOCValue = null,
                            FOCProduct_ID = null,
                            FOCProductQty = null,
                            FOCBatchNumber = null,
                            ReplacementValue = null,
                            ReplacementProduct_ID = null,
                            ReplacementProductQty = null,
                            ReplacementProductBatchNumber = null,
                            SettlementEPNumber = null,
                            MaterialBillingDate = null,
                            CNIssuesDate = null,
                        });
                    }

                }

            }
            return SettlementModes;
        }



        public static string ReSubmit(ComplaintCompensationInfoReconsider obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var compCompst = context.tblComplaintCompensations.Where(x => x.ComplaintCompensation_Id == obj.ComplaintCompensation_Id).FirstOrDefault();

                var compdtl = context.TblComplaintRequestHdrs.Where(x => x.Complaint_ID == obj.Complaint_Id).FirstOrDefault();

                //var AssignedTo = context.tblFlowMatrices.Where(x => x.Type == compdtl.RequestRCA).FirstOrDefault();
                var AssignedTo = context.SP_GetBusinessManagerForUser(compdtl.CreatedBy).FirstOrDefault();

                if (AssignedTo != null)
                {
                    var updateRemark = context.tblComplaintCompensations.Where(x => x.ComplaintCompensation_Id == obj.ComplaintCompensation_Id && x.IsDeleted == false).FirstOrDefault();
                    if(updateRemark != null)
                    {
                        updateRemark.Remark = obj.Remark;


                        context.Entry(updateRemark).State = EntityState.Modified;
                        context.SaveChanges();
                    }


                    var deleteExisting = context.tblComplaintCompensationDtls.Where(x => x.ComplaintCompensation_Id == obj.ComplaintCompensation_Id && x.IsDeleted == false).ToList();
                    foreach (var itemDtl in deleteExisting)
                    {
                        itemDtl.IsDeleted = true;
                        itemDtl.ModifiedBy = obj.CreatedBy;
                        itemDtl.ModifiedDate = DateTime.Now;

                        context.Entry(itemDtl).State = EntityState.Modified;
                        context.SaveChanges();
                    }

                    var deleteExistingSettelement = context.tblComplaintSettlementDtls.Where(x => x.ComplaintCompensation_Id == obj.ComplaintCompensation_Id && x.IsDeleted == false).ToList();
                    foreach (var itemDtl in deleteExistingSettelement)
                    {
                        itemDtl.IsDeleted = true;
                        itemDtl.ModifiedBy = obj.CreatedBy;
                        itemDtl.ModifiedDate = DateTime.Now;

                        context.Entry(itemDtl).State = EntityState.Modified;
                        context.SaveChanges();
                    }


                    foreach (var item in obj.CompensationTypesArray)
                    {
                        tblComplaintCompensationDtl InfoCCDtl = new tblComplaintCompensationDtl();

                        if (item.IsSelected == true && item.Type == 1)
                        {
                            if (item.Compensation_TypeID == 1)
                            {
                                InfoCCDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.CompensationValue = item.CompensationValue;
                                InfoCCDtl.CompensationUnit = item.CompensationUnit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;
                            }
                            else if (item.Compensation_TypeID == 2)
                            {
                                InfoCCDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.DamageValue = item.DamageValue;
                                InfoCCDtl.DamageUnit = item.DamageUnit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;

                            }
                            else
                            {
                                InfoCCDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoCCDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoCCDtl.CompensationType = item.Compensation_TypeID;
                                InfoCCDtl.GoodwillValue = item.GoodwillValue;
                                InfoCCDtl.GoodwillUnit = item.GoodwillUnit;
                                InfoCCDtl.CreatedBy = obj.CreatedBy;
                                InfoCCDtl.CreationDate = DateTime.Now;
                                InfoCCDtl.IsDeleted = false;
                            }
                            context.Entry(InfoCCDtl).State = EntityState.Added;
                            context.SaveChanges();
                        }
                        else
                        {
                            continue;
                        }

                    }
                    foreach (var item in obj.SettlementModesArray)
                    {
                        tblComplaintSettlementDtl InfoDtl = new tblComplaintSettlementDtl();
                        if (item.IsSelected == true && item.Type == 2)
                        {

                            if (item.Compensation_TypeID == 1)
                            {
                                InfoDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.CreditNoteValue = item.CreditNoteValue;
                                InfoDtl.CreditNoteUnit = item.CreditNoteUnit;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;
                            }
                            else if (item.Compensation_TypeID == 2)
                            {
                                InfoDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.FOCValue = item.FOCValue;
                                InfoDtl.FOCProduct_ID = item.FOCProduct_ID;
                                InfoDtl.FOCProductQty = item.FOCProductQty;
                                InfoDtl.FOCBatchNumber = item.FOCBatchNumber;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;

                            }
                            else
                            {
                                InfoDtl.ComplaintCompensation_Id = obj.ComplaintCompensation_Id;
                                InfoDtl.CompensationDetailsType_ID = item.CompensationDetails_ID;
                                InfoDtl.ReplacementValue = item.ReplacementValue;
                                InfoDtl.ReplacementProduct_ID = item.ReplacementProduct_ID;
                                InfoDtl.ReplacementProductQty = item.ReplacementProductQty;
                                InfoDtl.ReplacementProductBatchNumber = item.ReplacementProductBatchNumber;
                                InfoDtl.CreatedBy = obj.CreatedBy;
                                InfoDtl.CreationDate = DateTime.Now;
                                InfoDtl.IsDeleted = false;
                            }
                            context.Entry(InfoDtl).State = EntityState.Added;
                            context.SaveChanges();

                        }
                        else
                        {
                            continue;
                        }

                    }

                    PendingRequestDAL.UpdateCompensationStatus(obj.ComplaintCompensation_Id.Value, 44, 45, Convert.ToString(AssignedTo), 1, 7, obj.CreatedBy, "");

                    return "Success : Compensation generated succesfully and assigned to BM for approval";

                }
                else
                {
                    return "Error : Compensation cannot be generated as BM is not defined";
                }
            }
        }

    }
}
