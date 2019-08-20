using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
	public class AdminBLL
	{


		public int AdminID { get; set; }
		public string AdminName { get; set; }
		public string EmpCode { get; set; }

	}

	public class AdminBLLObj
	{
		public List<AdminBLL> AdminBLL { get; set; }
		public string  EmployeeCode { get; set; }

	}
}
