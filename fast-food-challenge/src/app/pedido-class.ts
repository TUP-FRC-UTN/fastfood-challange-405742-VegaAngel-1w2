export class Pedido{
    numero :number;
    name: string;  // Nombre del cliente
    description: string;  // Descripción del pedido
    date: Date; // Fecha de creación del pedido

    constructor(na:string,description:string){
        this.numero = Math.floor(Math.random() * 1000)
        this.name = na
        this.description = description
        this.date = new Date()
    }
}