const puppeteer = require('puppeteer');
const {types} = require("./utils/types");
const dc = require('./discord');

// list all the words here, will pick them randomly, doesn't matter how many!
var projectName = "oasis civ"
const words = [
    "just love this art",
    "sneak peaks are all Ws",
    "yooo",
    "the fam are working out ere",  
    "sup",
    "W gang",  
    "community will carry this",
    "wish i had nitro",
    "lfg",
    "LFGG",
    "lfffgggg",
    "we gonna secure the bag here",
    "Diamond handss",
    "community will rip apart the paperhands",
    "we are all gonna win here",
    "winners cant risk sleeping",
    "the W is being in here while having a chance at WL",
    "we still early",
    "love all you " + projectName,
    "this project is a diamond to diamond hand it",
    "verified blue chip",
    "blue chip, arguably a purlple chip haha",
    "fan art looking nice",
    "vibes are like chimes to me",
    "chat is vibrant",
    "sleeping on this is an L",
    "paperhands getting noscoped",
    "Im going crazy on secondary",
    "i love my brothers in arms out here",
    "sneak peaks are too sick",
    "Dont overwork it lads",
    "pushing p",
    "snow white and the 7 " + projectName,
    projectName + " train incoming",
    projectName + " are Cool",,
    "meeeehh, new goated project incoming",
    "We all in team " + projectName + " now",
    projectName.charAt(0).toUpperCase() + "" +  projectName.charAt(1).toUpperCase() + "AGMI", 

    "Pushin " + projectName.charAt(0).toUpperCase() + "" + projectName.charAt(1).toUpperCase(), 
    projectName + " gonna win",  
    projectName + " holders are elite",
    projectName + " gang",
    "we need a " + projectName + " metaverse fr",
    projectName + " are mooning",
    "we dont need wings anymore since we can mint " + projectName,
    projectName + " could do really well",
    projectName + " family",
    "i want a " + projectName + " metaverse",
    projectName + "s are gonna storm the market", 
    "im a " + projectName + " IRL",
    "everyone gonna get what they deserve here",
    "WL will come folks",
    "ukrainians are so resilient",
    "shout out to all those dealing with depression",
    "holding is the best strat for projects like this",
    "diamond handss",
    "HODL " + projectName,
    "reminder to SLEEP if need be",
    "dont forget to drink ya water guys",
    "watch ur health first fellas",
    "NFT taking over ma life",
    "I am employed as an NFT trader",
    "we all making it out the hood haha", 
    "when u vibe it aint really a grind no more",  
    "we going straight for mars",  
    "heading to mars at this rate",  
    projectName + " is gonna fly",
    "cant wait for mint day",
    "W",
    "no risks here and high rewards",
    "EZ bluechip",
    "getting lost in the " + projectName + "sauce",
    "we taking over this space",  
    "we killing it",

    projectName + " to the mooon",
    "i wanna see the epics of these", 
    "road to level 20",
    "top 50 here is a must", 
    "im catching feelings here haha",
    "we all vikings out here",
    "NFT brings together folk from the whole world",  
    
    projectName + " chat is vibrant",
    "blue chip project ftw",
    "this would make for real nice pfps",
    "keep up the grind",   
    "can never stop now",
    "the grind getting tiring",
    "art is cleann", 
    "Quitting isnt part of my vocabulary",
    "love seeing the vibes on here",
    "i aint gon quit",
    "grind and vibe",
    "consistency my bros",
    "thou paperhands shall perish",
    "down with the paperhands",
    "imagine a mythic one of these",
    "epics and above gonna be crazy for " + projectName,
    "i need a legendary " + projectName,
    "aint easy balancing NFTs with life",
    "NFT full time aint healthy",
    "NFT life aint easy",
    "love this project",
    "sneak peaks lookin fire",
    "staking for this is gonna be strong"
/*
    "держатели хайроллеров чады", 
    "мои руки продаются бриллиантами", 
    "напоминание пить воду",       
    "не забудьте увлажнить ребят",
    "полет на луну",     */
]
let logCount = 0;

const BASE_URL = 'https://discord.com/channels/920062509346598942/920062510634246194';
// change this & enter the channel url
const discord = {
    browser: null,
    page: null,

    initialize: async () => {

        discord.browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: [
                '--start-maximized'
            ]
        });

        discord.page = await discord.browser.newPage();

    },

    /**
     * username and password
     * @param {string} username
     * @param {string} password
     * @return {Promise<void>}
     */

    login: async (username, password) => {
        
    

        await discord.page.goto(BASE_URL, {
            waitUntil: 'networkidle2'
        })
        await discord.page.type('input[name="email"]', username, {
            delay: 100
        });

        await discord.page.type('input[name="password"]', password, {
            delay: 110
        });
       // let loginButton = await discord.page.$x('//a[contains(., "Login")]');
        await discord.page.waitFor(50)
        /* Click on login url button */
        await discord.page.keyboard.press('Enter');
        

        await discord.page.waitFor(100);

        /* username and password */

        

        /* clicking on login button */

       

     //   await discord.page.waitFor(10000);
      //  await discord.page.waitFor('//div[contains(text(), "Friends")]')
      // await discord.page.waitFor(100);

    },
    

    /** Bull SI: 919886516707270717   Bull CI: 932935795818524682
     * Enter server id and channel urk
     * @param { string } serverID  
     * @param { string } channelID
     * @param { number } delay
     * @return {Promise<void>}
     */
  
    likeChannelProcess: async (serverID, channelID, delay= 1) => {
            serverID = "943213927238631445";
            channelID = "943213927708368970";
            types('string', serverID);
            types('string', channelID);
            const CHANNELS_URL = `https://discord.com/channels/${serverID}/${channelID}`

          //  await discord.page.goto(CHANNELS_URL, {

          //  });

            await discord.page.waitFor(100000);

         /*   async function initalStart () {
                await discord.page.type('span[data-slate-object="text"]', "auto typer started.", {
                    delay: 100
                });

                await discord.page.keyboard.press('Enter')

                console.debug('Auto typer started ' + new Date() )

            } */

           // await initalStart();

       /*    client.on("message", (message) => {
            if (message.content === "Server active") {
                message.channel.send(`I am Active in ${client.guilds.cache.size} Servers`);
            }
            if (message.content === "Server size") {
                message.channel.send(`I am Active in ${client.guilds.cache.size} Servers`);
            }
            if (message.content === "Server ammount") {
                message.channel.send(`I am Active in ${client.guilds.cache.size} Servers`);
            }
        }); */
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }
          

            var tempArrayOne = [];
            tempArrayOne = shuffle(words);
            var int = 0;
            async function randomWord () {
                if (int > tempArrayOne.length-1){
                    newShuf = shuffle(words);
                    tempArrayOne = newShuf
                    int = 1;
                }
                
                await discord.page.type('span[data-slate-node="text"]', tempArrayOne[int], {
                delay: 105 });
                await discord.page.keyboard.press('Enter');
                logCount++;
                int++;
    
                    
                
            }
            function randomIntFromInterval(min, max) { 
                return (Math.floor(Math.random() * (max - min + 1) + min))
              }    
            
                //tmpArrayOne.(rndMessage)
                
            /*    if (duplicatePrevent.length <= 5) {
                    for (i=0; i<=duplicatePrevent.length; i++) {
                        if (duplicatePrevent[i] == rndMessage) {
                            rndMessage = words[Math.floor(Math.random() * words.length)]
                            if (duplicatePrevent[i] == rndMessage) {
                                rndMessage = words[Math.floor(Math.random() * words.length)]
                            }
                        }
                    }
                    duplicatePrevent.push(rndMessage);
                }
                else {
                    for (i=0; i<=duplicatePrevent.length; i++) {
                        if (duplicatePrevent[i] == rndMessage) {
                            rndMessage = words[Math.floor(Math.random() * words.length)]
                            if (duplicatePrevent[i] == rndMessage) {
                                rndMessage = words[Math.floor(Math.random() * words.length)]
                            }
                            }
                    
                    }
                    duplicatePrevent.pop();
                    duplicatePrevent.push(rndMessage);    
                    
                } */
           /*     await discord.page.type('span[data-slate-object="text"]', rndMessage, {
                    delay: 100
                });

                await discord.page.keyboard.press('Enter')

                logCount++ */

                // this logs the time the message was sent at and the total message count
                
            

            // change the first number for minutes
            // 3 * 60 * 1000 = 180000ms === 3 minutes
            
            
            
            const rndBreak = randomIntFromInterval(2, 3)
            setInterval(randomWord, rndBreak * 60 * 1000) 

    }
}

module.exports = discord;

     // const duplicatePrevent = [];
           // async function randomWord () {
           //     const random = words[Math.floor(Math.random() * words.length)]
              /*  var rndMessage = random;
                if (duplicatePrevent.length <= 30) {
                    for (i=0; i<=duplicatePrevent.length; i++) {
                        if (duplicatePrevent[i] == rndMessage) {
                            randomWord();
                        }
                    }
                    duplicatePrevent.push(rndMessage);
                }
                else {
                    for (i=0; i<=duplicatePrevent.length; i++) {
                        if (duplicatePrevent[i] == rndMessage) {
                            randomWord();
                        }
                    }
                    duplicatePrevent.pop();
                    duplicatePrevent.push(rndMessage);    
                    
                }
                */