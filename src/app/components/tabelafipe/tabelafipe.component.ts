import { TabelaFipeService } from './../../Services/tabela-fipe.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {
  TabelaFipe,
  BuscaCodigoAno,
  BuscaPlaca,
} from 'src/app/Model/TabelaFipe.model';

@Component({
  selector: 'app-tabelafipe',
  templateUrl: './tabelafipe.component.html',
  styleUrls: ['./tabelafipe.component.css'],
})
export class TabelafipeComponent implements OnInit {
  formulario: any;
  placaField = new FormControl();
  placaInput = new FormControl();
  dados: TabelaFipe = {
    id: 0,
    valor: '',
    marca: '',
    modelo: '',
    anoModelo: 0,
    combustivel: '',
    codigoFipe: '',
    mesReferencia: '',
    tipoVeiculo: 0,
    siglaCombustivel: '',
    dataConsulta: '',
    placaVeiculo: '',
  };

  tabela: TabelaFipe = {
    id: 0,
    valor: '',
    marca: '',
    modelo: '',
    anoModelo: 0,
    combustivel: '',
    codigoFipe: '',
    mesReferencia: '',
    tipoVeiculo: 0,
    siglaCombustivel: '',
    dataConsulta: '',
    placaVeiculo: '',
  };

  visibilidadeTabela: boolean = false;
  visibilidadeFormulario: boolean = false;

  constructor(private tabelaFipe: TabelaFipeService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      codigo: new FormControl(null),
      ano: new FormControl(null),
    });
  }

  EnviarFormulario(): void {
    const codigoano: BuscaCodigoAno = this.formulario.value;

    if ( (codigoano.codigo = codigoano.codigo.trim()) !== '' && (codigoano.ano !== 0)) {
      this.tabelaFipe
        .BuscarPorCodigoAno(codigoano.codigo, codigoano.ano)
        .subscribe((result) => {
          this.dados = result;
          this.visibilidadeFormulario = true;
        });
    }
  }

  BuscarPlaca(): void {
    let value = this.placaField.value;
    if (value && (value = value.trim()) !== '') {
      this.tabelaFipe.BuscarPorPlaca(value)
      .subscribe((result) => {
        this.tabela = result;
        this.visibilidadeTabela = true;
      });
    }
  }

  EnviarPlaca(): void {
    let value = this.placaInput.value;

    this.dados.placaVeiculo = value;

    if (value && (value = value.trim()) !== '') {
      this.tabelaFipe.SalvarPlaca(this.dados)
      .subscribe((result) => {
        this.dados = result;
        this.visibilidadeTabela = false;
      });
    }
    this.visibilidadeFormulario = false;
  }

  Voltar() {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = false;
  }
}
