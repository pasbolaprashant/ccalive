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
    
    public partial class Get_ProductBatchInfo_Result
    {
        public int ProductBatch_ID { get; set; }
        public string BatchNumber { get; set; }
        public System.DateTime ManufactureDate { get; set; }
        public Nullable<int> ShelfLife { get; set; }
        public Nullable<System.DateTime> ShelfLifeDate { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public Nullable<int> ProductShelfLife { get; set; }
    }
}
