import { View } from './View'
import { Negociacoes } from '../models/Negociacoes'
import { formateDate } from '../helpers/index'

export class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
            </tr>
          </thead>
  
          <tbody>
            ${model.paraArray().map(negociacao => `<tr>
                <td>${formateDate(negociacao.data)}</td>
                <td>${negociacao.qtd}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
              </tr>` ).join('')}
          </tbody>
  
          <tfoot>
          </tfoot>
        </table>
      `
  }
}