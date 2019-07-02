using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAPI.Entities;

namespace TestAPI.Services
{
    
    public class ProductService : IProductService
    {
        public int ShippingAmount(int amount)
        {
            if (amount <= 50)
            {
                return 10;
            }
            else
            {
                return 20;
            }

        }

        public bool PlaceOrder(Product[] orders)
        {
            if (orders != null && orders.Length > 0)
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
