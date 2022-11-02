//Esta es Una clausura o closure es una función que se devuelve de otra función

function fib() {
    let cont = 0;
    let salida = []

    function nacci() {
       
        if (salida.length <= 1){
            salida.push(cont)
            cont = cont + 1
        }else {
            cont = salida[salida.length - 1] +  salida[salida.length - 2]
            salida.push(cont)
        }
        console.log('numeros:' + salida);

    }

    return nacci
  }
  let fibCounter = fib();
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter()
  fibCounter()
  fibCounter()
