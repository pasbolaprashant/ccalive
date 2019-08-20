using CCAPPBLL.CustomModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CCAPPDAL.DbContext;
namespace CCAPPDAL.DALImpl
{
    public class SubstrateDAL
    {
        public static List<SubstrateModel> GetSubstrateId()
        {
            List<SubstrateModel> SubstrateId = null;
            using (var dbContext = new CustomerComplaintEntities())
            {
                var request = dbContext.tblSubstrateMasters.ToList();
                SubstrateId = request.Select(q => new SubstrateModel
                {
                    Substrate_ID = q.Substrate_ID,
                    SubstrateDesc=q.SubstrateDesc
                }).ToList();
              
            }
            return SubstrateId;

        }
    }
}
