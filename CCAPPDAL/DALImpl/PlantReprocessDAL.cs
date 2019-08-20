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
    public class PlantReprocessDAL
    {
        public static string CreatePlantReprocess(PlantReprocessInfo obj)
        {
            using (var context = new CustomerComplaintEntities())
            {
                tblComplaintPlantReprocess info = new tblComplaintPlantReprocess
                {

                    Complaint_Id = obj.Complaint_Id,
                    //Department_Id=obj.Department_Id,
                    StockReceived = obj.StockReceived,
                    ReproccessingComplete = obj.ReproccessingComplete,
                    BatchNumber = obj.BatchNumber,
                    CreatedBy = obj.CreatedBy,
                    CreationDate = DateTime.Now


                };

                context.Entry(info).State = EntityState.Added;
                context.SaveChanges();

                return "Success: Stock Receipt successfully by Plant";
            }
        }

        public static PlantReprocessInfo GetPlantReprocess(int ComplaintID, int Department)
        {
            using (var context = new CustomerComplaintEntities())
            {
                var obj = context.tblComplaintPlantReprocesses.Where(x => x.Complaint_Id == ComplaintID && x.Department_Id == Department).FirstOrDefault();
                PlantReprocessInfo info = new PlantReprocessInfo
                {

                    Complaint_Id = obj.Complaint_Id,
                   // Department_Id = Convert.ToInt32(obj.Department_Id),
                    StockReceived = obj.StockReceived,
                    ReproccessingComplete = obj.ReproccessingComplete,
                    BatchNumber = obj.BatchNumber,
                    CreatedBy = obj.CreatedBy
                   


                };

                return info;
               
            }
        }



    }
}
