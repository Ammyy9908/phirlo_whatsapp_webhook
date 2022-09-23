class MessagesIds{
    constructor(){
        this.ids = [];
    }

    addMessage(id){
        this.ids.push(id);
    }

    getMessages(){
        return this.ids;
    }
}

module.exports = MessagesIds


