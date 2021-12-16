import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total: number = 0;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getTotal();
  }

    getTotal(){
      this.homeService.getAlunoTotal().subscribe(res =>{
          this.total = res;
      })
    }
}
