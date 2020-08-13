class NegociacaoController {
  private _inputData: JQuery
  private _inputQtd: JQuery
  private _inputValor: JQuery
  private _negociacoes = new Negociacoes()
  private _negociacoesView = new NegociacoesView('#negociacoesView')
  private _mensagemView = new MensagemView('#mensagemView')

  constructor() {
    this._inputData = $('#data')
    this._inputQtd = $('#quantidade')
    this._inputValor = $('#valor')
    this._negociacoesView.update(this._negociacoes)
  }

  adicionar = (e: Event) => {
    e.preventDefault()
    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQtd.val()),
      parseFloat(this._inputValor.val())
    )
    this._negociacoes.adicionar(negociacao)
    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update('Negociação adicionada com sucesso!')
  }
}