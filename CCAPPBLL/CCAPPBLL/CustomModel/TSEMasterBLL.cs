using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
	public class TSEMasterBLL
	{

		public long TSEID { get; set; }
		public string EmpCode { get; set; }
		public string Area { get; set; }
	}

	public class TSEMasterBLLObj
	{
		public List<TSEMasterBLL> TSEMasterBLL { get; set; }
		public string EmployeeCode { get; set; }

	}
}
