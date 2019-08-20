using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace CCAPPDAL.DALImpl
{
    class Email
    {
        public static string sendEmail(string subject, string FromMailAddress, MailAddressCollection toEmail, MailAddressCollection ccEmail, string Body)
        {
            string SMTPEmailHost = System.Configuration.ConfigurationSettings.AppSettings["SmtpServer"];
            string SMTPusername = System.Configuration.ConfigurationSettings.AppSettings["SmtpUserName"];
            string SMTPpass = System.Configuration.ConfigurationSettings.AppSettings["SmtpPassword"];
            string AllowEmail = System.Configuration.ConfigurationSettings.AppSettings["AllowEmail"];
            string smtpAddressPort = System.Configuration.ConfigurationSettings.AppSettings["smtpAddressPort"];


            if (AllowEmail == "true")
            {
                try
                {


                    SmtpClient smtp = new SmtpClient(SMTPEmailHost);
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(SMTPusername, SMTPpass);
                    smtp.Port = Convert.ToInt32(smtpAddressPort);    // 587;
                    smtp.EnableSsl = true;
                    MailMessage message = new MailMessage();
                    message.From = new MailAddress(FromMailAddress);

                    foreach (var mail in toEmail)
                    {
                        message.To.Add(mail);
                    }
                    if (ccEmail != null)
                    {
                        foreach (var mail in ccEmail)
                        {
                            message.CC.Add(mail);
                        }
                    }
                    message.Bcc.Add("ankur.verma@phoenixtech.consulting");
                    message.Bcc.Add("pratik.jain@nipponpaint.co.in");
                    message.Bcc.Add("prashant.pasbola@phoenixtech.consulting");
                    message.CC.Add("monika.sharma@nipponpaint.co.in");
                    message.CC.Add("Shilpa.bhatnagar@nipponpaint.co.in");
                    message.CC.Add("catalyst@nipponpaint.co.in");


                    message.IsBodyHtml = true;
                    message.Subject = subject;
                    message.Body = Body;

                    smtp.Send(message);

                    return "Success: Notification sent";
                }
                catch  (Exception ex)
                {
                    throw ex;
                   // return "Failed: Email ";
                }
            }
            else
            {
                return "Email not allowed";
            }
        }
    }
}
