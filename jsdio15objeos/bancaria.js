
/*// tudo oq a gente for mandar no momento da ciração é o construtor que faz
class ContaBancaria {
    constructor(agencia, numero, tipo,cartaoCredito){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.cartaoCredito = cartaoCredito;
        this._saldo = 0;
    }
    // o get vai pegar o saldo e o set vai determinar o valor do saldo, e o get n tem parametros
    get saldo(){
        return _saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > _saldo){
            return "operação negada";
        }
        this._saldo = this._saldo - valor;
        return this_saldo
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

// o extends liga a classe filha(contacorrente) a classe pai(contabancaria)
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero,cartaoCredito)
    {
    super(agencia, numero);
    this.tipo ='corrente';
    this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this.cartaoCredito;
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria{
    constructor(agencia, numero,saldo,cartaoCredito)
    {
    super(agencia, numero);
    this.tipo ='poupança';
    
    }

    
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero,cartaoCredito)
    {
    super(agencia, numero,  saldo);
    this.tipo ='universitaria';
    
    }

    sacar(valor){
        if(valor>500){
            return 'operação negada!'
        }

        this._saldo = this._saldo - valor;
    }

    
}
*/

// tudo oq a gente for mandar no momento da ciração é o construtor que faz
class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}
// o extends liga a classe filha(contacorrente) a classe pai(contabancaria)
class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	
 // o get vai pegar o saldo e o set vai determinar o valor do saldo, e o get n tem parametros
	get cartaoCredito() {
		return this._cartaoCredito;
	}set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}







