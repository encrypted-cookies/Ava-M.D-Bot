const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['2349031254430'] //ur owner number
global.ownernomer = "2349031254430" //ur owner number2
global.ownername = "Max Ni9e🐤" //ur owner name
global.ytname = "immune@yt" //ur yt chanel name
global.socialm = "GIT: encrypted-cookies" //ur github or insta name
global.location = "MARS," //ur location

//new
global.botname = "AVA-M.D BOT"
global.ownernumber = '2349031254430'
global.ownername = 'Max Ni9e🐤'
global.ownerNumber = ["2349031254430@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@immune"
global.websitex = " "
global.wagc = " "
global.themeemoji = '👙'
global.wm = "Max Ni9e B.O.T Inc."
global.botscript = 'https://github.com/encrypted-cookies/Ava-M.D-Bot' //script link
global.packname = "Ding-a-ling"
global.author = "Max Ni9e"
global.creator = "9031254430@s.whatsapp.net"
global.prefa = ['!'🪣']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could only be used by admins only!',
    botAdmin: 'you gotta make me an Admin First! vro',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Feature can only be Used Only in Groups!',
    private: 'Feature can only be Used in Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process.....',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the Max Ni9e to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})