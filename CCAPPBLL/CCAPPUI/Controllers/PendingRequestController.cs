using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPDAL.DALImpl;
using CCAPPBLL.CustomModel;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

namespace CCAPPUI.Controllers
{
    public class PendingRequestController : ApiController
    {
        public ComplaintEmployeeInfo GetComplaintEmployee(int ComplaintId)
        {
            return PendingRequestDAL.GetComplaintEmployee(ComplaintId);
        }

        public IList<PendingRequestInfo> GetPendingRequestForApproval(string EmpCode)
        {
            return PendingRequestDAL.GetPendingRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetPendingCompensationRequest(string EmpCode)
        {
            return PendingRequestDAL.GetPendingCompensationRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetApprovedCompensationRequest(string EmpCode)
        {
            return PendingRequestDAL.GetApprovedCompensationRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetRejectedCompensationRequest(string EmpCode)
        {
            return PendingRequestDAL.GetRejectedCompensationRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetInProcessCompensationRequest(string EmpCode)
        {
            return PendingRequestDAL.GetInProcessCompensationRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetInProcessRequest(string EmpCode)
        {
            return PendingRequestDAL.GetInProcessRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetUserClosedRequest(string EmpCode)
        {
            return PendingRequestDAL.GetUserClosedRequest(EmpCode);
        }

        public IList<PendingRequestInfo> GetUserRejectedRequest(string EmpCode)
        {
            return PendingRequestDAL.GetUserRejectedRequest(EmpCode);
        }

        public List<StatusInfo> GetStatusDetails(int ComplaintID)
        {
            return PendingRequestDAL.GetStatusDetails(ComplaintID);
        }

        public List<StatusInfo> GetCompensationStatusDetails(int ComplaintID)
        {
            return PendingRequestDAL.GetCompensationStatusDetails(ComplaintID);
        }

        [HttpGet]
        public RequesterInfo GetRequesterDetails(string EmpCode)
        {
            return PendingRequestDAL.GetRequesterDetails(EmpCode);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> uploadClosure()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];
            ComplaintReappInfo obj = JsonConvert.DeserializeObject<ComplaintReappInfo>(model);
            obj.Model.Department_ID = 2;
            var data = ComplaintReappcationDAL.CreateRequest(obj);

                       PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);

            try
                {
                    for (int i = 0; i < result.FileData.Count; i++)
                    {

                        fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                        string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                        if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                        {
                            fileName = fileName.Trim('"');
                        }
                        if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                        {
                            fileName = Path.GetFileName(fileName);

                            Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                            if (regex.Success)
                            {
                                fileName = regex.Groups[1].Value;

                            }
                        }
                        fileName = RemoveSpecialCharacters(fileName);
                        fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));
                        //string ExlName = filename + fileType;
                        //string str;
                        //str = filename.Substring(filename.Length - 1, 1);
                        //string FileWithPath = string.Format("{0}{1}", filename + str, fileType);
                        //location = Path.Combine(root, FileWithPath);
                        //File.Move(result.FileData[i].LocalFileName, Path.Combine(root, FileWithPath));
                        ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        info.Complaint_ID = data.Complaint_ID;
                        info.CreatedBy = data.CreatedBy;
                        info.PhotoUrl = filename;

                        ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                    }
                }
                catch (Exception e)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                }
            
            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Complaint assigned to Complaint Manager");
        }






        [HttpPost]
        public async Task<HttpResponseMessage> AssignToCH()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];
            ComplaintReappInfo obj = JsonConvert.DeserializeObject<ComplaintReappInfo>(model);
            obj.Model.Department_ID = 4;
            var data = ComplaintReappcationDAL.CreateRequest(obj);
            PendingRequestDAL.TSEAssignForCH(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);
            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));
                        //string ExlName = filename + fileType;
                        //string str;
                        //str = filename.Substring(filename.Length - 1, 1);
                        //string FileWithPath = string.Format("{0}{1}", filename + str, fileType);
                        //location = Path.Combine(root, FileWithPath);
                        //File.Move(result.FileData[i].LocalFileName, Path.Combine(root, FileWithPath));
                        ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        info.Complaint_ID = data.Complaint_ID;
                        info.CreatedBy = data.CreatedBy;
                        info.PhotoUrl = filename;

                        ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Complaint assigned to CH");
        }

        [HttpPost]
        public async Task<HttpResponseMessage> AssignToTSE()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];
            ComplaintReappInfo obj = JsonConvert.DeserializeObject<ComplaintReappInfo>(model);
            var model1 = result.FormData["AssignInfo"];
            AssignInfo obj1 = JsonConvert.DeserializeObject<AssignInfo>(model1);
            obj.Model.Department_ID = 2;
            var data = ComplaintReappcationDAL.CreateRequest(obj);
            PendingRequestDAL.CMAssignToTSE(obj1);

            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));
                        //string ExlName = filename + fileType;
                        //string str;
                        //str = filename.Substring(filename.Length - 1, 1);
                        //string FileWithPath = string.Format("{0}{1}", filename + str, fileType);
                        //location = Path.Combine(root, FileWithPath);
                        //File.Move(result.FileData[i].LocalFileName, Path.Combine(root, FileWithPath));
                        ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        info.Complaint_ID = data.Complaint_ID;
                        info.CreatedBy = data.CreatedBy;
                        info.PhotoUrl = filename;

                        ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Request assigned to TSE");
        }


        [HttpPost]
        public async Task<HttpResponseMessage> UploadCompensationForm()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["ComplaintID"];
            string str = "";

            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));
                        //string ExlName = filename + fileType;
                        //string str;
                        //str = filename.Substring(filename.Length - 1, 1);
                        //string FileWithPath = string.Format("{0}{1}", filename + str, fileType);
                        //location = Path.Combine(root, FileWithPath);
                        //File.Move(result.FileData[i].LocalFileName, Path.Combine(root, FileWithPath));
                        str = CompensationFormDAL.UploadCompensationForm(Convert.ToInt32(model), filename);
                        return Request.CreateResponse(HttpStatusCode.OK, str);

                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }
            return Request.CreateResponse(HttpStatusCode.OK, str);

        }

        [HttpGet]
        public ComplaintSavedReappInfo GetComplaintHandlerDetails(int ComplaintID,int Department)
        {
            return ComplaintReappcationDAL.GetComplaintHandlerDetails(ComplaintID, Department);
        }

        [HttpGet]
        public ComplaintRCAInfo GetComplaintRCA(int ComplaintID, int Department)
        {
            return ComplaintRCADAL.GetComplaintRCA(ComplaintID, Department);
        }

         [HttpGet]
        public PlantReprocessInfo GetPlantReprocess(int ComplaintID, int Department)
        {
            return PlantReprocessDAL.GetPlantReprocess(ComplaintID, Department);
        }

        [HttpGet]
        public IList<TSEInfo> GetTSEInfo()
        {
            return PendingRequestDAL.GetTSEList();
        }

        [HttpPost]
        public string CMAssignToTSE([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CMAssignToTSE(info);
        }


        /// <summary>
        ///                                   COMPLAINT MANAGER APPROVE COMPLAINT FOR COMPENSATION AND  RCA PLANT 
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        [HttpPost]
        public string CHApprovalRCAPlnt([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CHApprovalRCAPlnt(info);
        }

        [HttpPost]
        public string CHRejectRCA([FromBody]AssignInfo info)                 // -------------AFTER TSE ASSIGN  REJECT BY CM---------//
        {
            return PendingRequestDAL.CHRejectRCA(info);
        }

        [HttpPost]
        public string CHRecommendforRCAPlnt([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CHRecommendforRCAPlnt(info);
        }

        [HttpPost]
        public string CMCloseRequest([FromBody]AssignInfo info)                            //---------  Complaint reject by Complaint Manager -------------//
        {
            return PendingRequestDAL.CMCloseRequest(info);
        }
        [HttpPost]
        public string PlntAssignToBM([FromBody]ComplaintRCAInfo info)
        {
            string str = ComplaintRCADAL.CreateComplaintRCA(info);
            string flow = PendingRequestDAL.PlntAssignToBM(info.Complaint_ID, info.CreatedBy, info.Remarks);
            return str;
        }

     



        //[HttpPost]
        //public string PlntAssignToRD([FromBody]ComplaintRCAInfo info)
        //{
        //    string str = ComplaintRCADAL.CreateComplaintRCA(info);
        //    return PendingRequestDAL.PlntAssignToRD(info.Complaint_ID, info.CreatedBy, info.Remarks);
        //}











        //--------------------------------------document upload  end -------------------------------//

        [HttpPost]
        public async Task<HttpResponseMessage> PlntAssignToCM()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];


            ComplaintRCAInfo obj = JsonConvert.DeserializeObject<ComplaintRCAInfo>(model);
            //obj.Model.Department_ID = 2;
            // var data = ComplaintRCADAL.CreateComplaintRCA(obj); 

            //  PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);



            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));

                        obj.DocumentUpload = filename;

                       
                        //ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        ////info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        ////info.Complaint_ID = data.Complaint_ID;
                        ////info.CreatedBy = data.CreatedBy;
                        //info.PhotoUrl = filename;

                        //ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }

                string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                PendingRequestDAL.PlntAssignToCM(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            //return PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Complaint assigned to Complaint Manager for further RCA");
        }

        [HttpPost]
        public async Task<HttpResponseMessage> PlntAssignToRD()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];


            ComplaintRCAInfo obj = JsonConvert.DeserializeObject<ComplaintRCAInfo>(model);
            //obj.Model.Department_ID = 2;
           // var data = ComplaintRCADAL.CreateComplaintRCA(obj); 
            
          //  PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);



            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));

                        obj.DocumentUpload = filename;

                        //string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                        //PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);
                        //ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        ////info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        ////info.Complaint_ID = data.Complaint_ID;
                        ////info.CreatedBy = data.CreatedBy;
                        //info.PhotoUrl = filename;

                        //ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }



                string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            //return PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Complaint assigned to R&D for further RCA");
        }
                
      


        [HttpPost]
        public async Task<HttpResponseMessage> RDAssignToCM()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];


            ComplaintRCAInfo obj = JsonConvert.DeserializeObject<ComplaintRCAInfo>(model);
            //obj.Model.Department_ID = 2;
            // var data = ComplaintRCADAL.CreateComplaintRCA(obj); 

            //  PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);



            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));

                        obj.DocumentUpload = filename;

                       
                      //  PendingRequestDAL.SMPAssignToCM(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);
                        //ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        ////info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        ////info.Complaint_ID = data.Complaint_ID;
                        ////info.CreatedBy = data.CreatedBy;
                        //info.PhotoUrl = filename;

                        //ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }

                string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                PendingRequestDAL.RDAssignToCM(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            //return PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: RCA Done, Complaint has been assigned to CM.");
        }


        


        [HttpPost]
        public async Task<HttpResponseMessage> SMPComplaintManager()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];


            ComplaintRCAInfo obj = JsonConvert.DeserializeObject<ComplaintRCAInfo>(model);
            //obj.Model.Department_ID = 2;
            // var data = ComplaintRCADAL.CreateComplaintRCA(obj); 

            //  PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);



            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));

                        obj.DocumentUpload = filename;

                      
                        //ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        ////info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        ////info.Complaint_ID = data.Complaint_ID;
                        ////info.CreatedBy = data.CreatedBy;
                        //info.PhotoUrl = filename;

                        //ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }

                string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                PendingRequestDAL.SMPAssignToCM(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);


            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            //return PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: RCA Done, Complaint has been assigned to CM");
        }





        //--------------------------------------document upload  end -------------------------------//



        //[HttpPost]
        //public string RDAssignToBM([FromBody]ComplaintRCAInfo info)
        //{
        //    string str = ComplaintRCADAL.CreateComplaintRCA(info);
        //    string flow = PendingRequestDAL.RDAssignToBM(info.Complaint_ID, info.CreatedBy, info.Remarks);
        //    return str;
        //}

        [HttpPost]
        public string BMApprovePlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMApprove(info);
        }

        [HttpPost]
        public string BHApprovePlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHApprove(info);
        }

       

        [HttpPost]
        public string BMRejectPlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMReject(info);
        }

        [HttpPost]
        public string BHRejectPlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHReject(info);
        }

        [HttpPost]
        public string BMReconsiderPlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMReconsider(info);
        }

        [HttpPost]
        public string BHReconsiderPlant([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHReconsider(info);
        }

        [HttpPost]
        public string BMApproveRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMApproveRD(info);
        }
        

        [HttpPost]
        public string BMApproveSelling([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMApproveSelling(info);
        }


        [HttpPost]
        public string BHApproveRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHApproveRD(info);
        }

        [HttpPost]
        public string BMRejectRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMRejectRD(info);
        }

        [HttpPost]
        public string BMReconsiderRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMReconsiderRD(info);
        }

        [HttpPost]
        public string BMReconsiderQuartine([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMReconsiderQuartine(info);
        }


        [HttpPost]
        public string BMReconsiderSelling([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMReconsiderSelling(info);
        }




        [HttpPost]
        public string BHRejectRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHRejectRD(info);
        }

        [HttpPost]
        public string BHReconsiderRD([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BHReconsiderRD(info);
        }

        //[HttpPost]
        //public string InitiateQuartine([FromBody]ComplaintRCAInfo info)
        //{

        //    string str = ComplaintRCADAL.CreateComplaintRCA(info);
        //    return PendingRequestDAL.InitiateQuartine(new AssignInfo {
        //        ComplaintID=info.Complaint_ID,
        //        AssignTo="",
        //        Remarks=info.Remarks,
        //        EmpCode=info.CreatedBy,
        //        Location="",


        //    });
        //}
        //------------------------------new quarentine--------------//

        [HttpPost]
        public async Task<HttpResponseMessage> InitiateQuartine()
        {
            string location = "";
            string fileName = "";

            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["RootImages"]);
            // var root = HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ImageRootPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];


            ComplaintRCAInfo obj = JsonConvert.DeserializeObject<ComplaintRCAInfo>(model);
            //obj.Model.Department_ID = 2;
            // var data = ComplaintRCADAL.CreateComplaintRCA(obj); 

            //  PendingRequestDAL.CHAssignForClosure(Convert.ToInt32(data.Complaint_ID), data.CreatedBy, obj.Remarks);



            try
            {
                for (int i = 0; i < result.FileData.Count; i++)
                {

                    fileName = result.FileData[i].Headers.ContentDisposition.FileName;
                    string fileserial = result.FileData[i].Headers.ContentDisposition.Name.Trim('"');
                    if (fileName.StartsWith("\"") && fileName.EndsWith("\""))
                    {
                        fileName = fileName.Trim('"');
                    }
                    if (fileName.Contains(@"/") || fileName.Contains(@"\"))
                    {
                        fileName = Path.GetFileName(fileName);

                        Match regex = Regex.Match(root, @"(.+) \((\d+)\)\.\w+");

                        if (regex.Success)
                        {
                            fileName = regex.Groups[1].Value;

                        }
                    }
                    fileName = RemoveSpecialCharacters(fileName);
                    fileName = NewNumber().ToString() + fileName;
                    //Storing file to temporary location in project
                    try
                    {

                        //string fileType = Path.GetExtension(fileName);

                        string filename = System.Configuration.ConfigurationManager.AppSettings["RootImages"].Replace("~/", "../../../CCApp/") + "/" + fileName;

                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, fileName));

                        obj.DocumentUpload = filename;

                        

                        //return PendingRequestDAL.InitiateQuartine(new AssignInfo
                        //{
                        //    ComplaintID =obj.Complaint_ID,
                        //    //ComplaintID = info.Complaint_ID,
                        //    //AssignTo = "",
                        //    //Remarks = info.Remarks,
                        //    //EmpCode = info.CreatedBy,
                        //    //Location = "",


                        //});
                        //ComplaintReappPhotoInfo info = new ComplaintReappPhotoInfo();
                        ////info.ComplaintHandler_Id = data.ComplaintHandler_ID;
                        ////info.Complaint_ID = data.Complaint_ID;
                        ////info.CreatedBy = data.CreatedBy;
                        //info.PhotoUrl = filename;

                        //ComplaintReappcationDAL.InsertDataIntoTblPhotoUrl(info);



                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, e.Message);
                    }

                }

                string str = ComplaintRCADAL.CreateComplaintRCA(obj);

                AssignInfo dtAssign = new AssignInfo();
                dtAssign.ComplaintID = obj.Complaint_ID;
                dtAssign.EmpCode = obj.CreatedBy;
                dtAssign.Location = "";
                dtAssign.AssignTo = "";
                dtAssign.Remarks = obj.Remarks;



                var dt = PendingRequestDAL.InitiateQuartine(dtAssign);

            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK, e.Message);
            }

            //return PendingRequestDAL.PlntAssignToRD(obj.Complaint_ID, obj.CreatedBy, obj.Remarks);

            return Request.CreateResponse(HttpStatusCode.Accepted, "Success: Quarantine Process initiated");
        }

        //----------------------------------------------------------//


        [HttpPost]
        public string CMSubmitQurantine([FromBody]QuarantineInfo info)
        {
            return PendingRequestDAL.CMSubmitQurantine(info);
        }

                                                           

        //[HttpPost]
        //public string CMSubmitQurantine([FromBody]QuarantineInfo info)
        //{
        //    return PendingRequestDAL.CMSubmitQurantine(info);
        //}
        

        [HttpPost]
        public string CMReprocessingSubmit([FromBody]ComplaintRCAInfo info)
        {
            //string str = "hi";
            string str = ComplaintRCADAL.CreateComplaintRCA(info);
            string flow = PendingRequestDAL.CMReprocessingSubmit(info.Complaint_ID, info.CreatedBy, info.Remarks);
            return str;
        }

        [HttpPost]
        public string CMSellingSubmit([FromBody]ComplaintRCAInfo info)
        {
            string str = ComplaintRCADAL.CreateComplaintRCA(info);
            string flow = PendingRequestDAL.CMSellingSubmit(info.Complaint_ID, info.CreatedBy, info.Remarks);
            return str;
        }

        [HttpPost]
        public string CMClosingComplaintSubmit([FromBody]ComplaintRCAInfo info)
        {
            string flow = PendingRequestDAL.CMClosingComplaintSubmit(info.Complaint_ID, info.CreatedBy, info.Remarks);
            return flow;
        }

      


        [HttpGet]
        public QuarantineInfo GetQuarantine(int ComplaintID)
        {
            return ComplaintRCADAL.GetQuarantine(ComplaintID);
        }


        [HttpPost]
        public string BMApproveQurantine([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMApproveQurantine(info);
        }


        [HttpPost]
        public string BMRejectQurantine([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.BMRejectQurantine(info);
        }


        [HttpPost]
        public string QurantineReceipt([FromBody]QuarantineInfo info)
        {
            return PendingRequestDAL.QurantineReceipt(info);
        }





        [HttpPost]
        public string PlantStockReceipt([FromBody]PlantReprocessInfo info)
        {
            string str = PlantReprocessDAL.CreatePlantReprocess(info);
            return PendingRequestDAL.PlntStockReceipt(info.Complaint_Id, info.CreatedBy, info.Remarks);

        }


        /// <summary>
        ///                  Create Compensation
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>

        [HttpPost]
        public string CreateCompensation([FromBody]ComplaintCompensationInfo obj)      
        {
            return CompensationFormDAL.CreateCompensation(obj);
        }

       


        /// <summary>
        ///               Compensation BM Reconsider  ( start )
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>

        [HttpPost]
        public string CompensationBMReconsider([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CompensationBMReconsider(info);
        }
       

        [HttpPost]
        public string CompensationBMApprove([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CompensationBMApprove(info);
        }

        [HttpPost]
        public string CompensationBMReject([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CompensationBMReject(info);
        }


        /// <summary>
        ///                            Approved By Buiness Head
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        [HttpPost]
        public string CompensationBHApprove([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CompensationBHApprove(info);
        }

        [HttpPost]
        public string CompensationBHReject([FromBody]AssignInfo info)
        {
            return PendingRequestDAL.CompensationBHReject(info);
        }

        [HttpGet]
        public ComplaintCompensationInfo GetCompensationDetails(int ComplaintId)
        {
            return CompensationFormDAL.GetCompensationDetails(ComplaintId);
        }

        [HttpGet]
        public RequestCountInfo GetTotalRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalRequest(EmpCode);
        }
        [HttpGet]
        public RequestCountInfo GetTotalInProgressRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalInProgressRequest(EmpCode);
        }
        [HttpGet]
        public RequestCountInfo GetTotalApprovedRequest(string EmpCode)
         {
            return PendingRequestDAL.GetTotalApprovedRequest(EmpCode);
         }
        [HttpGet]
        public RequestCountInfo GetTotalRejectedRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalRejectedRequest(EmpCode);
        }

        //------------------------------------//
        [HttpGet]
        public RequestCountInfo GetTotal_CH_Request(string EmpCode)
        {
            return PendingRequestDAL.GetTotal_CH_Request(EmpCode);
        }
        [HttpGet]

        public RequestCountInfo GetTotal_TSE_Request(string EmpCode)
        {
            return PendingRequestDAL.GetTotal_TSE_Request(EmpCode);
        }

        [HttpGet]

        public List<ManufacturingList> GetManufacturing_productStream_ApprovedComplaint(string EmpCode)
        {
            return PendingRequestDAL.GetManufacturing_productStream_ApprovedComplaint(EmpCode);
        }

        [HttpGet]

        public List<Brand_productStream_ApprovedComplaint> GetBrand_productStream_ApprovedComplaint(string EmpCode)
        {
            return PendingRequestDAL.GetBrand_productStream_ApprovedComplaint(EmpCode);
        }


        [HttpGet]

        public List<Segment_productStream_ApprovedComplaint> GetSegment_productStream_ApprovedComplaint(string EmpCode)
        {
            return PendingRequestDAL.GetSegment_productStream_ApprovedComplaint(EmpCode);
        }



        




        [HttpGet]

        public List<ManufacturingList> StreamList(string EmpCode)
        {
            return PendingRequestDAL.StreamList(EmpCode);
        }

        

        //-----------------------------------//

        public string RemoveSpecialCharacters(string fileName)
        {
            fileName = fileName.Replace("&", "");
            fileName = fileName.Replace("#", "");
            fileName = fileName.Replace("%", "");
            fileName = fileName.Replace("?", "");
            fileName = fileName.Replace("_", "");
            fileName = fileName.Replace("-", "");
            fileName = fileName.Replace("+", "");
            fileName = fileName.Replace("-", "");
            fileName = fileName.Replace(")", "");
            fileName = fileName.Replace("(", "");

            fileName = fileName.Replace("^", "");
            fileName = fileName.Replace("$", "");
            fileName = fileName.Replace("@", "");
            fileName = fileName.Replace("!", "");
            fileName = fileName.Replace("~", "");
            fileName = fileName.Replace("`", "");

            return fileName;

        }

        private int NewNumber()
        {
            Random a = new Random(Guid.NewGuid().GetHashCode());
            return a.Next(10000, 500000);
        }

        [HttpPost]
        public void Reconsider(ReconsiderUserBLL obj)                       //-------------reconsider by CH  TO USER----------------//
        {
            PendingRequestDAL.Reconsider(obj);
        }


        [HttpPost]
        public void ReconsiderCM(ReconsiderUserBLL obj)                      //-------------reconsider by CM  TO USER----------------//
        {
            PendingRequestDAL.ReconsiderCM(obj);
        }

        





        [HttpGet]
        public RequestCountInfo GetTotalInProcessCompRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalInProcessCompRequest(EmpCode);
        }


        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForApproval(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForApproval(EmpCode);
        }


        [HttpGet]
        public RequestCountInfo GetTotalApprovedCompRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalApprovedCompRequest(EmpCode);
        }


        [HttpGet]
        public RequestCountInfo GetTotalRejectedCompRequest(string EmpCode)
        {
            return PendingRequestDAL.GetTotalRejectedCompRequest(EmpCode);
        }

        //----------------------------COUNT FOR PENDING RCA -  PLANT --------------------------------------//

        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForPlant(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForPlant(EmpCode);
        }


        //----------------------------COUNT FOR PENDING RCA -  R & D -----------------------------------------//
       
        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForRnD(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForRnD(EmpCode);
        }

        //----------------------------COUNT FOR PENDING  R & D - BM -----------------------------------------//

        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForRnDBM(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForRnDBM(EmpCode);
        }
        



        //----------------------------COUNT FOR PENDING Quarantine -----------------------------------------//

        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForQuarantine(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForQuarantine(EmpCode);
        }

        //----------------------------COUNT FOR PENDING Business Manager -----------------------------------------//

        [HttpGet]
        public RequestCountInfo GetTotalPendingRequestForBusinessManager(string EmpCode)
        {
            return PendingRequestDAL.GetTotalPendingRequestForBusinessManager(EmpCode);
        }

        //----------------------------COUNT FOR PENDING RCA Reject -----------------------------------------//

        [HttpGet]
        public RequestCountInfo GetTotalRCAReject(string EmpCode)
        {
            return PendingRequestDAL.GetTotalRCAReject(EmpCode);
        }

        //----------------------------COUNT FOR Total RCA COMP Count-----------------------------------------//


        [HttpGet]
        public List<TotalRCACompCount_Model> GetTotalRCACompCount(string EmpCode)
        {
            return PendingRequestDAL.GetTotalRCACompCount(EmpCode);
        }




        [HttpGet]
        public IList<CCReportInfo> GenerateCCReport()
        {
            return PendingRequestDAL.GenerateCCReport();
        }

        [HttpGet]
        public IList<PendingRequestInfo> GetALLComplaintDetail()                    //----------- Get all complaint Recard with status ----------------//
        {
            return PendingRequestDAL.GetALLComplaintDetail();
        }

        [HttpPost]
        public string DeleteComplaint([FromBody] PendingRequestInfo obj)            //----------- delete complaint in all complaint --------------------//
        {
            return PendingRequestDAL.DeleteComplaint(obj);
        }
        [HttpPost]
        public string BulkDelete([FromBody] List<PendingRequestInfo> obj)          //----------- Bulk delete complaint in all complaint ----------------//
        {
            return PendingRequestDAL.BulkDelete(obj);
        }



        

        [HttpGet]
        public IList<Employess_Avrg_Response> GetEmployeeResponse(string EmpCode)
        {
            return PendingRequestDAL.GetEmployeeResponse(EmpCode);
        }

        [HttpGet]
        public IList<Employess_Avrg_Response> GetEmployeeResponseDetail(string EmpCode)
        {
            return PendingRequestDAL.GetEmployeeResponseDetail(EmpCode);
        }


        [HttpGet]
        public string InsertEmployeeResponse()
        {
            return PendingRequestDAL.InsertEmployeeResponse();
        }

        [HttpGet]
        public List<ResponseListModel> GetEmployeeList()
        {
            return PendingRequestDAL.GetEmployeeList();
        }


    }
}
