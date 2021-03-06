System.register(["./View", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, index_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
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
                <td>${index_1.formateDate(negociacao.data)}</td>
                <td>${negociacao.qtd}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
              </tr>`).join('')}
          </tbody>
  
          <tfoot>
          </tfoot>
        </table>
      `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
