class NegociacaoController {
    constructor() {
        this.adicionar = (e) => {
            e.preventDefault();
            const negociacao = new Negociacoes(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQtd.value), parseFloat(this._inputValor.value));
            console.log(negociacao);
        };
        this._inputData = document.querySelector('#data');
        this._inputQtd = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
}
