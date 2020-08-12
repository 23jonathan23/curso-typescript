class NegociacaoController {
  private _inputData: HTMLInputElement
  private _inputQtd: HTMLInputElement
  private _inputValor: HTMLInputElement
  private _negociacoes = new Negociacoes()
  private _negociacoesView = new NegociacoesView('#negociacoesView')

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data')
    this._inputQtd = <HTMLInputElement>document.querySelector('#quantidade')
    this._inputValor = <HTMLInputElement>document.querySelector('#valor')
    this._negociacoesView.update(this._negociacoes)
  }

  adicionar = (e: Event) => {
    e.preventDefault()
    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ',')),
      parseInt(this._inputQtd.value),
      parseFloat(this._inputValor.value)
    )
    this._negociacoes.adicionar(negociacao)
    this._negociacoesView.update(this._negociacoes)
  }
}