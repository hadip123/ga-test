const express = require('express')

const app = express()

app.get('/' , (req, res) => {
	 res.send(`
		  <h1>This is my website</h1>
	 `)
})


console.log('COUNT')
// app.listen(3000, () => {
// 	 console.log('Listening')
// })
