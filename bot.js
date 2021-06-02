const { Telegraf } = require('telegraf')
const HttpsProxyAgent = require('https-proxy-agent');
//const { text } = require('telegraf/typings/button');


//token = '1888149585:AAGcBMB_tyOAhM3WY4kC1RR0G1BDX20PCR4'; Este token es para el bot jccabrera
token = '1836957884:AAH-MU_n-K2gUyyhgDhVjOqO36Gxu2v6sSQ';

//process.env.http_proxy="http://darkness:puta2017@[192.168.0.1]:3128/"
//process.env.https_proxy="http://darkness:puta2017@[192.168.0.1]:3128/"

///https-proxy="http://darkness:puta2017@[192.168.0.1]:3128/"

/*const bot = new Telegraf(token, {
    telegram: {
      agent: new HttpsProxyAgent('http://darkness:puta2017@[192.168.0.1]:3128/')
    }
  });*/

const bot = new Telegraf(token); 

//console.log(bot)
                        

bot.start((ctx) => {
    
    ctx.telegram.sendMessage(ctx.chat.id,'Bienvenido '+ctx.from.first_name+' '+ctx.from.last_name+' a Digital Templates',{
        reply_markup:{
            inline_keyboard:[
                [{text:"🌅 Catálogos", url: 'www.google.com'},
                {text:"💵 Donación", callback_data: 'boton2'},
                {text:"❓ Ayuda",callback_data: 'boton3'},
                
            ]
            ]
        }

    })

     


})





bot.on('callback_query',(ctx) =>{

    //console.log(ctx)
    
    let {update:{callback_query:{data}}}= ctx;
    console.log(data)

    const dato = data
    const msg = ctx.message

    if(dato == 'boton1'){
       // ctx.telegram.sendMessage(ctx.chat.id,'Accion del Boton 1')
      /* ctx.replyWithPhoto({ source: 'photos/foto.jpg' },{ caption: "Catalogo 1" });

       ctx.telegram.sendMessage(ctx.chat.id,'Catálogos',{
        reply_markup:{
            inline_keyboard:[
                [{text:"Tazas", callback_data: 'boton5'},
                {text:"Pullover", callback_data: 'boton6'},
                {text:"Cuadros decorarivos",callback_data: 'boton7'},
                {text:"Cortes en vinil", callback_data: 'boton8'},
                {text:"Vectores para grabado laser",callback_data: 'boton9'},
                
            ]
            ]
        }

    })*/
                
    }

    if(dato == 'boton2'){
        ctx.telegram.sendMessage(ctx.chat.id,'Accion del Boton 2')
    }

    if(dato == 'boton3'){
        ctx.telegram.sendMessage(ctx.chat.id,'Accion del Boton 4')
    }

    if(dato == 'boton4'){
        ctx.telegram.sendMessage(ctx.chat.id,'Accion del Boton 4')
    }


})
 
bot.launch()



/*bot.help((ctx) => ctx.reply('Pronto te dare ayuda'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('catalogo',(ctx) =>{
    ctx.reply('Aqui le muestro nuestro catalogo')
})*/

/*bot.command('pago',(ctx) =>{
    ctx.telegram.sendMessage(ctx.chat.id,'Metodos de Pago',{
        reply_markup:{
            inline_keyboard:[
                [{text:"Boton 1", callback_data: 'boton1'},
                {text:"Boton 2", callback_data: 'boton2'},
                {text:"Moneda Nacional (M.N)",callback_data: 'boton3'},
                
            ]
            ]
        }

    })
})*/
