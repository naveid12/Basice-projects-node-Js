import https from "https";
import readline from "readline";
import chalk from "chalk";
import { response } from "express";

// cli ma kise cheez ko read ya werie kar skao tu creatinterface 
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apiKey = '9e5fc9f2795890811ee3b0d8'; // replace with ythe real api key
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD `;
const covertCurrency = (amount, rate) =>{
    return (amount*rate).toFixed(2);
}
https.get(url, (response) =>{
    let data = "";
    response.on('data', (chunk) =>{
        data += chunk;

    });

    response.on('end', () =>{
        const reats = JSON.parse(data).conversion_rates;

        rl.question('Enter the amount is USD: ' , (amount) =>{
            rl.question('Enter the target currency (e.g , INR ,EUR, NPR, PKR):' , (currency) =>{
                const rate = reats[currency.toUpperCase()];
                console.log(amount,rate,currency);
                if(rate){
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${covertCurrency(amount,rate)} ${currency}`));
                }else{
                    console.log(`Invalied Currency code `);
                }
                rl.close()
            })
        })
    })
})
