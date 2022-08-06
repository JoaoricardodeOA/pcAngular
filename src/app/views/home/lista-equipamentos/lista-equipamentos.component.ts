import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from 'src/app/shared/service/equipamento.service';
import { Equipamento } from 'src/app/shared/model/equipamento.model';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-lista-equipamentos',
  templateUrl: './lista-equipamentos.component.html',
  styleUrls: ['./lista-equipamentos.component.css']
})
export class ListaEquipamentosComponent implements OnInit {

  constructor(public equipamentoService: EquipamentoService) {
    this.equipamentos = this.equipamentoService.getEquipamentos();
  }

  equipamentos : Observable<Equipamento[]>;
  displayedColumns = ['vezesQuebrado','serialNumber','patrimonio','manutencao','empresa','modelo','tipo','responsavel','idade','modificacoes'];
  ngOnInit(): void {
    this.getEquipamentos();
    
  }
  getEquipamentos(){
    this.equipamentoService.getEquipamentos().subscribe(
        (response) => console.log(response),
        (error:any) => console.log(error),
        () => console.log('Done')
      );
  }

}
