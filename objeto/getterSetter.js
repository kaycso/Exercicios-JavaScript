const o = {
    _valor: 1, // convenção para que o atributo não seja diretamente alterado (porém não impede)
    get valor() { return this._valor },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}