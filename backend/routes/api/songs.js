const express = require('express');
const asyncHandler = require('express-async-handler');


const { validatePostInput } = require('../../utils/validation');
//authenticates user to access and use the song
const {requireAuth} = require('../../utils/auth');
const {Song} = require('../../db/models/song');

const router = express.Router();


//get all the songs
router.get("/", asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
  })
  );

// //get one song
// router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
//         const oneSong = await Song.findByPk(req.params.id);
        
//         return res.json(oneSong);
//     })
//   );

//post a song
router.post("/", requireAuth, validatePostInput, asyncHandler(async (req, res) => {
    const {songUrl, picUrl, title} = req.body;
    const song = await Song.create({songUrl, picUrl, title});
    res.json(song)
})) //why req.body doesn't work for .create

//update a song
router.patch("/:id(\\d+)", requireAuth, validatePostInput, asyncHandler(async (req, res) => {
    const update = await Song.update(
      { songUrl, picUrl, title},
      { where: {id: req.params.id},
    }
    );
    res.json(update);
  })
);


//delete a song
router.delete("/:id(\\d+)",requireAuth, asyncHandler(async function(req, res) {
    const deleteSong = await Song.findByPk(req.params.id);

    if (deleteSong) {
       deleteSong.destroy();
    } else {
    res.status("404").json({Message: "Not found"})
  }
})
);
module.exports = router;