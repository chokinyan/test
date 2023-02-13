module.exports = {
    reponse : function reponse(message,client){
        if(message.content === "noir"){
            message.reply(`beurk t'es sérieux la ? Hein ${message.author}`);
        }
    }
};