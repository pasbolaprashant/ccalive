using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPBLL.CustomModel;
using CCAPPBLL.GenricLib;
using CCAPPDAL.DbContext;

namespace CCAPPDAL.DALImpl
{
    public class UserDAL
    {
        public static LFGUserOth ValidateLFGUser(LFGUserOth objLFGUser)
        {
            //EmpCodet = objLFGUser.Oth_key;
            LFGUserOth _objLFGUser = new LFGUserOth();
            DecryptFunction ObjDecryptFunction = new DecryptFunction();

            string AllowEncryption = System.Configuration.ConfigurationSettings.AppSettings["AllowEncryption"];

            string EmpCode = "";

            string EmpCode1 = "";
            string EmpCode2 = "";


            if (AllowEncryption == "true")
            {
                EmpCode = DECRYPTPP.Decryptmy(objLFGUser.Oth_key);
                // String encryp = DECRYPTPP.Decryptmy(objLFGUser.Oth_key);

                // EmpCode = ObjDecryptFunction.Decrypt(objLFGUser.Oth_key);     //enable for live
            }
            else
            {
                EmpCode = objLFGUser.Oth_key;
            }




            using (var context = new CustomerComplaintEntities())
            {
                //ApproverMatrix obj = GetRole(EmpCode);
                //PostApprovalMatrix obj1 = GetPostRole(EmpCode);
                string Role = "";

                var dt = context.GetLFGUserDetails(EmpCode).FirstOrDefault();
                #region Commented Code To be re-used again
                //if (obj == null && obj1 == null)
                //{

                //    Role += "User";

                //}
                //else
                //{

                //    if ((obj != null && (obj.Purchase1 == EmpCode || obj.Purchase2 == EmpCode)))
                //    {
                //        Role += "Purchase";
                //    }
                //    if (obj1 != null && obj1.PurchaseHead == EmpCode)
                //    {
                //        Role += "PostPurchase";
                //    }
                //    if (obj1 != null && obj1.PurchaseManager == EmpCode)
                //    {
                //        Role += "PostPurchaseManager";
                //    }
                //    if ((obj != null && obj.FinanceHead == EmpCode))
                //    {
                //        Role += "Finance";
                //    }

                //    if ((obj1 != null && (obj1.Finance1 == EmpCode || obj1.Finance2 == EmpCode)))
                //    {
                //        Role += "PostFinance";
                //    }
                //    if (obj1 != null && obj1.VP == EmpCode)
                //    {
                //        Role += "PostVP";
                //    }
                //    if ((obj != null && obj.VP == EmpCode))
                //    {
                //        Role += "VP";
                //    }
                //    if ((obj != null && obj.President == EmpCode))
                //    {
                //        Role += "President";
                //    }
                //    if (obj1 != null && obj1.President == EmpCode)
                //    {
                //        Role += "PostPresident";
                //    }
                //    if ((obj1 != null && obj1.SCM == EmpCode))
                //    {
                //        Role += "SCM";
                //    }
                //    if ((obj1 != null && obj1.MD == EmpCode))
                //    {
                //        Role += "MD";
                //    }
                //}
                #endregion
                _objLFGUser = context.GetLFGUserDetails(EmpCode).Select(x => new LFGUserOth
                {
                    Dept_name = x.Dept_name,
                    Desg_Desc = x.Desg_Desc,
                    email_id = x.email_id,
                    EMP_CODE = x.EMP_CODE,
                    Emp_First_name = x.Emp_First_name,
                    Emp_Last_name = x.Emp_Last_name,
                    Emp_Middle_name = x.Emp_Middle_name,
                    Mobile_no = x.Mobile_no,
                    Region_Name = x.Region_Name,
                    RM1 = x.RM1,
                    RM2 = x.RM2,
                    Role = GetUserRole(x.EMP_CODE),
                    Oth_key = objLFGUser.Oth_key,
                    isAdmin = x.EMP_CODE == "0" ? true : false,
                    IsDivisionHead = false,
                }).FirstOrDefault();

            }
            return _objLFGUser;
        }

        public static string GetUserRole(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var ComplaintStakeHolder = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).ToList();
                var FlowMatrix = context.tblFlowMatrices.Where(s => s.IsDeleted == false).ToList();
                var Tse = context.tblTSEMasters.ToList();
                var admin = context.tblAdminMatrices.Where(x => x.EmpCode == EmpCode && x.IsDeleted == false).FirstOrDefault();
                string Role = "";

                if (ComplaintStakeHolder.Where(x => x.Catalyst == EmpCode).FirstOrDefault() != null)
                {
                    Role = "Catalyst";
                }
                if (ComplaintStakeHolder.Where(x => x.ComplaintHandler == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_CH";
                }
                if (ComplaintStakeHolder.Where(x => x.ComplaintManager == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_CM";
                }
                if (ComplaintStakeHolder.Where(x => x.LocalTechnical == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_LT";
                }
                if (FlowMatrix.Where(x => x.Plant == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_Plant";
                }
                if (FlowMatrix.Where(x => x.Marketing == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_Marketing";
                }
                if (FlowMatrix.Where(x => x.SCM == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_SCM";
                }
                if (FlowMatrix.Where(x => x.R_And_D == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_RD";
                }

                if (FlowMatrix.Where(x => x.OutSourced == EmpCode && x.Type == "SMP").FirstOrDefault() != null)
                {
                    Role += "_SMP";
                }

                if (FlowMatrix.Where(x => x.OutSourced == EmpCode && x.Type == "NonPaint").FirstOrDefault() != null)
                {
                    Role += "_NonPaint";
                }



                if (context.SP_ValidateBusinessManager(EmpCode).FirstOrDefault() != null)
                {
                    Role += "_BM";
                }
                if (Tse.Where(x => x.EmpCode == EmpCode).FirstOrDefault() != null)
                {
                    Role += "_TSE";
                }


                if (EmpCode == "0" || admin != null)
                {
                    Role = "Admin";

                }
                if (EmpCode == "NPI0455")
                {
                    Role = "_BH";
                }
                if (Role == "")
                {
                    Role = "User";
                }
                return Role;

            }
        }

        public static LFGUserOth GetEmail(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var data = context.GetLFGUserDetails(EmpCode).FirstOrDefault();
                LFGUserOth _objLFGUser = new LFGUserOth
                {

                    Dept_name = data.Dept_name,
                    Desg_Desc = data.Desg_Desc,
                    email_id = data.email_id,
                    EMP_CODE = data.EMP_CODE,
                    Emp_First_name = data.Emp_First_name,
                    Emp_Last_name = data.Emp_Last_name,
                    Emp_Middle_name = data.Emp_Middle_name,
                    Mobile_no = data.Mobile_no,
                    Region_Name = data.Region_Name,
                    RM1 = data.RM1,
                    RM2 = data.RM2,
                    Role = "",
                    Oth_key = "",
                    isAdmin = false,
                    IsDivisionHead = false
                };

                return _objLFGUser;
            }
        }

        public static string GetValidateAccess(string EmpCode)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var dt = context.GetValidateAccess(EmpCode).FirstOrDefault();
               
                if(dt !=null)
                {
                    if(dt.ProjectStatus==true)
                    {
                        return "Valid User";
                    }
                    else
                    {
                        return "Not Valid User";
                    }

                   
                }
                else
                {
                    return "Not Valid User";
                }

              
            }
           
        }


    }
}
