//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCAPPDAL.DbContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblTemplateMaster
    {
        public int Template_Id { get; set; }
        public string Templat_Body { get; set; }
        public string Template_Subject { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreationDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string templete_For { get; set; }
    }
}