import express from 'express';
import { getNumberInFull } from './inFull';

const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.json({status: 'Server is running!'})
})

app.get('/:number', (req, res) => {
  const number = req.params.number;
  if(isNaN(number)){
    return res.json({ message: 'invalid number'}) 
  }
  const numberInFull = getNumberInFull(number);
  return res.json({ extenso: numberInFull})
})

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
})
