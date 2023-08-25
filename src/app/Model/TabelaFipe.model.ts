export interface TabelaFipe {
  id?: number | null;
  valor: string;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: string;
  mesReferencia: string;
  tipoVeiculo: number;
  siglaCombustivel: string;
  dataConsulta: string;
  placaVeiculo?: string;
}

export interface BuscaCodigoAno {
  codigo: string;
  ano: number;
}

export interface BuscaPlaca {
  placa: string;
}
