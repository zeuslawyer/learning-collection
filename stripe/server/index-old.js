const app = require("express")();

// @ts-ignore
const stripe = require("stripe")("sk_test_wsxCfHvpkHLwIWMHuLkkSVTL00ikoeYopP");

app.use(require("body-parser").text());

app.get("/", (req, res) => res.send("Hello World!!!"));

app.post('/charge', (req, res)=>{
    console.log("post requested on /charge")
})

app.listen(4000, () => {
  console.log("server running...");
});
