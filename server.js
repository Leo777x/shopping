//NodeJs backenti qurmoqchi bo'lsak Expres NestJs bor ekan
const express = require('express')
const app = express()

// Traditional Get API 
// Tayyor ovqatni response sifatida  olib chiqib beradi
app.get('/', (req, res) => { 
  res.send('<h1>Hello World!</h1>')
})

// Rest  API
//esa maxsulotlarni response sifatida olib chiqib beradi,  Frontenda ovqat tayorlanadi
app.get('/rest', (req, res) => {
  res.json({name: "LEO", age: 21, group: "MIT"})
})
app.listen(3000, () => {
  console.log(`Backend Server is running on port 3000`)
})
