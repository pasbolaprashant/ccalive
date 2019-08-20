using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class PlantReprocessInfo
    {
        public Nullable<int> ComplaintReprocess_Id { get; set; }
        public int Complaint_Id { get; set; }
       // public int Department_Id { get; set; }
        public Nullable<bool> StockReceived { get; set; }
        public Nullable<bool> ReproccessingComplete { get; set; }
        public string BatchNumber { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string Remarks { get; set; }
    }
}
