import { Component, inject } from '@angular/core';
import { CocinaServiceService } from '../cocina-service.service';
import { JsonPipe } from '@angular/common';
import { Pedido } from '../pedido-class';

@Component({
  selector: 'app-delibery-point',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './delibery-point.component.html',
  styleUrl: './delibery-point.component.css'
})
export class DeliberyPointComponent {
Service = inject(CocinaServiceService)

Entregar(p:Pedido){
  this.Service.entregarPedido(p)
}
}
