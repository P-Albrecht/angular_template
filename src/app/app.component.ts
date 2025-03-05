import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FlaskapiService } from './flaskapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarCollapsed = true;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private flaskapiService: FlaskapiService) {
  }

  async ngOnInit() {

  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}

