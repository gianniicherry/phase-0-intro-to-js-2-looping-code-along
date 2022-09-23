// Code your solutions in this file
// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const birthday = "birthday"
function writeCards(names,birthday){
    const messages = []
   for(let i=0; i < names.length; i++){
      messages.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    return messages
}
function countDown(){
    let countDown = 10
    while(countDown >= 0)
    console.log(countDown--)
}