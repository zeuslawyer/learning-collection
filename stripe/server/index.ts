import express from 'express'
import {PORT} from './constants'

const app: express.Application = express()

const stripe = require("stripe")("sk_test_wsxCfHvpkHLwIWMHuLkkSVTL00ikoeYopP");

app.use(require("body-parser").text());

app.get("/", (req , res) =>  {
  return res.send("Hello There!!!");

});

app.post("/charge", async (req, res) => {
  console.log(`/charge route hit....`);
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.post('/test', (req, res)=>{
  if (req.body === 'Zubin') {
   return res.json({status: 'ok', message: 'Well done, all working!'})
  }

  return res.status(500).end()
 

})


app.listen(PORT, () => {
  console.log(`server running on ${PORT}...`);
});
