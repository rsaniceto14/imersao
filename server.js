import express from "express";  //import express (servidor)

const posts = [
    {
        id: 1,
        description: "Picture cat",
        image: "https://placecats.com/millie/300/150",

    },
    {
        id: 2,
        description: "A beautiful sunset",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        description: "My new puppy!",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        description: "A delicious homemade pizza",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        description: "A breathtaking mountain view",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        description: "A cozy reading nook",
        image: "https://placecats.com/millie/300/150",
    }
]



const app = express();  //create an instance of express
app.use(express.json());


app.listen(3000, () => {
    console.log("Server running on port 3000");  //log message when server starts listening
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts); //create a route to test server
});


function searchId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id) 
    })
}


app.get('/posts/:id', (req, res) => {
    const index = searchId(req.params.id)
    res.status(200).json(posts[index]); //create a unique route
});

