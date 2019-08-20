using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    
        public class LFGUserOth
        {
            public string Oth_key { get; set; }
            public string EMP_CODE { get; set; }
            public string Emp_First_name { get; set; }
            public string Emp_Middle_name { get; set; }
            public string Emp_Last_name { get; set; }
            public string Desg_Desc { get; set; }
            public string Dept_name { get; set; }
            public string Region_Name { get; set; }
            public string email_id { get; set; }
            public string Mobile_no { get; set; }
            public string RM1 { get; set; }
            public string RM2 { get; set; }
            public string Role { get; set; }
            public Nullable<bool> isAdmin { get; set; }
            public Nullable<bool> IsDivisionHead { get; set; }
        }
    
}
