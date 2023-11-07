export class Negociacao {

    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number, valor: number) {

    //     this._data = data;
    //     this._quantidade = quantidade
    //     this._valor = valor

    // }

    // Ao utilizar o private direto no construtor ele cria os parametros diretamente, faz a mesma coisa que o código comentado acima ^
    constructor(

        private readonly _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number

    ) {}

    // Com a propriedade readonly todos os parametros funcionam como getters, podem apenas serem lidos. Assim como o código comentado abaixo v

    // Caso exista alguma lógica durante a leitura da propriedade é recomendado utilizar do metodo getter

    // get data(): Date {

    //     return this._data

    // }

    // get quantidade(): number {

    //     return this._quantidade

    // }

    // get valor(): number {

    //     return this._valor

    // }

    // Criada uma cópia da data para que a interface Date() não seja alterada através de setters padrões
    get data(): Date {

        const data = new Date(this._data.getTime())

        return data

    }

    get volume(): number {

        return this.quantidade * this.valor

    }

}