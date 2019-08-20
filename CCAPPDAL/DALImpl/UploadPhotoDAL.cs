using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPDAL.DALImpl
{
    public class UploadPhotoDAL
    {
        public static void UploadPhotos(string FilePaths)
        {
            string[] FileName = FilePaths.Split('\\');
            FileStream fs = new FileStream(FilePaths, FileMode.Open);
            Bitmap bmp = new Bitmap(fs);
            bmp.Save("C:\\Users\narayan\\Desktop\\OfficeWork\\CCAPP\\CCAPPBLL\\CCAPPUI\\App_Data\\"+ FileName[FileName.Length-1]);//how to give path
            
        }
    }
}
