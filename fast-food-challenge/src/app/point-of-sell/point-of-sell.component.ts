import { Component, inject } from '@angular/core';
import { Pedido } from '../pedido-class';
import { FormsModule } from '@angular/forms';
import { CocinaServiceService } from '../cocina-service.service';

@Component({
  selector: 'app-point-of-sell',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './point-of-sell.component.html',
  styleUrl: './point-of-sell.component.css'
})
export class PointOfSellComponent {

  
  max:number = 1000

  name1:string = ""
  description1:string =""


  pedido:Pedido | undefined
 //  Pedido:Pedido = {
    //numero: 0,
    //name : this.name1,
    //description : this.description1,
   // date: new Date()
  //}
  Service = inject(CocinaServiceService)
 // pedido:Pedido = {}
  EnviarPedido(){
    this.pedido = new Pedido(this.name1,this.description1)
  
    this.Service.añadirPedido(this.pedido)
  }

}
