using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestAPI.Entities
{
    

    public class Product
    {
        public int id { get; set; }
        public string title { get; set; }
        public int price { get; set; }
    }

    public class PurchaseAmount
    {
        public int amount { get; set; }
        
    }
}
