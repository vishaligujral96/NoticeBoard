import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form:FormGroup

  constructor(private route:Router,private api:ApiService,private builder:FormBuilder) { 
    this.form =this.builder.group({
      email:[''],
      password:['']
    })
    }

  ngOnInit() {
  }
  
  register(){
    
    this.route.navigate(['/Register']);
   }
   login()
   {
     
    this.api.login(this.form.value).subscribe(res=>{
      console.log(res);
      this.api.token = res.access_token
      this.route.navigate(['/home']);
    })
    
   }
}
