using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL
{
    public class DealerBLL
    {
        public long DealerID { get; set; }
        public string DealerName { get; set; }
        public string DealerCode { get; set; }
        public string DealerAddress { get; set; }
        public string DepotName { get; set; }
        public string DepotAddress { get; set; }

       
        public string DepotCode { get; set; }
        
        public long DepotId { get; set; }
        public string Territory { get; set; }
        public string SO { get; set; }
        public string Area { get; set; }
        public string ASM { get; set; }
        public string Region { get; set; }
        public string RM { get; set; }
        public string NH { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }


    }
    public class DepotBLL
    {

        public long DepotId { get; set; }
        public string DepotName { get; set; }
        public string DepotCode { get; set; }
        public string DepotAddress { get; set; }
        public string EmailAdress { get; set; }
        public string Mobile { get; set; }
        public string ZLO { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public System.DateTime ModifiedDate { get; set; }
        public long CreatedBy { get; set; }
        public long UpdatedBy { get; set; }
    }

}
