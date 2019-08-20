using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class WholeCompliantReApplicationModel
    {
        public ComplaintReapplicationModel ComplaintReapplication { get; set; }
        public List<ComplaintReapplicationSystemInfo> SystemInformation { get; set; }
    }
}
