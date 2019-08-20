using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL
{
   public class ComplaintStakeHoldersBLL
    {

        public int ComplaintStakeHolders_ID { get; set; }
        public string Catalyst { get; set; } 
        public string ComplaintHandler { get; set; }
        public string ComplaintManager { get; set; }
        public string LocalTechnical { get; set; }
        public string Manager { get; set; }
        public string SBU_Name { get; set; }

        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }

        public int? isNew { get; set; }
        public int? isEdit { get; set; }

    }
    public class BU_Model
    {

        public string SBU_Name { get; set; }
      
    }
    public class Up_Model
    {

        public  List<ComplaintStakeHoldersBLL> ComplaintStakeHoldersBLL { get; set; }

    }

}
