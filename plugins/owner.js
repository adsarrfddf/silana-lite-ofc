import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت آدم 」*\n\n
*Whatsapp channel:*\n https://whatsapp.com/channel/0029Vaa9FSx3WHTPYAIzdT0L\n
*instagram:*\ninstagram.com/adam_x____x?igsh=N2Q2ZTJmMnlhNXVw

*youtube:* لا يوجد 

*facebook page:* DocuLens 

*script bot :* لا يوجد

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
