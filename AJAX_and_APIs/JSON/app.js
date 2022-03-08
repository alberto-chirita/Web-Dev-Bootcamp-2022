// THIS IS A STRING OF JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"38390.27975726","volume":"13075.43000891","change":"-350.69326239"},"timestamp":1646756944,"success":true,"error":""}`;
const parsedData = JSON.parse(data);

const dog = { breed: "lab", color: "black", isAlive: true, owner: undefined };
const stringifiedDog = JSON.stringify(dog); // '{"breed":"lab","color":"black","isAlive":true}'
