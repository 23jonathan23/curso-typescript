import { NegociacoesView, MensagemView } from '../views/index'
import { Negociacoes, Negociacao } from '../models/index'
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index'
import { NegociacaoServices } from '../services/index'
import { imprime } from '../helpers/index'

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

  private _service = new NegociacaoServices()

  constructor() {
    this._negociacoesView.update(this._negociacoes)
    this.adicionar = this.adicionar.bind(this)
    this.importaDados = this.importaDados.bind(this)
  }

  @throttle()
  adicionar(): void {

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

    imprime(negociacao, this._negociacoes)

    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update('Negociação adicionada com sucesso!')
  }

  private _ehDiaUtil(data: Date): boolean {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo
  }

  @throttle()
  async importaDados() {

    function isOk(res: Response) {
      if (res.ok) {
        return res
      } else {
        throw new Error(res.statusText)
      }
    }

    try {
      const negociacoesParaImportar =
        await this._service.obterNecociacoes(isOk).then((resp: Negociacao[]) => resp)

      const negociacoesJaImportar = this._negociacoes.paraArray()

      negociacoesParaImportar
        .filter(negociacao =>
          !negociacoesJaImportar.some(jaImportada => negociacao.ehIgual(jaImportada))
        )
        .forEach(negociacao => this._negociacoes.adicionar(negociacao))

      this._negociacoesView.update(this._negociacoes)

    } catch (err) {
      this._mensagemView.update(err.message)
    }


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