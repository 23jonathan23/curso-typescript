class Negociacao {
    constructor(_data, _qtd, _valor) {
        this._data = _data;
        this._qtd = _qtd;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get qtd() {
        return this._qtd;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._qtd * this._valor;
    }
}
