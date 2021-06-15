var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "🎉 Welcome to the fun 🎉",
assets : {
large_image : "anime",
large_text : "Ciao Sono DOMIX" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "🌀 Discord 🌀" , url : "https://discord.gg/2WtFYgxVZc"},{label : "👤 Socials 👤", url : "https://domix-developer.github.io/DOMIXsocial/"}]
}
})
})
client.login({ clientId : "853601406073438228" }).catch(console.error);