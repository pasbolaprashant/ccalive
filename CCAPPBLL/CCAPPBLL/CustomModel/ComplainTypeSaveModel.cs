using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplainTypeSaveModel
    {
        public int ComplaintCategory_ID { get; set; }
        public IList<Nullable<long>> SelectedComplaintsArray { get; set; }
    }

    
}
