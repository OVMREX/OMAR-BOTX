let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        let user = global.db.data.users[who]
        if (!who) throw `قم بالرد على شخص ما\n\n📌 Example : ${usedPrefix + command} @user`
    if (global.allowed.includes(who.split`@`[0])) throw 'The user Mentioned is already allowed to use the bot in DM '
    global.allowed.push(`${who.split`@`[0]}`)
    
    conn.reply(m.chat, ` @${who.split`@`[0]} got the ultimate pass  to use the bot in DM`, m, { mentions: [who] })
    
    }
    handler.help = ['allow <@tag>']
    handler.tags = ['قائمة مطور البوت']
    handler.command = ['allow', 'makeallow', 'al'] 
    
    handler.group = true
    handler.rowner = true
    
    export default handler
