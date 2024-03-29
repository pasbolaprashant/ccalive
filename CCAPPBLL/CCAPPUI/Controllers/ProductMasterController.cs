﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CCAPPBLL.CustomModel;
using CCAPPDAL.DALImpl;
using Newtonsoft.Json;
using System.Data;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using OfficeOpenXml;
using CCAPPBLL;
using CCAPPDAL;

namespace CCAPPUI.Controllers
{
    public class ProductMasterController : ApiController
    {
        [HttpGet]
        public List<ProductMasterModel> GetProductId()
        {
          return  ProductMasterDAL.GetProductId();
        }

        [HttpGet]
        public string GetBrandName(int Brand_Id)
        {
         return ProductMasterDAL.GetBrandName(Brand_Id);

        }




        [HttpPost]
        public async Task<HttpResponseMessage> UploadProductExcel()
        {
            string location = "";
            string fileName = "";
            string ResponseMessage = "Error";
            // Check if the request contains multipart/form-data.
            string strUniqueId = System.Guid.NewGuid().ToString();
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            var root = System.Web.HttpContext.Current.Server.MapPath(System.Configuration.ConfigurationManager.AppSettings["ExcelPath"]);

            Directory.CreateDirectory(root);
            var provider = new MultipartFormDataStreamProvider(root);
            var result = await Request.Content.ReadAsMultipartAsync(provider);

            var model = result.FormData["data"];
            var Obj = JsonConvert.DeserializeObject<ProductBLL>(model);

            DataTable tbl = new DataTable();
            DataColumn col = new DataColumn();
            col.ColumnName = "Product_ID";

            tbl.Columns.Add(col);

            int countIfProccessed = 0;
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



                    try
                    {

                        string fileType = Path.GetExtension(fileName);

                        string filename = DateTime.Now.Ticks.ToString();
                        string ExlName = filename + fileType;
                        string str;
                        str = filename.Substring(filename.Length - 1, 1);
                        string ImageWithPath = string.Format("{0}{1}", filename + str, fileType);
                        location = Path.Combine(root, ImageWithPath);
                        File.Move(result.FileData[i].LocalFileName, Path.Combine(root, ImageWithPath));
                    }

                    catch (Exception e)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, "2");

                    }

                    FileInfo f = new FileInfo(location);
                    Stream s = f.OpenRead();

                    bool hasHeader = true;

                    var excel = new ExcelPackage(s);
                    var workbook = excel.Workbook;

                    if (i == 0)
                    {
                        int count = 0, TotalCount = 0;
                        var sheet = excel.Workbook.Worksheets["Product"];
                        if (sheet == null)
                        {
                            return Request.CreateResponse(HttpStatusCode.OK, "2");
                        }

                        foreach (var firstRowCell in sheet.Cells[1, 1, 1, sheet.Dimension.End.Column])
                        {
                            tbl.Columns.Add(hasHeader ? firstRowCell.Text : string.Format("Column {0}", firstRowCell.Start.Column));
                        }




                        DataColumn Brand_ID = new DataColumn();
                        Brand_ID.ColumnName = "Brand_ID";

                        DataColumn IsDeleted = new DataColumn();
                        IsDeleted.ColumnName = "IsDeleted";

                        DataColumn CreatedBy = new DataColumn();
                        CreatedBy.ColumnName = "CreatedBy";

                        DataColumn CreationDate = new DataColumn();
                        CreationDate.ColumnName = "CreationDate";


                        tbl.Columns.Remove("Brand Name");
                        tbl.Columns.Add(Brand_ID);
                        tbl.Columns.Add(IsDeleted);
                        tbl.Columns.Add(CreatedBy);
                        tbl.Columns.Add(CreationDate);


                        if (tbl.Columns.Count == 11)
                        {
                            if (tbl.Columns[1].ColumnName != "Product Code" || tbl.Columns[2].ColumnName != "Product Name" || tbl.Columns[3].ColumnName != "Product Description" || tbl.Columns[4].ColumnName != "Product Shelf Life" || tbl.Columns[5].ColumnName != "Segment" || tbl.Columns[6].ColumnName != "Stream")
                            {
                                return Request.CreateResponse(HttpStatusCode.OK, "3");
                            }
                        }
                        else
                        {
                            return Request.CreateResponse(HttpStatusCode.OK, "2");
                        }


                        // Column Data of excel file
                        var startRow = hasHeader ? 2 : 1;

                        for (int rowNum = startRow; rowNum <= sheet.Dimension.End.Row; rowNum++)
                        {
                            //if (count == sheet.Dimension.End.Row / 50)
                            //{

                            //BrandDAL.BulkInsertDataTable(tbl);

                            //tbl.Rows.Clear();

                            //}
                            var wsRow = sheet.Cells[rowNum, 1, rowNum, sheet.Dimension.End.Column];
                            DataRow row = tbl.Rows.Add();
                            foreach (var cell in wsRow)
                            {

                                if (cell.Start.Column == 1)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 2)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 3)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 4)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 5)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 6)
                                    row[cell.Start.Column - 0] = cell.Text;

                                if (cell.Start.Column == 7)
                                {

                                    var BrandId = BrandDAL.GetBrandName(cell.Text);
                                    row[cell.Start.Column - 0] = BrandId.BrandID;
                                    row[cell.Start.Column + 1] = false;

                                    row[cell.Start.Column + 2] = Obj.CreatedBy;

                                    row[cell.Start.Column + 3] = DateTime.Now;


                                }


                            }

                        }
                        //if (tbl.Rows.Count > 0 && tbl.Rows.Count < sheet.Dimension.End.Row / 50)
                        //{
                        ProductDAL.BulkInsertDataTable(tbl);
                        //	}
                        tbl.Rows.Clear();
                        tbl.Columns.Clear();   //warning: All Columns delete
                        tbl.Dispose();
                    }
                }
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.Accepted, e.Message);

            }

            //string msg = "";
            //if (countIfProccessed == 0)
            //{
            //	msg = "1";

            //}
            //else
            //{
            //	msg = "4";
            //}
            return Request.CreateResponse(HttpStatusCode.Accepted, "Successfully Uploaded");

        }
    }
}