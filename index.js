const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

// mongoDB connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.azrqgfm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)


        const brandCollection = client.db("brandDB");
        const brand = brandCollection.collection("brand");
        const apple = brandCollection.collection("apple");
        const intel = brandCollection.collection("intel");
        const nokia = brandCollection.collection("nokia");
        const samsung = brandCollection.collection("samsung");
        const sony = brandCollection.collection("sony");
        const products = brandCollection.collection("products");


        // created add to cart data for mongoDB 
        app.post('/products', async (req, res) => {
            const newProducts = req.body
            console.log(newProducts);
            const result = await products.insertOne(newProducts);
            res.send(result);
        })

        // get add to cart data from mongoDB  
        app.get('/products', async (req, res) => {
            const cursor = products.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get brand data from mongoDB  
        app.get('/brand', async (req, res) => {
            const cursor = brand.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get apple data from mongoDB 
        app.get('/apple', async (req, res) => {
            const cursor = apple.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get Intel data from mongoDB 
        app.get('/intel', async (req, res) => {
            const cursor = intel.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get Nokia data from mongoDB 
        app.get('/nokia', async (req, res) => {
            const cursor = nokia.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get samsung data from mongoDB 
        app.get('/samsung', async (req, res) => {
            const cursor = samsung.find();
            const result = await cursor.toArray()
            res.send(result)
        })

        // get sony data from mongoDB 
        app.get('/sony', async (req, res) => {
            const cursor = sony.find();
            const result = await cursor.toArray()
            res.send(result)
        })



        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// Testing  
app.get('/', (req, res) => {
    res.send('TechVine server is running')
})

app.listen(port, () => {
    console.log(`TechVine server is running ${port}`)
})