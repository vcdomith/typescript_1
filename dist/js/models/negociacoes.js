export class Negociacoes {
    constructor() {
        //Negociacao[] === Array<Negociacao> são a mesma coisa
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao> === readonly Negociacao[] são a mesma coisa
    lista() {
        return this.negociacoes;
    }
}
