using System;
using System.Web.UI.WebControls;
using System.Text;
using System.Security.Cryptography;
using System.Globalization;
using System.IO;

namespace CCAPPBLL.GenricLib
{
    public class DecryptFunction
    {
        public Byte[] lbtVector = { 240, 3, 45, 29, 0, 76, 173, 59 };
        public string encryptionKey = "NetCommKey";

        public TextInfo textInfo;
        public CultureInfo cultureInfo;
        ListItem li;


        /***********************************Function for decrypt the data***************************/

        public string Decrypt(string encryptedValue)
        {
            Byte[] buffer;
            TripleDESCryptoServiceProvider desProvider = new TripleDESCryptoServiceProvider();
            MD5CryptoServiceProvider md5Provider = new MD5CryptoServiceProvider();



            try
            {
                buffer = Convert.FromBase64String(encryptedValue.Replace("ncl", "+").Replace("vvk", "=").Replace("sis", "/"));
                                                                  
                desProvider.Key = md5Provider.ComputeHash(ASCIIEncoding.ASCII.GetBytes(encryptionKey));
                desProvider.IV = lbtVector;
                return Encoding.ASCII.GetString(desProvider.CreateDecryptor().TransformFinalBlock(buffer, 0, buffer.Length)).ToString();
            }
            finally
            {
                desProvider.Clear();
                md5Provider.Clear();
                desProvider = null;
                md5Provider = null;
            }
        }

        public static string Decryptmy(string pass)
        {
            string EncryptionKey = "abc123";
            string dt = pass.Replace("pPxtaZ", "==").Replace("jH", "=");
            string PPText2 = "";

            PPText2 = dt.Replace(" ", "+");
            byte[] cipherBytes = Convert.FromBase64String(PPText2);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    PPText2 = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return PPText2;
        }

    }
}
