import { Component } from '@angular/core';

const CREDIARIOS = [
  { descricao: "Crediário 1", vencimento: '25/10/2021', valor: 2500},
  { descricao: "Crediário 2", vencimento: '25/10/2021', valor: 850},
  { descricao: "Crediário 3", vencimento: '25/10/2021', valor: 500},
  { descricao: "Crediário 4", vencimento: '25/10/2021', valor: 500},
  { descricao: "Crediário 5", vencimento: '25/10/2021', valor: 450},
  { descricao: "Crediário 6", vencimento: '25/10/2021', valor: 700}
];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  crediarios = CREDIARIOS;
  valorTotal = 0;

  constructor() {
    for(var i = 0; i < this.crediarios.length; ++i) {      
      this.valorTotal+=this.crediarios[i].valor;
    }
  }

  showCrediario(any) {
    
  }
}
