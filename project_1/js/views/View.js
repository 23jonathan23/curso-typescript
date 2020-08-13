class View {
    constructor(seletor) {
        this.update = (model) => {
            this._elemento.html(this.template(model));
        };
        this._elemento = $(seletor);
    }
}
