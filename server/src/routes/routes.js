import express from "express";
import db from "../db/conn.js";
import * as path from "path";
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router();

// Get a list of 50 posts
router.get("/api", async (req, res) => {
    let collection = await db.collection("main");
    let results = await collection.find({})
        // .limit(50)
        .toArray();

    res.send(results).status(200);
});

router.get("/api/price", async (req, res) => {
    let collection = await db.collection("price");
    let results = await collection.find({"type":"preview"})
        // .limit(50)
        .toArray();

    res.send(results).status(200);
});

router.get("/api/price/:type", async (req, res) => {
    let collection = await db.collection("price");
    let results = await collection.find({"type":req.params.type})
        .toArray();
    res.send(results).status(200);
});

router.get("/api/item/:id", async (req, res) => {
    let collection = await db.collection("price");
    let results = await collection.find({"id":Number(req.params.id)})
        .toArray();
    res.send(results).status(200);
});

router.get("/api/events", async (req, res) => {
    let collection = await db.collection("events");
    let results = await collection.find({})
        // .limit(50)
        .toArray();

    res.send(results).status(200);
});

router.get("/api/about", async (req, res) => {
    let collection = await db.collection("about");
    let results = await collection.find({})
        // .limit(50)
        .toArray();

    res.send(results).status(200);
});

router.get('/api/photo', function (req, res, next) {
    // const options = {
    //
    //     root: path.join(__dirnameProj, 'src', 'static'),
    //     dotfiles: 'deny',
    //     headers: {
    //         'x-timestamp': Date.now(),
    //         'x-sent': true,
    //         'content-type': 'image/jpg'
    //     }
    // }
    //
    // const fileName = req.query.imgpath
    // res.sendFile(fileName, options, function (err) {
    //     if (err) {
    //         next(err)
    //     } else {
    //         console.log('Sent:', fileName)
    //     }
    // })
    const options = {

        root: path.join(process.env.BUCKET_URL, 'static'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true,
            'content-type': 'image/jpg'
        }
    }

    const fileName = req.query.imgpath
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

// // Fetches the latest posts
// router.get("/latest", async (req, res) => {
//     let collection = await db.collection("posts");
//     let results = await collection.aggregate([
//         {"$project": {"author": 1, "title": 1, "tags": 1, "date": 1}},
//         {"$sort": {"date": -1}},
//         {"$limit": 3}
//     ]).toArray();
//     res.send(results).status(200);
// });

// // Get a single post
// router.get("/:id", async (req, res) => {
//     let collection = await db.collection("posts");
//     let query = {_id: ObjectId(req.params.id)};
//     let result = await collection.findOne(query);
//
//     if (!result) res.send("Not found").status(404);
//     else res.send(result).status(200);
// });

// Add a new document to the collection
// router.post("/", async (req, res) => {
//     let collection = await db.collection("posts");
//     let newDocument = req.body;
//     newDocument.date = new Date();
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
// });

// Update the post with a new comment
// router.patch("/comment/:id", async (req, res) => {
//     const query = { _id: ObjectId(req.params.id) };
//     const updates = {
//         $push: { comments: req.body }
//     };
//
//     let collection = await db.collection("posts");
//     let result = await collection.updateOne(query, updates);
//
//     res.send(result).status(200);
// });

// // Delete an entry
// router.delete("/:id", async (req, res) => {
//     const query = { _id: ObjectId(req.params.id) };
//
//     const collection = db.collection("posts");
//     let result = await collection.deleteOne(query);
//
//     res.send(result).status(200);
// });

export default router;
