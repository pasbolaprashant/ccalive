using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;
using CCAPPDAL.DbContext;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Http;

namespace CCAPPUI.Controllers
{
    public class TechnicalHeadController : ApiController
    {
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

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["TeachnicalHeadImages"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);
            if (result.FormData["data"] == null)
            {

            }
            var model = result.FormData["data"];
            WholeCompliantReApplicationModel obj = JsonConvert.DeserializeObject<WholeCompliantReApplicationModel>(model);
            GetData(obj);
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

                    //Storing file to temporary location in project
                    try
                    {

                        string fileType = Path.GetExtension(fileName);

                        string filename = Path.GetFileNameWithoutExtension(fileName);


                        string ExlName = filename + fileType;
                        string str;
                        str = filename.Substring(filename.Length - 1, 1);
                        string FileWithPath = string.Format("{0}{1}", filename + str, fileType);
                        location = Path.Combine(root, FileWithPath);
                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, FileWithPath));

                        using (var dbContext = new CustomerComplaintEntities())
                        {
                            //var ComplaintId = dbContext.TblComplaintRequestHdrs.Where(x => x.Dealer_ID == Dealer_ID).Select(x => x.Complaint_ID).First();
                            //TblComplaintRequestPhotoDtl tr = new TblComplaintRequestPhotoDtl
                            //{
                            //    Complaint_ID = ComplaintId,
                            //    PhotoUrl = result.FileData[i].LocalFileName,
                            //    CreatedBy = "",
                            //    CreationDate = DateTime.Now
                            //};
                            //dbContext.Entry(tr).State = EntityState.Added;
                            //dbContext.SaveChanges();
                        }


                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, "2");
                    }



                }
            }
            catch (Exception e)
            {


            }
            return Request.CreateResponse(HttpStatusCode.Accepted, strUniqueId);
        }

        [HttpPost]
        public void GetData(WholeCompliantReApplicationModel obj)
        {
            ComplaintReappcationDAL.InsertIntoComplaintReappcation(obj.ComplaintReapplication);
            foreach (var i in obj.SystemInformation)
            {
                ComplaintReappcationDAL.InsertDataIntoTblSystemInfo(i);
            }
        }
    }

   
}