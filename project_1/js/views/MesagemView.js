class MesagemView {
    constructor(seletor) {
        this.update = (model) => {
            this._elemento.innerHTML = this.template(model);
        };
        this.template = (model) => {
            return `<p class="alert alert-info">${model}</p>`;
        };
        this._elemento = document.querySelector(seletor);
    }
}
