using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPDAL.DALImpl
{
    public class RequesterInfo
    {
        public string EMP_CODE { get; set; }
        public string Emp_First_name { get; set; }
        public string Emp_Last_name { get; set; }
        public string Desg_Desc { get; set; }
    }

    public class ComplaintEmployeeInfo
    {
        public int ComplaintNumber { get; set; }
        public string EMP_CODE { get; set; }
        public string Emp_First_name { get; set; }
        public string Dept_name { get; set; }
        public System.DateTime CreationDate { get; set; }
        public string SBU_Name { get; set; }
    }
}
