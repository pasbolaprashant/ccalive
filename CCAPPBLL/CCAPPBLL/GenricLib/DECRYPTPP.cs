﻿using System;
using System.Web.UI.WebControls;
using System.Text;
using System.Security.Cryptography;
using System.Globalization;
using System.IO;

namespace CCAPPBLL.GenricLib
{
   public class DECRYPTPP
    {

        public static string Decryptmy(string pass)
        {
            string EncryptionKey = "abc123";
            string dt = pass.Replace("pPxtaZ", "==").Replace("NEHZA", "=").Replace("phPpP", "+"); 
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
