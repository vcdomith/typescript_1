import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //Negociacao[] === Array<Negociacao> são a mesma coisa
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this.negociacoes.push(negociacao)

    }
    
    //ReadonlyArray<Negociacao> === readonly Negociacao[] são a mesma coisa
    lista(): readonly Negociacao[] {

        return this.negociacoes

    }
}
