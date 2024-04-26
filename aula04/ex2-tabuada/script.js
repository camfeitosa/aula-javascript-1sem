let n1 = document.querySelector('input#n1')
let res = document.querySelector('#resultado')

function tab(){
    for (let index = 1; index <= 10 ; index++) {
       console.log(`${n1.valueAsNumber} x ${index} = ${n1.valueAsNumber * index}`) 

       res.innerHTML= `<div>${n1.valueAsNumber} x ${index} = ${n1.valueAsNumber * index}</div>`
    }

    // console.log(n1.valueAsNumber)
}
