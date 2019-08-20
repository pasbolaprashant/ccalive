using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class ComplaintTypeModel
    {
        public long ComplaintType_ID { get; set; }
        public string ComplaintType { get; set; }
        public bool IsSelected { get; set; }
		public string CreatedBy { get; set; }
	}
    public class ComplaintTypeBLL
    {
        public string ComplaintType { get; set; }
        public long ComplaintTypeID { get; set; }
        public long ComplaintCategoryID { get; set; }
        public string ComplaintCategory { get; set; }

    }
}
