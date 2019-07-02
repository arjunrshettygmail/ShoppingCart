using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Edm.Expressions;
using TestAPI.Entities;

namespace TestAPI.Services
{
    

    public interface IProductService
    {
        int ShippingAmount(int amount);

        bool PlaceOrder(Product[] products);
    }


}
