class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this.adicionar = (e) => {
            e.preventDefault();
            const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQtd.value), parseFloat(this._inputValor.value));
            this._negociacoes.adicionar(negociacao);
            this._negociacoesView.update(this._negociacoes);
        };
        this._inputData = document.querySelector('#data');
        this._inputQtd = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
}
