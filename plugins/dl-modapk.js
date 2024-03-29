import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'modapk', 'apk', 'app') {
      if (!text) throw `*🕵🏻‍♂️ أرسل إسم التطبيق الذي تريده* \n *مثال* : *.apk facebook lite*`;
      m.react(rwait)
      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 200) {
        return await conn.sendMessage(m.chat, { text: '*التطبيق كبير جدا حاول مع تطبيق أخر.  🏃🏻‍♂️.*' }, { quoted: m });
      }

      if (data.size.includes('GB')) {
        return await conn.sendMessage(m.chat, { text: '*التطبيق كبير جدا حاول مع تطبيق أخر 🏃🏻‍♂️.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  m.react(done)
  } catch {
    throw `*🕵🏻‍♂️ أرسل إسم التطبيق الذي تريده* \n *مثال* : *.apk facebook lite*`;
  }
};

handler.help = ['apk']
handler.tags = ['قائمة التطبيقات']
handler.command = ['modapk', 'apk', 'app'];
export default handler;
