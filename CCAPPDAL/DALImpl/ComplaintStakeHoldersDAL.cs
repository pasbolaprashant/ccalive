using CCAPPBLL;
using CCAPPDAL.DbContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPDAL
{
  public  class ComplaintStakeHoldersDAL
    {
        public static string save(ComplaintStakeHoldersBLL obj)
        {
            using (var CHSScontext = new CustomerComplaintEntities())
            {


               
                  tblComplaintStakeHolder tblComplaintStake = new tblComplaintStakeHolder();

                    tblComplaintStake.Catalyst = obj.Catalyst.ToUpper().Trim();
                    tblComplaintStake.ComplaintHandler = obj.ComplaintHandler.ToUpper().Trim();
                    tblComplaintStake.ComplaintManager = obj.ComplaintManager.ToUpper().Trim();
                    tblComplaintStake.Manager = obj.Manager.ToUpper().Trim();
                    tblComplaintStake.LocalTechnical = obj.LocalTechnical.ToUpper().Trim();
                    tblComplaintStake.SBU_Name  = obj. SBU_Name;


                    tblComplaintStake.IsDeleted = false;
                    tblComplaintStake.CreatedBy = "Admin";
                    tblComplaintStake.CreationDate = DateTime.Now;



                    CHSScontext.Entry(tblComplaintStake).State = EntityState.Added;
                    CHSScontext.SaveChanges();

                    return "success";
           
              
            }

        }
        
        public static List<ComplaintStakeHoldersBLL> List()
        {
            using (var context = new CustomerComplaintEntities())
            {
                List<ComplaintStakeHoldersBLL> objlist = null;

                var ComplaintStakeValue = context.tblComplaintStakeHolders.Where(x => x.IsDeleted == false).ToList();

                
                objlist = ComplaintStakeValue.Select(x => new ComplaintStakeHoldersBLL()
                {
                        
                        Manager = x.Manager,
                        LocalTechnical = x.LocalTechnical,
                        ComplaintManager = x.ComplaintManager,
                        Catalyst = x.Catalyst,
                        ComplaintHandler = x.ComplaintHandler,
                        ComplaintStakeHolders_ID = x.ComplaintStakeHolders_ID,
                        SBU_Name = x.SBU_Name

                }).ToList();
                return objlist;
            }
        }
       
        public static string update(IList<ComplaintStakeHoldersBLL> obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                foreach (var dt in obj)
                {
                    if (dt.isNew == 1)
                    {

                        tblComplaintStakeHolder matrix = new tblComplaintStakeHolder
                        {
                         ComplaintManager=dt.ComplaintManager,
                         Catalyst=  dt.Catalyst ,
                         ComplaintHandler=  dt.ComplaintHandler,
                         Manager=dt.Manager,
                         LocalTechnical = dt.LocalTechnical,
                         SBU_Name = dt.SBU_Name,
                         IsDeleted=false,
                         CreatedBy=dt.CreatedBy,
                         CreationDate=DateTime.Now
                         

                        };
                        context.Entry(matrix).State = System.Data.Entity.EntityState.Added;
                        context.SaveChanges();
                    }

                    else
                    {
                        tblComplaintStakeHolder ComplaintStakeupdate = context.tblComplaintStakeHolders.Where(x => x.ComplaintStakeHolders_ID == dt.ComplaintStakeHolders_ID).FirstOrDefault();


                        ComplaintStakeupdate.ComplaintManager = dt.ComplaintManager;
                        ComplaintStakeupdate.Catalyst = dt.Catalyst;
                        ComplaintStakeupdate.ComplaintHandler = dt.ComplaintHandler;
                        ComplaintStakeupdate.Manager = dt.Manager;
                        ComplaintStakeupdate.LocalTechnical = dt.LocalTechnical;
                        ComplaintStakeupdate.SBU_Name = dt.SBU_Name;
                        context.Entry(ComplaintStakeupdate).State = EntityState.Modified;
                        context.SaveChanges();

                    }
                }

                //}
            }

            return " Matrix  successfully saved";
        }
        
        public static string Delete(ComplaintStakeHoldersBLL data)
        {

            using (var context = new CustomerComplaintEntities())
            {
                var delete = context.tblComplaintStakeHolders.Where(o => o.IsDeleted == false && o.ComplaintStakeHolders_ID == data.ComplaintStakeHolders_ID).FirstOrDefault();
                if (delete != null)
                {
                    delete.IsDeleted = true;
                    context.Entry(delete).State = System.Data.Entity.EntityState.Modified;
                    context.SaveChanges();
                }

                return "successfully removed";
            }
        }

        public static List<BU_Model> GetBU()
         {
            using (var context = new CustomerComplaintEntities())
            {
                var data = context.Sp_GetBU_type().ToList();
                List<BU_Model> model = null;

                model = data.Select(x => new BU_Model
                {
                    SBU_Name = x.SBU_Name
                }).ToList();

                return model;
            }
        }
  
   }

}





