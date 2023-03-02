// Asynchronous Programming

// When you fetch any data from api request it returns you the promise
const order = () => console.log('order is ready') 

const promise1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random()*2)]
        isReady ? resolve("soup is ready") : reject("No soup today")
    }, 2000)
})

// console.log(
//     promise1.
//     then(success => console.log({success}))
//     .catch(error => console.log({error}))
// )


// console.log('fetch:',
// fetch('https://dog.ceo/api/breeds/image/random')//promise
// .then(response =>  response.json()) //promise
// .then(data => console.log(data)) //real data
// ) 

// ASYNC / AWAIT

// Any request the function should be async
// Rules for using async/await
// 1: Must need to create a function
// 2: Use the keyword async and word await

const getDog = async() =>{
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}


const getSoup = async() =>{
    const data = {rating:null, tip:null, pay:null, review:null}
    try{
        const soup = await promise1
        data.rating = 5
        data.tip = .2
        data.pay = 10
        data.review = 5
        return data
    }catch(error){
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
}

getSoup().then(val => console.log(val)) // it returns a promise
