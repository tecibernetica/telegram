const { Telegraf,Composer, Markup } = require('telegraf')
 
const HttpsProxyAgent = require('https-proxy-agent');
//const { text } = require('telegraf/typings/button');


//token = '1888149585:AAGcBMB_tyOAhM3WY4kC1RR0G1BDX20PCR4';  
token = '1836957884:AAH-MU_n-K2gUyyhgDhVjOqO36Gxu2v6sSQ';

//process.env.http_proxy="http://darkness:puta2017@[192.168.0.1]:3128/"
//process.env.https_proxy="http://darkness:puta2017@[192.168.0.1]:3128/"

///https-proxy="http://darkness:puta2017@[192.168.0.1]:3128/"

const bot = new Telegraf(token);

//console.log(bot)
                        

//bot.use(Telegraf.log())



bot.start( async (ctx) => {
    let bienvenida = 'Bienvenido '+ctx.from.first_name+' '+ctx.from.last_name+
                    '\n\n▫️Nuestro Bot incluye todo lo que usted necesita en cuestion a diseños se refiere.'
                    +'\n\n▫️Contamos con un extenso Catálogo que incluye las mas variadas y exigentes Ofertas.'
                    +'\n\n▫️Al encontrar la Plantilla de su Preferencia, para adquirirla puede realizar el Pago por el método que mejor le convenga.'

                    return await ctx.reply(bienvenida, Markup
                    .keyboard([
                         
                      ["🌅 Catálogos",'💵 PAGOS'],
                         // Row1 with 2 buttons
                      ['❓ AYUDA'], // Row2 with 2 buttons
                      
                    ])
                    .oneTime()
                    .resize()
                  )
                })

     
bot.hears('🌅 Catálogos', ctx => {

     ctx.reply("NUESTRO CATÁLOGO", Markup
        .keyboard([
          ['☕️ Tazas','👕 Pullovers','✂️ Cortes en Vinil'],
          ['🖼 Cuadros Decorativos','🌄 Vectores para Grabado Laser'],
          ['⬅️ Inicio'],  
          
        ])
        .oneTime()
        .resize()
         
      )

})


 


bot.hears('☕️ Tazas',async (ctx) => {
    console.log("JULIOOOOOOOOOOOOOO")
    
    const fs = require('fs');

    
    const dir = await fs.promises.opendir('photos');
    for await (const dirent of dir) {

        console.log(dirent)

        if(dirent.name.endsWith('.jpg') | dirent.name.endsWith('.png')){
            if(dirent.name.endsWith('.jpg')){
             var cadena = dirent.name.split('.jpg')
            }else{
             var cadena = dirent.name.split('.png')   
            } 
            let archivo = cadena[0]+'.rar'
            //console.log(cadena[0]+'.rar')
            console.log(cadena)

             
            

            let existe =async (path,archivo) => {
                if(fs.existsSync(path)){
                    console.log("El archivo EXISTE!");
                      

                    await ctx.replyWithPhoto({ source: `photos/${dirent.name}`},
                       {
                         caption: 'Diseño para Tazas y Jarras para el Dia de los Padres',
                          
                         parse_mode: 'Markdown',
                         ...Markup.inlineKeyboard([
                             [{text:"Link de Descarga del Catálogo", callback_data: archivo}]
                             
                           ])
           
                       })  
                    
                }else{
                    console.log("El archivo NO EXISTE!")
                  
                     await ctx.replyWithPhoto({ source: `photos/${dirent.name}`},
                       {
                         caption: 'Diseño para Tazas y Jarras para el Dia de los Padres',
                          
                       })  
              }
            }
            
               
            console.log(existe(`photos/${archivo}`,archivo))   

            
                 
             
    
    
            console.log(dirent.name);
        }
    }
   
    
   


    bot.on('callback_query',(ctx) =>{

        //console.log(ctx)
        
        let {update:{callback_query:{data}}}= ctx;
        console.log(data)
    
        const dato = data
        const msg = ctx.message
    
            
        
            ctx.telegram.sendMessage(ctx.chat.id,'👇')

            ctx.replyWithDocument({source: `photos/${dato}`   });
       
    
        
    
    })


    ctx.reply("👍", Markup
        .keyboard([
          ['☕️ Tazas','👕 Pullovers','✂️ Cortes en Vinil'],
          ['🖼 Cuadros Decorativos','🌄 Vectores para Grabado Laser'],
          ['⬅️ Inicio'],  
          
        ])
        .oneTime()
        .resize()
         
      )
  })




  bot.hears('⬅️ Inicio',async (ctx) => {
    let bienvenida = 'Bienvenido '+ctx.from.first_name+' '+ctx.from.last_name+
                    '\n\n▫️Nuestro Bot incluye todo lo que usted necesita en cuestion a diseños se refiere.'
                    +'\n\n▫️Contamos con un extenso Catálogo que incluye las mas variadas y exigentes Ofertas.'
                    +'\n\n▫️Al encontrar la Plantilla de su Preferencia, para adquirirla puede realizar el Pago por el método que mejor le convenga.'

                    return await ctx.reply(bienvenida, Markup
                    .keyboard([
                         
                      ["🌅 Catálogos",'💵 PAGOS'],
                         // Row1 with 2 buttons
                      ['❓ AYUDA'], // Row2 with 2 buttons
                      
                    ])
                    .oneTime()
                    .resize()
                  )
  })




/*bot.action(/.+/, (ctx) => {
  return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`)
})*/
 
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
