import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-chinese-startters',
  templateUrl: './chinese-startters.component.html',
  styleUrls: ['./chinese-startters.component.css']
})
export class ChineseStarttersComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) {
    
   }
food =[];
newfood =[];
  ngOnInit(): void {
    this.http.get("https://gist.githubusercontent.com/Aakash06/fad46b64a573d4c152e899192b90b86c/raw/8bdfa0dfcce2411cb521b58916cd5556700c1ab1/menu.json").subscribe(
      (data) => this.foodList(data))
  }
  foodList(data){
    // this.food = data;

data.forEach(element => {

  if(element.category === "Chinese Starter")
  {
    this.newfood.push(element);
    console.log("New Food", this.newfood);

  }
});

  }
}
