import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.css']
})
export class ForgetemailComponent implements OnInit {
  emailId:any;
  password:any;
  conpassword:any;


  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  putApiMethod(){
    if(this.password==this.conpassword)
    {
      console.log("putApi");
      this.route.navigate(['/login']);
    }

  }

}
