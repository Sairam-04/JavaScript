let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () =>{
    let bill = Number(billTotalInput.value)
    let tip = Number(tipInput.value)/100
    let tipamount = bill*tip
    let total = bill + tipamount
    let perpersontotal = total/numberOfPeople
    perPersonTotal.innerText = `$${perpersontotal.toLocaleString('en-US')}`
}

const increasePeople = () =>{

    numberOfPeople+=1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () =>{
    
    if(numberOfPeople<=1){
        return
    }

    numberOfPeople-=1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}