let msg = "Counting the clicks"
let msgdom = document.getElementById('title')
msgdom.innerHTML = `<p>${msg}</p>`
msgdom.style.color = 'blue'
msgdom.style.backgroundColor = 'yellow'



const squares = document.querySelectorAll(".color-square")
const timesClicked = {'red':0, 'blue':0, 'green':0}
for(let i=0;i<squares.length;i++){
    squares[i].onclick = () =>{
        timesClicked[squares[i].value]+=1
        squares[i].innerText = timesClicked[squares[i].value]        
        // console.log(squares[i].value)
    }
}

function clearscores(){
    timesClicked.red = 0
    timesClicked.blue = 0
    timesClicked.green = 0
    squares.forEach(square =>{
        square.innerText = ''
    })
}

const cl = document.getElementById('clear')
cl.onclick = () => clearscores()