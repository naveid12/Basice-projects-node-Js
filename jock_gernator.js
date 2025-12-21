import https from 'https';
import chalk from 'chalk';

const getNav = () =>{
    const url = 'https://official-joke-api.appspot.com/random_joke';
    https.get(url, (respones) =>{
        let data = "";
        respones.on('data', (chunk) =>{
            data += chunk

        });
        respones.on('end', () =>{
            const joke = JSON.parse(data);
            //console.log(joke);
            console.log(`here is a randam joke ${joke.type}`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
        })

        respones.on('error', (err) =>{
            console.log(`Error feching the jock, ${err.message}`);
        })

    })
}

getNav();