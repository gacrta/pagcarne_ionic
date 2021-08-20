import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Crediario } from 'src/app/services/crediario.model';
import { CrediarioService } from 'src/app/services/crediario.service';

@Component({
  selector: 'app-crediario-detalhe',
  templateUrl: './crediario-detalhe.page.html',
  styleUrls: ['./crediario-detalhe.page.scss'],
})
export class CrediarioDetalhePage implements OnInit {
  
  crediario: Crediario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crediarioService: CrediarioService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {      
      let id = params['id'];
      console.log(id);
      
      this.crediarioService.getCrediarioById(id)
      .subscribe(result => {
        this.crediario = result;
      })
    });
  };  

  onBackClicked() {
    this.router.navigate(['/tabs/tab2']);
  }
}
