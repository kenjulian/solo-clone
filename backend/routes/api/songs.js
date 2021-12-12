const express = require('express');
const asyncHandler = require('express-async-handler');


const { validatePostInput } = require('../../utils/validation');
//authenticates user to access and use the song
const {requireAuth} = require('../../utils/auth');
const {Song} = require('../../db/models');

const router = express.Router();


//get all the songs
router.get("/", asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    //console.log(songs, 'heeeeeee')
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
    let userId = req.user.id;
    const {songUrl, picUrl, title} = req.body;
    const song = await Song.create({userId, songUrl, picUrl, title});
    // res.json(song)
})) 

//update a song
router.put("/:id(\\d+)", requireAuth, validatePostInput, asyncHandler(async (req, res) => {
    const {songUrl, picUrl, title} = req.body;
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