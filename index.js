const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
        res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
        res.send(new Date());
});
app.listen(3000, () => {
        console.log(chalk.red.bold('The Bot Is Ready.'))
});

const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
 ws: {properties: { $browser:"Discord iOS" }
      },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "•";

client.on('ready', () => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot User name : ${client.user.username}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
 client.user.setActivity(`${prefix}help`,  { type: 'online' })  
});
client.login(process.env.token).catch((err) => {
   console.log(err.message)
});

// ========================== Const ======================== \\
const autoTaxChannels = ["1179525114333773885", "1142444264882708591"]; // ايدي الات شانل الاوتو تاكس

// ==================== Auto Tax ====================== \\
// Function to generate server invite link
const generateServerInviteLink = (guild) => {
  return `https://discord.gg/${guild.inviteCode}`;
};
client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if (autoTaxChannels.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)

  const serverInviteLink1 = "https://discord.gg/wladalg";
  const serverInviteLink2 = "https://discord.gg/wladalgshop";
    let Taxembed = new MessageEmbed()
       
     .setAuthor({
  name: "TAX CALCULATOR",
  iconURL: client.user.avatarURL({ dynamic: true }),
})
      .setImage("https://cdn.discordapp.com/attachments/1125755648789970975/1176457094656966717/standard-1.gif?ex=65c1fe8c&is=65af898c&hm=235baeaefbd483103636ff65c3624b3d655451641068af5d1427ec8d34de48f9&") // Replace with the URL of the image you want to display
      
.addFields([

  {
    name: `الضريبة : `, 
    value: `${tax2}`
  },
  {
    name: `ضريبة الوسيط : `, 
    value: `${tax3}`
  },
  {
  name: `المبلغ + ضريبه بروبوت : `,
  value: `${tax}`
  },
  {
    name: `المبلغ + ضريبه بروبوت و الوسيط : `, 
    value: `${tax4}`
  },
   {
          name: `WLAD ALG SAMP :`,
          value: `[SA-MP MOBILE سرفز اللعب و المتعة .](${serverInviteLink1})`,
        },
  {
    name: `WLAD ALG SHOP :`,
    value: `[اقوى سرفر شوب جزائري.](${serverInviteLink2})`,
  },
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
message.reply({embeds: [Taxembed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// ================= Cmd Tax ================ \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
   console.log(err.message)
   });
    
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    
    
    let embed = new MessageEmbed()
      
.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `المبلغ بالضريبه : `,
    value: `${tax}`
},
   
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// ========================================================== \\