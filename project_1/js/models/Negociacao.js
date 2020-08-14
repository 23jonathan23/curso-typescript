System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, qtd, valor) {
                    this.data = data;
                    this.qtd = qtd;
                    this.valor = valor;
                }
                get volume() {
                    return this.qtd * this.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
