const { default: axios } = require("axios");
const dotenv = require("dotenv");
dotenv.config();

async function sendWelcomeMessage(to,name){

    console.log("Sending welcome message to " + to)
try{
    const r = await axios.post('https://graph.facebook.com/v14.0/107625022002368/messages',{
        messaging_product: "whatsapp",
        to: to,
        type: "template",
        template: { name: "welcome", language: { code: "en_US" } ,
        components: [{
            type: "body",
            parameters: [
                {
                    type: "text",
                    text: name
                }
            ]
        }]
    
    },
      },{
        headers:{
            'Content-Type':'application/json',
            Authorization: "Bearer " + process.env.WHATSAPP_TOKEN,

        }
    })
    console.log(r.data)
    return r.data;
}
catch(e){
    console.log(e)
}
}

module.exports = sendWelcomeMessage