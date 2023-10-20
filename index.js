const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const lava = brandCollection.collection("lava");
        const products = brandCollection.collection("products");

        // add apple product to route 
        app.post('/apple', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await apple.insertOne(newProduct);
            res.send(result);
        })

        // add samsung product to route 
        app.post('/samsung', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await samsung.insertOne(newProduct);
            res.send(result);
        })

        // add nokia product to route 
        app.post('/nokia', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await nokia.insertOne(newProduct);
            res.send(result);
        })

        // add intel product to route 
        app.post('/intel', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await intel.insertOne(newProduct);
            res.send(result);
        })

        // add sony product to route 
        app.post('/sony', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await sony.insertOne(newProduct);
            res.send(result);
        })

        app.post('/lava', async (req, res) => {
            const newProduct = req.body;
            console.log(newProduct);
            const result = await lava.insertOne(newProduct);
            res.send(result);
        })



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

        // delete product from my cart 
        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await products.deleteOne(query);
            res.send(result)

        })

        // Update Apple 
        app.put('/apple/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const appleBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await apple.updateOne(filter, appleBrand, options);
            res.send(result);
        })

        // Update Samsung 
        app.put('/samsung/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const samsungBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await samsung.updateOne(filter, samsungBrand, options);
            res.send(result);
        })

        // Update Nokia
        app.put('/nokia/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const nokiaBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await nokia.updateOne(filter, nokiaBrand, options);
            res.send(result);
        })

        // Update sony
        app.put('/sony/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const sonyBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await sony.updateOne(filter, sonyBrand, options);
            res.send(result);
        })

        // Update Intel
        app.put('/intel/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const intelBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await intel.updateOne(filter, intelBrand, options);
            res.send(result);
        })

        app.put('/lava/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedBrand = req.body;

            const lavaBrand = {
                $set: {
                    name: updatedBrand.name,
                    brandName: updatedBrand.brandName,
                    type: updatedBrand.type,
                    price: updatedBrand.price,
                    rating: updatedBrand.rating,
                    image: updatedBrand.image,

                }
            }

            const result = await intel.updateOne(filter, lavaBrand, options);
            res.send(result);
        })

        // co Route 
        app.get('/apple/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await apple.findOne(query);
            res.send(result)
        })

        app.get('/samsung/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await samsung.findOne(query);
            res.send(result)
        })

        app.get('/nokia/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await nokia.findOne(query);
            res.send(result)
        })

        app.get('/sony/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await sony.findOne(query);
            res.send(result)
        })

        app.get('/intel/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await intel.findOne(query);
            res.send(result)
        })

        app.get('/lava/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await lava.findOne(query);
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

        // get lava data from mongoDB 
        app.get('/lava', async (req, res) => {
            const cursor = lava.find();
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