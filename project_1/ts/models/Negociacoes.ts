import { Negociacao } from './Negociacao'
import { logarTempoDeExecucao } from '../helpers/decorators/index'

export class Negociacoes {
  private _negociacoes: Negociacao[] = []

  @logarTempoDeExecucao(true)
  adicionar(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao)
  }

  @logarTempoDeExecucao(true)
  paraArray(): Negociacao[] {
    return [...this._negociacoes]
  }
}