import { Injectable } from '@angular/core';
import { Pedido } from './pedido-class';

@Injectable({
  providedIn: 'root'
})
export class CocinaServiceService {

  private pedidos:Pedido[] = []

  private pedidoEnCoccion:Pedido[] = []

  pedidosListos:Pedido[] = []

  constructor() { }



  añadirPedido(p:Pedido){
   this.pedidos?.push(p)
  }
  cocinarPedido(p:Pedido){
    this.pedidoEnCoccion[0] = p
   this.pedidos = this.pedidos.filter(pe => pe.numero != p.numero)

  }
  terminarPedido(p:Pedido){
    this.pedidosListos.push(p)
    this.pedidoEnCoccion = []
  }
  hayUnPedido(){
    if(this.pedidoEnCoccion[0] == undefined || this.pedidoEnCoccion[0] == null){
      return false
    }else{
      return true
    }
  }
  entregarPedido(p:Pedido){
    this.pedidosListos = this.pedidosListos.filter(pe => pe.numero != p.numero)

  }
  getPedidos(){
    return this.pedidos
  }
  getPedidosEnCoccion(){
    return this.pedidoEnCoccion
  }

}
