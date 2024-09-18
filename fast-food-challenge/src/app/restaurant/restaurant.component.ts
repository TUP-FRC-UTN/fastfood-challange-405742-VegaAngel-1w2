import { Component } from '@angular/core';
import { PointOfSellComponent } from "../point-of-sell/point-of-sell.component";
import { CocinaComponent } from "../cocina/cocina.component";
import { DeliberyPointComponent } from "../delibery-point/delibery-point.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfSellComponent, CocinaComponent, DeliberyPointComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
