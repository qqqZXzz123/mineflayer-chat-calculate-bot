const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'ngrief.su',
  port: 25565,
  username: 'chatbot228',

  version: '1.12.2'
})




function goserver() {
	bot.chat("/server5")
}


function obrezka (message2) {
	console.log(message2)
	const obrezan = message2.slice(14)
	console.log(obrezan)
	console.log(eval(obrezan))
	const reshon = eval(obrezan)
	const vieban = parseInt(reshon)
	bot.chat(String(vieban))
}


function mes (message2) {
	console.log('FUNKCION' + message2)
	if (String(message2).startsWith('   Решите пример: ')) {
	obrezka(String(message2))
	console.log('WOOOOOOOOOOOOOOOOOOO')
	}
}

bot.on('message', (position, jsonMsg) => {
	console.log(jsonMsg + ' --- ' + position)
	const massage2 = [position]
	mes(massage2)
})

bot.once("spawn", () => {
	goserver()
	setInterval(goserver, 60000);
})
