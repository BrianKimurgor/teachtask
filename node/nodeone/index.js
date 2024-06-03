//emit the message ]
const EventEmitter = require("events")
const logEvent = require ('./LogEvents')

const myemitter = new EventEmitter()

myemitter.on('log', (message) =>{
    logEvent(message)
})

setTimeout(()=> myemitter.emit('log', 'new message has been logged'),2000)
