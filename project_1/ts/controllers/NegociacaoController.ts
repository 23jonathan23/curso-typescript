class NegociacaoController {
  private _inputData: HTMLInputElement
  private _inputQtd: HTMLInputElement
  private _inputValor: HTMLInputElement

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data')
    this._inputQtd = <HTMLInputElement>document.querySelector('#quantidade')
    this._inputValor = <HTMLInputElement>document.querySelector('#valor')
  }

  adicionar = (e: Event) => {
    e.preventDefault()
    const negociacao = new Negociacoes(
      new Date(this._inputData.value.replace(/-/g, ',')),
      parseInt(this._inputQtd.value),
      parseFloat(this._inputValor.value)
    )

    console.log(negociacao)
  }
}