import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingApp';

  constructor(private toastrService:ToastrService){

  }

  showSuccess() {
    this.toastrService.success('Hello world!');
  }
}
