import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-candidates-table',
  templateUrl: './candidates-table.component.html',
  styleUrls: ['./candidates-table.component.css']
})
export class CandidatesTableComponent implements OnInit {
  getTableData:any;

  constructor(private server:RestserviceService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){

    // this.getTableData=data;
    this.server.userRegistrationGetApi().subscribe(data=>{
      console.log(data);
      this.getTableData=data;
      console.log(data);
    })
  }

  updateUserData(table1:any){

   
      this.route.navigate(['/update'],{queryParams:{emailIsInUi:table1}})
    };
    

  }


