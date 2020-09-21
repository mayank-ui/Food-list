import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get("https://gist.githubusercontent.com/Aakash06/fad46b64a573d4c152e899192b90b86c/raw/8bdfa0dfcce2411cb521b58916cd5556700c1ab1/menu.json").subscribe(
      (data) => console.log(data)
    )
  }

}
