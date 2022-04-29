module.exports = {
    posts: [
        {id:"231421321312", 
        title: "Teste do Mural",
        description: "Esse é o primeiro teste do nosso querido mural"
        },
    ],
    getAll(){
        return this.posts;
    },
    
    newPost(title, description){
        this.posts.push({id: generateID(), title, description})
    },
    
}

function generateID(){
    return Math.random().toString(36).substring(2,9)
}