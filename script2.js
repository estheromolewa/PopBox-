const textI =  document.querySelector('.i')
const textYou = document.querySelector('.you')
const textWe =  document.querySelector('.we')
const container = document.querySelector('.con')
const closeBtn = document.querySelector('.close-show-div')


// FUNCTION TO HIDE
function noDisplay(parameter){
    document.querySelector(parameter).style.display = 'none'
}
// FUNCTION TO DISPLAY THE EVENT CLICKED
function display(parameter){
    document.querySelector(parameter).style.display = 'inline'
}

// the display button for I am to display
textI.addEventListener( 'click', function(){
    document.body.style.backgroundColor = '#FDBF60'
    container.style.display = 'block'
    display('.i-am')
    noDisplay('.you-are')
    noDisplay('.we-are')
})

// the display button for You are to display
textYou.addEventListener( 'click', function(){
   document.body.style.backgroundColor = '#7F27FF'
   container.style.display = 'block'
    display('.you-are')
    noDisplay('.i-am')
    noDisplay('.we-are')
})

// the display button for WE are to display
textWe.addEventListener( 'click', function(){
    document.body.style.backgroundColor = '#9F70FD'
    container.style.display = 'block'
    display('.we-are')
    noDisplay('.you-are')
    noDisplay('.i-am')
})

// the close button 
closeBtn.addEventListener('click', function(){
    container.style.display = 'none'
} )

// using KeyboardEvent to close the container
document.addEventListener('keypress', function(event){
    if (event['key'] === 'Enter')  container.style.display = 'none'
})





