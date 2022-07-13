import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestserviceService } from '../restservice.service';


@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
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
  status:any;

  queryParam1:any;//this using queryParam 

  registrationForm = new FormGroup({
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


  constructor(private  server:RestserviceService,private route:Router,private router1:ActivatedRoute) { }

  ngOnInit(): void {
    this.router1.queryParams.subscribe((param:any)=>{
      console.log(param);
      this.queryParam1=param.emailIsInUi;
      this.adminFindOneUser(param.emailIsInUi);

    })
  }

  adminFindOneUser(emailId:any){
    this.server.adminFindUserApi(emailId).subscribe(data=>{
      console.log(data);
      this.name=data.fullName;
      this.mail=data.emailId;
      this.dob=data.dateOfBirth;
      this.gender2=data.gender;
      this.mobile=data.phoneNumber;
      this.qualification=data.higherEducation;
      this.year=data.passOut;
      this.percent=data.persentage;
      this.experience=data.experience;
      this.address=data.address;
      this.skills=data.skills;
      this.country=data.country;
      this.status=data.status
      

    })

  }

  adminUpdateUser(){
    let body={
      "fullName":this.name,
      // "emailId":this.mail,
      "dateOfBirth":this.dob,
      "gender":this.gender2,
      "phoneNumber":this.mobile,
      "higherEducation":this.qualification,
      "passOut":this.year,
      "persentage":this.percent,
      "experience":this.experience,
      "address":this.address,
      "skills":this.skills,
      "country":this.country,
      "status":this.status

    }
    console.log(body);
    this.server.adminUpdateUserData(this.queryParam1,body).subscribe(data=>{
      console.log(data)
      this.route.navigate(['/candidate'])
    })
  }

}
