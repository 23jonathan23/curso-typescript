export class Negociacao {

  constructor(
    readonly data: Date,
    readonly qtd: number,
    readonly valor: number
  ) { }

  get volume() {
    return this.qtd * this.valor
  }
}