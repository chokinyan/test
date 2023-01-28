const fs = require("fs");

module.exports = async (bot) =>{
    fs.readdirSync("test3/testdejs/commandes").filter( f => f.endsWith(".js")).forEach(async file => {
      
        let command = require(`test3/testdejs/commandes/${file}`);

        if(command.name || command.name !== "string") throw new TypeError(`commandes ${file.slice(0,file.length - 3)} n'a pas de nom !`);
        bot.commandes.set(command.name,command)
        console.log(`commade ${file}`)
    })
}