using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPBLL.CustomModel
{
    public class RequestCreationModel
    {
        public CustomerComplaintModel CustomerComplaint { get; set; }
        public List<SystemInfo> SystemInformation { get; set; }
        public List<ComplainTypeSaveModel> ComplaintTypeArray { get; set;}
        public IList<ComplaintPhotoInfo> PhotoInfo { get; set; }

    }

    public class GetRequestModel
    {
        public CustomerComplaintModel CustomerComplaint { get; set; }
        public List<SystemInfo> SystemInformation { get; set; }
        public List<ComplainTypeSaveModel> ComplaintTypeArray { get; set; }
        public IList<ComplaintPhotoInfo> PhotoInfo { get; set; }
    }


    public class AssignInfo
    {
        public int ComplaintID { get; set; }
       // public Nullable<int> CompensationId { get; set; }
        public string AssignTo { get; set; }
        public string Remarks { get; set; }
        public string EmpCode { get; set; }
        public string Location { get; set; }
        public string RequestRCAOutType { get; set; }

        public Nullable<bool> IsComplaint { get; set; }
                                                                                //-------------prashant----------------------------//
        public Nullable<bool> IsCompensationRequire { get; set; }
        public Nullable<bool> IsComplaintValid { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTime CreationDate { get; set; }
        public long Department_ID { get; set; }
        
    }

    public class RequestCountInfo
    {
        public Nullable<int>  Count { get; set; }
    }

    public  class Manufacturing_productStream_ApprovedComplaint
    {
        public string ManufacturingLocation { get; set; }
        public Nullable<int> complaint_id { get; set; }
        public string Stream { get; set; }
    }

    public class ManufacturingList
    {
        public string ManufacturingLocation { get; set; }
        public List<CplId> Cplids { get; set; }
        public string strms { get; set; }

    }




    public class CplId {
        public Nullable<int> complaint_Count { get; set; }
        public string strms { get; set; }
        public string ConcateResults { get; set; }

    }

    public class CplIdStream
    {
        public Nullable<int> complaint_id { get; set; }
        public string strms { get; set; }
        public List<int?> Id { get; set; }
        public string ConcateResults { get; set; }

    }

    

    public class  strm
    {
        public string Stream { get; set; }
    }


    public class Brand_productStream_ApprovedComplaint
    {
        public string BrandName { get; set; }
        public List<CplId> Cplids { get; set; }
        public string strms { get; set; }

    }

    public class Segment_productStream_ApprovedComplaint
    {
        public string Segment { get; set; }
        public List<CplId> Cplids { get; set; }
        public string strms { get; set; }

    }


    public class ResponseListModel
    {
      
        public Nullable<int> CompliantId { get; set; }
        public string CreatedBy { get; set; }
        public string EmpCode { get; set; }
        public int Difference { get; set; }
        public int StatusId { get; set; }


        public Nullable<System.DateTime> CreationDate { get; set; }


        public List<detail> detail { get; set; }
        public int detailId { get; set; }

    }

    public class detail
    {
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public Nullable<int> DetailID { get; set; }
        public string EmpCode { get; set; }

    }


    public  class Employess_Avrg_Response
    {
        public Nullable<int> TotalComplaint { get; set; }
        public Nullable<int> TotalResponseTime_Indays { get; set; }
        public Nullable<int> avrg { get; set; }
        public string EmpCode { get; set; }
    }

}
