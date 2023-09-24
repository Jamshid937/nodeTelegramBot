module.exports = {
     gameOption: {
        reply_markup: {
          inline_keyboard: [
            [{
                text: "1",
                callback_data: "1"
              },
              {
                text: "2",
                callback_data: "2"
              },
              {
                text: "3",
                callback_data: "3"
              },
            ],
            [{
                text: "4",
                callback_data: "4"
              },
              {
                text: "5",
                callback_data: "5"
              },
              {
                text: "6",
                callback_data: "6"
              },
            ],
            [{
                text: "7",
                callback_data: "7"
              },
              {
                text: "8",
                callback_data: "8"
              },
              {
                text: "9",
                callback_data: "9"
              },
            ],
            [{
              text: "0",
              callback_data: "0"
            }]
          ]
        }
      },
       againOption: {
        reply_markup: {
         inline_keyboard: [
           [
            {
             text:"Qaytadan boshlash",
             callback_data:`/again`
            }
           ]
         ]
       }
       } ,
        portfoliOption : {
        reply_markup: {
          inline_keyboard: [
            [{
                text: "PrimeTech",
                callback_data: "PrimeTech",
              },
              {
                text: "Nevropotolog",
                callback_data: "Nevropotolog",
              }
            ],
            [{
                text: "Rizvon restaurant",
                callback_data: "Rizvon_restaurant",
              },
              {
                text: "Kompyuter jixozlari",
                callback_data: "Kompyuter_jixozlari",
              }
            ],
            [{
                text: "Floristman",
                callback_data: "Floristman",
              },
              {
                text: "Movie",
                callback_data: "Movie",
              }
            ],
          ]
        }
      } ,  
       infoOption: {
        reply_markup: {
          inline_keyboard: [
            [{
                text: "Resume",
                callback_data: "Resume"
              },
              {
                text: "Portfolio",
                callback_data: "portfolio"
              }
            ],
            [{
              text: "Info",
              callback_data: "info"
            }]
          ]
        }
      },
       portfoliItemOption1 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "PrimeTech",
              url: "https://trade.primetechgroup.uz/",
            }]
          ]
        }
      },
       portfoliItemOption2 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "Nevropotolog",
              url: "https://meditsina.vercel.app/",
            }]
          ]
        }
      },
       portfoliItemOption3 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "Rizvon restaurant",
              url: "https://rizvon.vercel.app/",
            }]
          ]
        }
      },
       portfoliItemOption4 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "Kompyuter Jixozlari",
              url: "https://komp-six.vercel.app/",
            }]
          ]
        }
      },
       portfoliItemOption5 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "Floristman",
              url: "https://floristman-app-121p-p8r4l9nk0-jamshid937-s-team.vercel.app/",
            }]
          ]
        }
      },
       portfoliItemOption6 : {
        reply_markup: {
          inline_keyboard: [
            [{
              text: "Movie",
              url: "https://movie-api-search-j.netlify.app/",
            }]
          ]
        }
      }
}