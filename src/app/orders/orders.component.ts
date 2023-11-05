import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  implements OnInit{
  orders : any;
  customrId : number;
  constructor(private http:HttpClient, private router: Router, private route : ActivatedRoute) {
    this.customrId=route.snapshot.params['customerId'];
  }


  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o);

  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId="+this.customrId).subscribe({

      next:(data)=>{
        console.log("hahii : ");
        console.log(this.customrId);
        this.orders=data;
      },
      error:(error)=>{
        console.log("hahii : ");
        console.log(this.customrId);
      }
    });
  }
}
