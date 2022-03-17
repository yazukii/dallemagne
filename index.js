const { Client, Intents } = require('discord.js');

const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

let swearNum = 1;

let swearLength = 0;

let swearPercent = 0;

let dick = [
    "==",
    "===",
    "====",
    "=====",
    "======",
    "=======",
    "========",
    "=========",
    "==========",
    "===========",
    "============",
    "=============",
    "==============",
    "===============",
    "================",
    "=================",
    "==================",
    "===================",
    "====================",
    "=====================",
    "======================",
    "=======================",
    "========================",
    "=========================",
    "==========================",
    "===========================",
    "============================",
    "=============================",
    "==============================",
    "==============================="
]

let swears = ["That's a bit too kitsch.", 
"That's too manga for my taste.", 
"You're talking too much, you should shut up.",
"Ça ressemble à un stip teaser des années 80 cette merde",
"Moi, en te voyant, j'ai l'impression que tu es un peu un pervers",
"Mmmh... j'aime pas trop. Recommence tout",
"U a stupid bitch",
"It seems that you are 1 minute late, that will be a late arrival on my list.",
"Looks like a tit.",
"Shut up! Stop talking now!",
"You're supposed to be a professional, not a dumbass!",
"Be more creative than that bruh!!!",
"Not professional enough for my tastes (It's shit)",
"Are you done talking? How about you share what you have to say with the class.",
"Stop looking at your screen, you look braindead.",
"Not good enough, try again.",
"This is not serious at all. I'll even say that it's bad (shit).",
"How about you get serious and stop talking about your stupid topic.",
"You sound too selfish.",
"We'll see that with Judith Behard.",
"That sounds sexual lol.",
"That sounds dumb, I don't know what to tell you to be honest.",
"Your face isn't professional, how about you fix it.",
"Your life is NOTHING. You serve ZERO purpose. You should kill yourself NOW.",
"And give somebody else a piece of that oxygen, in ozone layer, that’s covered up so that we can breathe inside this blue trapped bubble. Because what are you here for? To worship me? Kill yourself! I mean that with a hundred percent with a thousand percent.",
"Too many CM, you are worthless.",
"come back to me when you'll have a CM",
"You'll fail your year, 99%",
"Guess who's giving you your CFC?!",
"No CFC???",
"grow the fuck up",
"You're not a kid anymore, you should stop saying dumb things, be smarter, be an adult.",
"Why don't you ask your mother?"
]

client.once('ready', () => {
    console.log('Bot is online');
});

client.on('messageCreate', (message) =>{
    swearChances = (max, min) => {
        swearPercent = Math.floor(Math.random() * (max - min) ) + min;
        return swearPercent
    }
    swearChances(5, 0)

    if (message.author.bot) return

    else if(swearPercent === 1 || message.content == 'sex') {

        swearCount = () => {
            swearLength = swears.length
            return swearLength
        }
        swearCount()

        randomSwear = (min, max) => {
            swearNum = Math.floor(Math.random() * (max - min) ) + min;
            return swearNum
        }
    
        randomSwear(0, swearLength + 1)

        message.channel.sendTyping();
        message.channel.send(`${swears[swearNum]}`);
    } else if (message.content == 'dick length') {

        swearCount = () => {
            swearLength = swears.length
            return swearLength
        }
        swearCount()

        randomSwear = (min, max) => {
            swearNum = Math.floor(Math.random() * (max - min) ) + min;
            return swearNum
        }
    
        randomSwear(0, swearLength + 1)

        message.channel.sendTyping();
        message.channel.send(`8${dick[swearNum]}D`);
    } else return
});

client.login('OTUwMzIzNDI1NjU2ODU2NTc2.YiXPqA.Twjqlr_Y-wFGve31zvZ4Bw2sXCo');