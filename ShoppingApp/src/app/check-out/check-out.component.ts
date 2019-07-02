import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private toastrService:ToastrService, private router:Router){

  }

  ngOnInit() {
  }

  

  CheckOut() {
    this.toastrService.success('Hello world!');
    

    setTimeout(()=>{  
      this.router.navigateByUrl('/products/checkOut/thankYou');
                   }, 3000);
    
    
  }

}
