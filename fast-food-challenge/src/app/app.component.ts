import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSellComponent } from "./point-of-sell/point-of-sell.component";
import { CocinaComponent } from "./cocina/cocina.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PointOfSellComponent, CocinaComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fast-food-challenge';
}
