using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TestAPI.Entities;
using TestAPI.Services;

namespace TestAPI.Controllers
{
    [Route("api/shoppingCart")]
    public class ValuesController : Controller
    {

       
        private readonly IProductService _productService;

        public ValuesController( IProductService productService)
        {
           
            _productService = productService;
        }


        [HttpGet("Get")]
        public string Get()
        {
            return "Products Shopping Api";

        }

        [HttpGet("GetProductsList")]
        public IActionResult GetProductsList()
        {
            Product[] productsList = new Product[]
            {
                new Product {id = 1, title = "TV", price = 5},
                new Product {id = 2, title = "Fridge", price = 10},
                new Product {id = 3, title = "Cooker", price = 20},
                new Product {id = 4, title = "Washing Machine", price = 30},
                new Product {id = 5, title = "DVD Player", price = 40},
            };
            return Ok(productsList);

        }
        
        [HttpPost("GetShippingCost")]
        public IActionResult Post([FromBody]PurchaseAmount value)
        {
            if (!ModelState.IsValid || value.amount == 0)
                BadRequest();


            int result = _productService.ShippingAmount(value.amount);

            

            return Ok(result);

        }

        [HttpPost("PlaceOrder")]
        public IActionResult Post([FromBody]Product[] orders)
        {
            if (!ModelState.IsValid || orders.Length == 0)
                BadRequest();

            bool result = _productService.PlaceOrder(orders);


            return Ok(true);

        }

    }
}
