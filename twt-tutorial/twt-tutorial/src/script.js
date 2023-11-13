// document.write(document.getElementById('header').innerHTML)

// document.getElementById('input').value = 'hello'

function add(a,b){
  console.log('add')
  return a+b
}

console.log(add(5,5))

function red(){
  console.log('red button clicked')
   document.getElementById('header').innerHTML = 'RED'
  document.getElementById('header').style.color = 'red'

}
function blue(){
  console.log('blue button cliked')
  document.getElementById('header').innerHTML = 'BLUE'
  document.getElementById('header').style.color = 'blue'
}

function pressed(){
  var input = document.getElementById('input').value
  document.getElementById('clickHeader').innerHTML = input
}

var blueCheckbox = document.getElementById('blue')

if (blueCheckbox.checked) {
  console.log('blue checkbox is checked')
}

/*
var name = prompt('What is your name?')
alert('Hello '+name+'!')
*/