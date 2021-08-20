import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Crediario } from '../services/crediario.model';
import { CrediarioService } from '../services/crediario.service';

// const CREDIARIOS = [
//   { id: 1, descricao: "Crediário 1", valorTotal: 2500, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1},
//   { id: 2, descricao: "Crediário 2", valorTotal: 850, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1},
//   { id: 3, descricao: "Crediário 3", valorTotal: 500, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1},
//   { id: 4, descricao: "Crediário 4", valorTotal: 500, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1},
//   { id: 5, descricao: "Crediário 5", valorTotal: 450, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1},
//   { id: 6, descricao: "Crediário 6", valorTotal: 700, taxaJuros: 0.5, qtdeParcelas: 6, proximoVencimento: '2021-10-25', clienteId: 1}
// ];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  // crediarios = CREDIARIOS;
  crediarios: Crediario[];
  valorTotal = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crediarioService: CrediarioService) {
  }

  ngOnInit() {
    this.crediarioService.getCrediariosByClient(1)
    .subscribe(result => {
      this.crediarios = result;
      
      for(var i = 0; i < this.crediarios.length; ++i) {
        this.valorTotal+=this.crediarios[i].valorTotal;
      }
    })
  }

  showCrediario(cred: Crediario) {
    console.log(cred);
    this.router.navigate(['crediario-detalhe', cred.id]);
  }
}
