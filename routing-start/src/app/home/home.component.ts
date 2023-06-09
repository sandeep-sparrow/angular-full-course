import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onServerAdd1(id: number) {
        // do some calculations, or connect to backend application and get some information
      this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdits: 1}, fragment: 'loading'});
    }
}
