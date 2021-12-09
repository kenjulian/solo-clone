const express = require('express');
const asyncHandler = require('express-async-handler');

const { validatePostInput } = require('../../utils/validation');
const {requireAuth} = require('../../utils/auth');
const {Song} = require('../../db/models/song');

const router = express.Router();


//get all the songs
router.get("/", asyncHandler( async(req, res) => {
        const songs = await Song.findAll();
        return res.json(songs);
    })
  );

//get one song
router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
        const oneSong = await Song.findByPk(req.params.id);
        return res.json(oneSong);
    })
  );

//post a song
router.post("/", requireAuth, validatePostInput, asyncHandler(async (req, res) => {
    const song = await Song.create(req.body);
    res.json(song)
}))

//delete a song
router.delete("/:id(\\d+)",requireAuth, asyncHandler(async function(req, res) {
    const deleteSong = await Song.findByPk(req.params.id);
    await deleteSong.destroy();
    return res.json(req.body);
})
);
module.exports = router;