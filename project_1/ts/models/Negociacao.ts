import { MeuObjeto } from './MeuObjeto'

export class Negociacao implements MeuObjeto<Negociacao> {

  constructor(
    readonly data: Date,
    readonly qtd: number,
    readonly valor: number
  ) { }

  get volume() {
    return this.qtd * this.valor
  }

  paraTexto(): void {
    console.log('-- paraTexto --')
    console.log(
      `Data: ${this.data}
        Quantidade: ${this.qtd}, 
        Valor: ${this.valor}, 
        Volume: ${this.volume}`
    )
  }

  ehIgual(negociacao: Negociacao): boolean {
    return this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() == negociacao.data.getMonth() &&
      this.data.getFullYear() == negociacao.data.getFullYear()
  }
}