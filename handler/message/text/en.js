exports.textTnC = () => {
    return `
Source code / bot is an open-source program (free) written using Javascript, you can use, copy, modify, combine, publish, distribute, sub-license, and or sell copies without removing the main author of the source code / bot.
By using this source code / bot, you agree to the following Terms and Conditions:
- Source code / bot does not store your data on our servers.
- The source code / bot is not responsible for the stickers you make from this bot and the videos, images and other data that you get from the source code / bot.
- Source code / bot may not be used for services that aim / contribute to:
    • sex / human trafficking
    • gambling
    • harmful addictive behavior
    • crime
    • violence (unless necessary to protect public safety)
    • burning forest/ deforestation
    • hate speech or discrimination based on age, sex, gender identity, race, sexuality, religion, nationality

Source Code BOT: https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Hallo, ${pushname || ''}! 👋️
Berikut ini beberapa fitur dari bot ini! ✨

Membuat Sticker:
1. */sticker*
Untuk mengubah gambar menjadi stiker, kirim gambar dengan caption #sticker atau balas gambar yang telah dikirim dengan #sticker.

2. */stickers* _<Image Url>_
Untuk mengubah gambar dari url menjadi stiker.

3. */gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Untuk mengubah gif menjadi stiker (khusus Giphy)

Downloader:
1. */tiktok* _<post / video url>_
Will return video tiktok.

2. */fb* _<post / video url>_
Will return the Facebook video download link.

3. */ig* _<post / video url>_
Will return the Instagram video download link.

4. */twt* _<post / video url>_
Will return the Twitter video download link.

Etc:
1. */tnc*
Displays Bot Terms and Conditions.

Semoga Sehat Selalu #Dirumahaja!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Hanya Admin Group* ] ⚠ 
Berikut beberapa fitur admin grup yang termasuk dalam bot ini!

1. */kick* @user
Removing members from the group (can be more than 1).

2. */promote* @user
Promote members to group admins.

3. */demote* @user
Demote Group admins.

3. */tagall*
Mention of all group members.`
}
