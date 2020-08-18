import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao } from '../models/index'

export class NegociacaoController {
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
    this.adicionar = this.adicionar.bind(this)
  }

  adicionar(e: Event): void {
    e.preventDefault()

    const data = new Date(this._inputData.val().replace(/-/g, ','))

    if (!this._ehDiaUtil(data)) {
      this._mensagemView.update('Somente negociações em dias úteis, por favor!')
      return
    }

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, ',')),
      parseInt(this._inputQtd.val()),
      parseFloat(this._inputValor.val())
    )
    this._negociacoes.adicionar(negociacao)
    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update('Negociação adicionada com sucesso!')
  }

  private _ehDiaUtil(data: Date): boolean {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}