using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL
{
      public class FlowMatrixBLL
    {

        public int? FlowMatrixID { get; set; }

        public string BM { get; set; }
        public decimal BMLimit { get; set; }
        public string Type { get; set; }
        public string Marketing_LOCAL { get; set; }
        public string RandD { get; set; }
        public string Plant { get; set; }
        public string SBU_Name { get; set; }
        public string OutSourced { get; set; }


        public string RandD_LOCAL { get; set; }
        public string SCM_LOCAL { get; set; }
        public string Local_AR { get; set; }
        public string GroupAr_AR { get; set; }
        public string Local_LOCAL { get; set; }
        public string GroupAr_LOCAL { get; set; }
        public string Plant_LOCAL { get; set; }
        public string Plant_AR { get; set; }
        public string Marketing_AR { get; set; }
        public string SCM_AR { get; set; }
        public string RandD_AR { get; set; }


    }
}
