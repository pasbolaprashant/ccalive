using CCAPPBLL.CustomModel;
using CCAPPBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL.DbContext;

namespace CCAPPDAL.DALImpl
{
    public class DealerMasterDAL
    {
        public static List<DealerBLL> GetDealerDetails()
        {
            List<DealerBLL> objlist = null;
            using (var dbContext = new CustomerComplaintEntities())
            {
                
                var DealerValue = dbContext.SP_GetDealerList().ToList();

                objlist = DealerValue.Select(x => new DealerBLL()
                {
                    DealerAddress = x.DealerAddress,
                    DealerCode = x.DealerCode,
                    DealerName = x.DealerName,
                    DealerID = x.Dealer_ID,
                    DepotName = x.DepotName,
                    DepotAddress = x.DepotAddress



                }).ToList();

            }
            return objlist;
        }

        public static DepotMaster GetDepot(string DepotCode)
        {
            using (var DMcontext = new CustomerComplaintEntities())
            {
                DepotMaster obj = new DepotMaster();

                var Depot = DMcontext.tblDepotMasters.Where(x => x.DepotCode.Equals(DepotCode)).FirstOrDefault();
                if (Depot != null)
                {

                    obj.DepotName = Depot.DepotName;
                    obj.DepotCode= Depot.DepotCode;
                    obj.DepotId = Depot.DepotId;

                }

                return obj;

            }

        }


        public static List<DealerBLL> GetdealerHander(long DealerID)
        {
            List<DealerBLL> objlist = null;
            using (var dbContext = new CustomerComplaintEntities())
            {

                var DealerValue = dbContext.tblDealerMasters.Where(x=>x.IsDeleted==false && x.Dealer_ID== DealerID).ToList();

              
                 objlist = DealerValue.Select(x => new DealerBLL()
                  {
                    DealerAddress = x.DealerAddress,
                    DealerCode = x.DealerCode,
                    DealerName = x.DealerName,
                    DealerID = x.Dealer_ID,
                    Area=x.Area,
                    NH=x.NH,
                    RM=x.RM,
                    SO=x.SO,
                    ASM=x.ASM,
                    Region=x.Region,
                    Territory=x.Territory
                   
                  }).ToList();
            }
            return objlist;
        }










        //public static DealerBLL GetdealerHander(int DealerID)
        //{
        //    using (var DMcontext = new CustomerComplaintEntities())
        //    {
        //        DepotMaster obj = new DepotMaster();

        //        var Depot = DMcontext.tblDepotMasters.Where(x => x.DepotCode.Equals(DepotCode)).FirstOrDefault();
        //        if (Depot != null)
        //        {

        //            obj.DepotName = Depot.DepotName;
        //            obj.DepotCode = Depot.DepotCode;
        //            obj.DepotId = Depot.DepotId;

        //        }

        //        return obj;

        //    }

        //}

    }
}
