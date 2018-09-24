import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createUserForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
    age: new FormControl('')

  })

  constructor(private apiService: ApiService,private route:Router) { }

  ngOnInit() {
  }

  createUser(){
    console.log("hii")
    this.apiService.postNotices(this.createUserForm.value).subscribe(
      response=>{
        console.log(response);
      
          
          this.route.navigate(['/read']);
         
      }
    );
  }
}
