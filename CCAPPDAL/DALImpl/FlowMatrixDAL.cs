using CCAPPBLL;
using CCAPPDAL.DbContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPDAL
{
	public class FlowMatrixDAL
	{
		public static string save(IList<FlowMatrixBLL> obj)
		{
			using (var FMScontext = new CustomerComplaintEntities())
			{

				foreach (var i in obj)
				{
					if (i.GroupAr_AR != null && i.GroupAr_AR.Equals("1"))
					{
                        tblFlowMatrix tblflow_AR = new tblFlowMatrix()
                        {
                            SBU_Name = i.SBU_Name,
                            OutSourced = i.OutSourced,
                            SCM = i.SCM_AR,
                            Marketing = i.Marketing_AR,
                            Plant = i.Plant_AR,
                            R_And_D = i.RandD_AR,
                            ///Local = "1",
                            IsDeleted = false,
                            CreationDate = DateTime.Now,
						};
						FMScontext.Entry(tblflow_AR).State = EntityState.Added;
						FMScontext.SaveChanges();


					}
					else
					{

						tblFlowMatrix tblflow = new tblFlowMatrix()
						{

                            OutSourced=i.OutSourced,
                            SBU_Name=i.SBU_Name,

                            SCM = i.SCM_LOCAL,
							Marketing = i.Marketing_LOCAL,
							Plant = i.Plant_LOCAL,
							R_And_D = i.RandD_LOCAL,
							//GroupAr  = "1",
							IsDeleted = false,
                            CreationDate = DateTime.Now,

                        };
						FMScontext.Entry(tblflow).State = EntityState.Added;
						FMScontext.SaveChanges();
					}


				}
				return "success";
				//return "error";
			}

		}


		
		public static string Update(List<FlowMatrixBLL> obj)
		{
			using (var FMUcontext = new CustomerComplaintEntities())
			{

				//var FlowMatrixupdate = FMUcontext.tblFlowMatrices.FirstOrDefault();

				//if (FlowMatrixupdate != null)
				//{

				//FlowMatrixupdate.Type = i.Type;

				//FlowMatrixupdate.BM = i.BM;
				//FlowMatrixupdate.BMLimit = i.BMLimit;
				//FlowMatrixupdate.Plant = i.Plant;
				//FlowMatrixupdate.R_And_D = i.RandD;
				//FMUcontext.Entry(FlowMatrixupdate).State = EntityState.Modified;
				//FMUcontext.SaveChanges();

				foreach (var i in obj)
				{
					var FlowMatrixupdate = FMUcontext.tblFlowMatrices.Where(x => x.FlowMatrix_ID == i.FlowMatrixID).FirstOrDefault();

					if (i.FlowMatrixID != null)
					{

						FlowMatrixupdate.Type = i.Type;
                        FlowMatrixupdate.SBU_Name = i.SBU_Name;
                        FlowMatrixupdate.BM = i.BM;
						FlowMatrixupdate.BMLimit = i.BMLimit;
						FlowMatrixupdate.Plant = i.Plant;
						FlowMatrixupdate.R_And_D = i.RandD;
                        FlowMatrixupdate.OutSourced = i.OutSourced;
                     
						FlowMatrixupdate.IsDeleted = false;
                        FlowMatrixupdate.MOdifiedDate = DateTime.Now;
                        FMUcontext.Entry(FlowMatrixupdate).State = EntityState.Modified;
						FMUcontext.SaveChanges();


					}
					else
					{
                        tblFlowMatrix matrix = new tblFlowMatrix()
                        {


                            Type = i.Type,
                            SBU_Name = i.SBU_Name,
                            OutSourced = i.OutSourced,
                            BM = i.BM,
                            BMLimit = i.BMLimit,
                            Plant = i.Plant,
                            R_And_D = i.RandD,
                            IsDeleted = false,
                            CreationDate = DateTime.Now
                    };
			
						FMUcontext.Entry(matrix).State = EntityState.Added;
						FMUcontext.SaveChanges();
					}

					//}


				}




				return "success";
			}

		}


		//public static string update(IList<FlowMatrixBLL> obj)
		//{
		//	using (var FMUcontext = new CustomerComplaintEntities())
		//	{

		//		foreach (var i in obj)
		//		{

		//			var FlowMatrixupdate = FMUcontext.tblFlowMatrices.Where(c => c.FlowMatrix_ID.Equals(i.FlowMatrixID)).FirstOrDefault();

		//			if (FlowMatrixupdate != null)
		//			{

		//				FlowMatrixupdate.Type = i.Type;

		//				FlowMatrixupdate.BM = i.BM;
		//				FlowMatrixupdate.BMLimit = i.BMLimit;
		//				FlowMatrixupdate.Plant = i.Plant;
		//				FlowMatrixupdate.R_And_D = i.RandD;
		//				FMUcontext.Entry(FlowMatrixupdate).State = EntityState.Modified;
		//				FMUcontext.SaveChanges();
		//				//if (i.GroupAr_AR != null && i.GroupAr_AR.Equals("1"))
		//				//{

		//				//    //FlowMatrixupdate.Marketing = i.Marketing_AR;
		//				//    //FlowMatrixupdate.Plant = i.Plant_AR;
		//				//    //FlowMatrixupdate.R_And_D = i.RandD_AR;
		//				//    //FlowMatrixupdate.SCM = i.SCM_AR; 
		//				//    FMUcontext.Entry(FlowMatrixupdate).State = EntityState.Modified;
		//				//    FMUcontext.SaveChanges();
		//				//  }
		//				//else
		//				//{
		//				//    //FlowMatrixupdate.Plant = i.Plant_LOCAL;
		//				//    //FlowMatrixupdate.R_And_D = i.RandD_LOCAL;
		//				//    //FlowMatrixupdate.SCM = i.SCM_LOCAL;
		//				//    //FlowMatrixupdate.Marketing = i.Marketing_LOCAL;
		//				//    FMUcontext.Entry(FlowMatrixupdate).State = EntityState.Modified;
		//				//    FMUcontext.SaveChanges();
		//				//}
		//			}



		//		}
		//		return "success";
		//	}

		//}



		public static string Delete(FlowMatrixBLL obj)
		{
			using (var DeleteDontext = new CustomerComplaintEntities())
			{
				var Delete = DeleteDontext.tblFlowMatrices.Where(c => c.FlowMatrix_ID == obj.FlowMatrixID).FirstOrDefault();
				if (Delete != null)
				{


					Delete.IsDeleted = true;

					//Delete.ModifiedBy = obj.UserID;
					DeleteDontext.Entry(Delete).State = EntityState.Modified;
					DeleteDontext.SaveChanges();


					return "success";
				}
				return "error";
			}

		}


		//public static List<FlowMatrixBLL> Matrix()
		//{
		//	using (var Context = new CustomerComplaintEntities())
		//	{
		//		List<FlowMatrixBLL> objlist = null;
		//		var List = Context.tblFlowMatrices.ToList();
		//		objlist = List.Select(x => new FlowMatrixBLL()
		//		{

		//			Plant = x.Plant,
		//			SCM_AR = x.SCM,
		//			RandD = x.R_And_D,
		//			BM = x.BM,
		//			BMLimit = x.BMLimit.Value,
		//			Type = x.Type,
		//			Marketing_AR = x.Marketing,
		//			FlowMatrixID = x.FlowMatrix_ID,
		//		}).ToList();
		//		return objlist;

		//	}
		//}

		public static List<FlowMatrixBLL> List()
		{
			using (var FMLcontext = new CustomerComplaintEntities())
			{
				List<FlowMatrixBLL> objlist = null;

				var FlowValue = FMLcontext.tblFlowMatrices.Where(x => x.IsDeleted == false).ToList();

				objlist = FlowValue.Select(x => new FlowMatrixBLL()
				{
					FlowMatrixID = x.FlowMatrix_ID,
                    SBU_Name=x.SBU_Name,
                    BM = x.BM,
					BMLimit = Convert.ToDecimal(x.BMLimit),
					Type = x.Type,
					Plant = x.Plant,
					RandD = x.R_And_D,
                   OutSourced =x.OutSourced,


        // GroupAr_AR = x.GroupAr,
         //Local_AR = x.Local,
                 Marketing_AR = x.Marketing,
					RandD_AR = x.R_And_D,
					Plant_AR = x.Plant,
					SCM_AR = x.SCM,
					// GroupAr_LOCAL = x.GroupAr,
					//Local_LOCAL = x.Local,
					Marketing_LOCAL = x.Marketing,
					Plant_LOCAL = x.Plant,
					RandD_LOCAL = x.R_And_D,
					SCM_LOCAL = x.SCM,


				}).ToList();
				return objlist;
			}
		}


	}
}

