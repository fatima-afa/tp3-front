import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  orderdetails : any;
  orderId : number;
  constructor(private http:HttpClient, private router: Router, private route : ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }


  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o);

  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/fullOrder/"+this.orderId).subscribe({

      next:(data)=>{
        this.orderdetails=data;
        console.log("hihi"+this.orderId);
        console.log(data);
      },
      error:(error)=>{
        console.log("hihi "+this.orderId);

      }
    });
  }

}
