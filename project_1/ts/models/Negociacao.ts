class Negociacao {

  constructor(
    private _data: Date,
    private _qtd: number,
    private _valor: number
  ) { }

  get data() {
    return this._data
  }

  get qtd() {
    return this._qtd
  }

  get valor() {
    return this._valor
  }

  get volume() {
    return this._qtd * this._valor
  }
}