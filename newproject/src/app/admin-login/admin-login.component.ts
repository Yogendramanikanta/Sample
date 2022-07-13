import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  fullName:any;
  mailId:any;
  contactNumber:any;
  password:any;
  conPassword:any;
  role:any;

  constructor(private route:Router,private server:RestserviceService) { }

  ngOnInit(): void {
  }
  adminPostApi(){
    let body={
      "adminFullName":this.fullName,
      "adminEmailId":this.mailId,
      "phoneNumber":this.contactNumber,
      "adminPassword":this.password,
      "adminConfPassword":this.conPassword,
      "adminRole":this.role
    }
    this.route.navigate(['/candidate'])
    console.log(body);
    this.server.adminRegistractionApi(body).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['/candidate']);

    })

  }
 

}
