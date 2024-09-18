import { Component, inject } from '@angular/core';
import { CocinaServiceService } from '../cocina-service.service';
import { Pedido } from '../pedido-class';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {
Service = inject(CocinaServiceService)

Cocinar(p:Pedido){
  this.Service.cocinarPedido(p)
}

terminarPedido(p:Pedido){
  this.Service.terminarPedido(p)
}
  
}
