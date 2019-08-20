using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPDAL.DbContext;
using CCAPPDAL.DALImpl;
using CCAPPBLL.CustomModel;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;
using CCAPPDAL.DbContext;
using System.Data.Entity;
using Newtonsoft.Json;

namespace CCAPPUI.Controllers
{
    public class RequestCreationController : ApiController
    {
        long Dealer_ID;
        string CreatedBy;
        
        
        [HttpPost]
        public async Task<HttpResponseMessage> uploadImg()
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
            if(result.FormData["data"]==null)
            {
              
            }

            var model = result.FormData["data"];
                   
            RequestCreationModel obj = JsonConvert.DeserializeObject<RequestCreationModel>(model);
            var ImageCount = result.FileData.Count;

            
                if(obj.CustomerComplaint.DeLerAssignId !=null)
            {
              

                string Complaint_Number = RecieveData(obj);   // before string Complaint_Number
                int number = 0;
              //  if (Complaint_Number, out number)   //if (int.TryParse(Complaint_Number, out number))
                   
                if (int.TryParse(Complaint_Number, out number))
                {
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
                                if(filename !=null)
                                {
                                RequestCreationDAL.InsertDataIntoTblPhotoDtl(Convert.ToInt32(Complaint_Number), filename);
                                }
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
                }
                return Request.CreateResponse(HttpStatusCode.Accepted, Complaint_Number);


            }
            else
            { 

                    if (ImageCount > 0)
                    {
                
                        string Complaint_Number = RecieveData(obj);
                        int number = 0;
                        if (int.TryParse(Complaint_Number, out number))
                        {
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

                                        RequestCreationDAL.InsertDataIntoTblPhotoDtl(Convert.ToInt32(Complaint_Number), filename);
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
                        }
                        return Request.CreateResponse(HttpStatusCode.Accepted, Complaint_Number);

                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.Accepted, "Upload atleast 1 image");
                    }

            }
        }




        public string RecieveData(RequestCreationModel obj)
        {
            return RequestCreationDAL.SubmitComplaint(obj);
        }


        //check rewuest

        public string createCheck(RequestCreationModel obj)
        {
            return "hi";
        }











        public string RemoveSpecialCharacters(string fileName)
        {
            fileName = fileName.Replace("&", "");
            fileName = fileName.Replace("#", "");
            fileName = fileName.Replace("%", "");
            fileName = fileName.Replace("?", "");
            fileName = fileName.Replace("_", "");
            fileName = fileName.Replace("-", "");
            fileName = fileName.Replace("!", "");
            fileName = fileName.Replace("@", "");
            fileName = fileName.Replace("$", "");


            return fileName;

        }

        private int NewNumber()
        {
            Random a = new Random(Guid.NewGuid().GetHashCode());
            return a.Next(10000, 500000);
        }


        [HttpGet]
        public RequestCreationModel GetComplaintDetails(int ComplaintId)
        {
            return RequestCreationDAL.GetComplaintDetails(ComplaintId);
        }


        
       
        [HttpGet]
        public bool DeletePhoto(int ComplaintPhoto_Id)
        {

            return RequestCreationDAL.DeletePhoto(ComplaintPhoto_Id);
            //return RequestCreationDAL.ReSubmitrequest(obj);

        }

        [HttpPost]
        public async Task<HttpResponseMessage> ReSubmitrequest()
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
            RequestCreationModel obj = JsonConvert.DeserializeObject<RequestCreationModel>(model);
            ReSubmitrequestUpdate(obj);
            int number = 0;
        //   if ( (obj.CustomerComplaint.ComplaintNumber, out number))  //if (int.TryParse(obj.CustomerComplaint.ComplaintNumber, out number))   before
            if (int.TryParse(obj.CustomerComplaint.ComplaintNumber.ToString(), out number))
            {
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

                            RequestCreationDAL.InsertDataIntoTblPhotoDtl(obj.CustomerComplaint.ComplaintNumber, filename);
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
            }
            return Request.CreateResponse(HttpStatusCode.Accepted, obj.CustomerComplaint.ComplaintNumber);
        }


        public bool ReSubmitrequestUpdate(RequestCreationModel obj)
        {

            return RequestCreationDAL.ReSubmitrequest(obj, obj.CustomerComplaint.ComplaintNumber);
            //return RequestCreationDAL.ReSubmitrequest(obj);

        }

    }
}