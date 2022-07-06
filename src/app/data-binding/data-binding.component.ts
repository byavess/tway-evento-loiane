import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url= 'http://loiane.com';
  cursoAngular:boolean = true ;

  urlImagem= 'https://media.istockphoto.com/photos/abstract-retro-futuristic-landscape-background-picture-id1328908241?k=20&m=1328908241&s=612x612&w=0&h=A1e_sxVPbfmVW2u1AYm69jsmfCfHqXcJ_PM5wzFgQ-Q='
  
  valorAtual: string = '';
  valorSalvo:string='';
  isMouseOver: boolean = false;
  nome:string='abc'
  pessoa: any ={
    nome: 'def',
    idade: 20
  };



              
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }
  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual=((<HTMLInputElement>evento.target).value);
  }
  salvarValor(valor:any){
   this.valorSalvo=valor;

  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
