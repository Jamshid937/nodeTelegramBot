const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const token = process.env.TOKEN
const {infoOption,portfoliOption,gameOption,againOption,portfoliItemOption1,portfoliItemOption2,portfoliItemOption3,portfoliItemOption4,portfoliItemOption5,portfoliItemOption6} = require("./options")
const bot = new TelegramBot(token, {
  polling: true
});


const obj = {}

const startGame = async chatId => {
  await bot.sendMessage(
    chatId,
    "Bot 0 dan 9 gacha son o`yladi, siz shu sonni topishga harakat qiling."
  )
  const randomNumber = Math.floor(Math.random() * 10)
  obj[chatId] = randomNumber
  return bot.sendMessage(
    chatId, "Tog`ri sonni toping", gameOption
  )
}
const bots = () => {
  bot.setMyCommands([{
      command: '/start',
      description: 'bot haqida malumot'
    },
    {
      command: '/info',
      description: 'lgwerogmewo'
    },
    {
      command: '/game',
      description: 'zerikanlar uchun'
    },
  ])
  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id;

    if (text === '/start') {
      return bot.sendMessage(
        chatId, `Assalomu Alaykum ${msg.from?.first_name} sizni botimizda korib turganimizdan xursandmiz`
      )
    }
    if (text === '/info') {
      return bot.sendMessage(
        chatId, 'Siz bu yerda men haqimda malumot olishingiz mumkun', infoOption
      )
    }

    if (text == '/game') {
     return startGame(chatId)
    }
    bot.sendMessage(chatId, 'Qoidalarga amal qiling')
  })
  bot.on('callback_query', async msg => {

    const data = msg.data
    const chatId = msg.message.chat.id;

    if (data === "Resume") {
      bot.sendDocument(chatId, './Resume.pdf')
    }
    if (data === "portfolio") {
      bot.sendMessage(chatId, 'Mening portfoliolarim, tanlang :)', portfoliOption)
    }
    if (data === "info") {
      bot.sendDocument(chatId)
    }
  })
  bot.on('callback_query', async msg => {

    const data = msg.data
    const chatId = msg.message.chat.id;


    if (data === 'PrimeTech') {
      bot.sendPhoto(chatId, './primeTech.jpg', portfoliItemOption1)
    }
    if (data === 'Nevropotolog') {
      bot.sendPhoto(chatId, './nevropotolog.jpg', portfoliItemOption2)
    }
    if (data === 'Rizvon_restaurant') {
      bot.sendPhoto(chatId, './rizvon.jpg', portfoliItemOption3)
    }
    if (data === 'Kompyuter_jixozlari') {
      bot.sendPhoto(chatId, './komp.jpg', portfoliItemOption4)
    }
    if (data === 'Floristman') {
      bot.sendPhoto(chatId, 'https://portfolio-psi-lyart-41.vercel.app/static/media/floristman.69c5b8c187d84b09d0ea.png', portfoliItemOption5)
    }
    if (data === 'Movie') {
      bot.sendPhoto(chatId, 'https://portfolio-psi-lyart-41.vercel.app/static/media/movieSearch.30a31cbcf505fab8396c.png', portfoliItemOption6)
    }
  })
  bot.on('callback_query', async msg => {

    const data = msg.data
    const chatId = msg.message.chat.id;

  if(data == '/again'){
  return startGame(chatId)
  }

    if (data == obj[chatId]) {
      return bot.sendMessage(chatId, `Tabriklaymiz siz tog'ri sonni tanladingiz, Bot ${obj[chatId]} sonini tanlagan edi`,againOption)
    } else {
      return bot.sendMessage(chatId, `Siz notog'ri sonni  tanladingiz,siz tanlagan son ${data}, Bot ${obj[chatId]} sonini tanlagan edi`, againOption)

    }

  })



}
bots()