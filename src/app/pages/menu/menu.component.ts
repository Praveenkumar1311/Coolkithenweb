import { Component, OnInit } from '@angular/core';
import {MenuapiservicesService} from 'src/app/service/menuapiservices.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:MenuapiservicesService) { }
  foodData:any;
  ngOnInit(): void {

    this.foodData = this.service.foodDetails;
  }

}
