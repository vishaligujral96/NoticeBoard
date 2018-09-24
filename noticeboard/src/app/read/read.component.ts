import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
// import { Notice } from '../notice.interface';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private api: ApiService, private routes: Router) { }
  notices: any
  ngOnInit() {
    this.api.getNotices().subscribe(result => {
      console.log("ngonit");
      this.notices = result.data;
      this.routes.navigate(['/read'])
      console.log(this.notices)
    },
      err => { console.log(err); }
    )
  }
  delete(id) {
    this.api.delete(id).subscribe(res => console.log(res))
    // this.notices.splice(index,1);
    this.notices.forEach((object, index) => {
      if (object.id === id) {
        this.notices.splice(index, 1)
      }

    })
  }

}
