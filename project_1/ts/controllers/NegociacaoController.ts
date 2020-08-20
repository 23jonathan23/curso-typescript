import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao } from '../models/index'
import { domInject, meuDecoratorDeClasse } from '../helpers/decorators/index'

@meuDecoratorDeClasse()
export class NegociacaoController {
  @domInject('#data')
  private _inputData: JQuery

  @domInject('#quantidade')
  private _inputQtd: JQuery

  @domInject('#valor')
  private _inputValor: JQuery
  private _negociacoes = new Negociacoes()
  private _negociacoesView = new NegociacoesView('#negociacoesView')
  private _mensagemView = new MensagemView('#mensagemView')

  constructor() {
    this._negociacoesView.update(this._negociacoes)
    this.adicionar = this.adicionar.bind(this)
    this.importaDados = this.importaDados.bind(this)
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

  importaDados() {
    function isOk(res: Response) {
      if (res.ok) {
        return res
      } else {
        throw new Error(res.statusText)
      }
    }

    fetch('http://localhost:8080/dados')
      .then(res => isOk(res))
      .then(res => res.json())
      .then((dados: any[]) => {
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
          .forEach(negociacao => this._negociacoes.adicionar(negociacao))

        this._negociacoesView.update(this._negociacoes)
      })
      .catch(err => console.log(err))
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