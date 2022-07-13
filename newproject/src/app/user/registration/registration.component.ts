import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestserviceService } from 'src/app/restservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name:any;
  mail:any;
  dob:any;
  gender2:any;
  mobile:any;
  qualification:any;
  year:any;
  percent:any;
  experience:any;
  address:any;
  skills:any;
  country:any;
  registrationForm=new FormGroup({
    name: new FormControl('', [Validators.required]),
    mail: new FormControl('',[Validators.required]),
    DOB : new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required]),
    qualification: new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    percent: new FormControl('',[Validators.required]),
    experience: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    skills: new FormControl('',[Validators.required]),
    Country: new FormControl('',[Validators.required]),

  })

  constructor(private server:RestserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  //**********************POST API *****************************/
  PostApi(){
    let body={
      "fullName":this.name,
      "emailId":this.mail,
      "dateOfBirth":this.dob,
      "gender":this.gender2,
      "higherEducation":this.qualification,
      "experience":this.experience,
      "phoneNumber":this.mobile,
      "country":this.country,
      "skills":this.skills,
      "persentage":this.percent,
      "passOut":this.year,
      "address":this.address
    }
    this.route.navigate(['/home12'])
    console.log(this.gender2);
    console.log(body);
    this.server.userRegistrationPostApi(body).subscribe(data=>{
      console.log("sucessfully insert the data",data);
      // this.route.navigate(['/home12']);
    })


  }



}
