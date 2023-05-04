var count = 0 
var s = '#'
while (count < 7){
    console.log(s)
    s += '#'
    count++
}

var num = 01 
while(num <= 100){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz")
    }else if(num % 3 == 0){
        console.log("Fizz")
    } else if(num % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(num)
    }
    num++
}

var padrão 
var conta = 0

while (conta < 8){
    if(conta % 2 == 0){
        padrão = ''
        var c = 0
        while (c < 4){
            padrão += ' #'
            c++
        }
        console.log(padrão)
    }else{
        padrão = '# # # #'
        console.log(padrão)
    }
    conta++
}

