class Negociacoes {
    constructor() {
        this._negociacoes = [];
        this.adicionar = (negociacao) => {
            this._negociacoes.push(negociacao);
        };
        this.paraArray = () => {
            return [...this._negociacoes];
        };
    }
}
