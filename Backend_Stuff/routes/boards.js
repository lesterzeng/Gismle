const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Board = require(`../models/Board`);

const auth = require("../middleware/auth");
const {
  seedUsers,
  seedBoards,
  seedCards,
  seedComments,
} = require("../models/seeds");

const { body, validationResult } = require("express-validator");
const { route } = require("./users");

////////////////////////////////
// ADD Seed boards data
////////////////////////////////

router.get("/seedBoards", auth, async (req, res) => {
  const updatedSeedComments = seedComments.map((comment) => ({
    ...comment,
    createdBy: req.decoded.id,
  }));
  const updatedSeedCards = seedCards.map((card) => ({
    ...card,
    comments: updatedSeedComments,
    createdBy: req.decoded.id,
    updatedBy: req.decoded.id,
  }));

  const updatedSeedBoards = seedBoards.map((board) => ({
    ...board,
    activeCards: updatedSeedCards,
    createdBy: req.decoded.id,
    updatedBy: req.decoded.id,
    members: [req.decoded.id],
  }));
  // seeds the data
  await Board.create(updatedSeedBoards, (err, data) => {
    if (err) console.log(err.message);
    console.log("Added default boards info", data);
    res.json(data);
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////
// Boards API
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
// Create new Board
////////////////////////////////
/*
req.body => 
{
    "title":"Added in Project",
    "desc":"User input Project",
    "members": ["studenta@generalassemb.ly","studentb@generalassemb.ly","studentc@generalassemb.ly"]
}
*/
router.put(
  "/create/board",
  [
    auth,
    body("title", "Please enter Board Title").not().isEmpty(),
    // body("desc", "Please enter Board Description").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check every member in the members array
      let member;
      const newMembers = [];
      if (req.body.members != null) {
        for (let i = 0; i < req.body.members.length; i++) {
          member = await User.findOne({ email: req.body.members[i] });
          if (member) {
            newMembers.push(member._id);
          } else {
            return res.json(`${req.body.members[i]} does not exist`);
          }
        }
      }
      const createdBoard = await Board.create({
        title: req.body.title,
        desc: req.body.desc,
        // activeCards: [],
        createdBy: req.decoded.id,
        updatedBy: req.decoded.id,
        members: [req.decoded.id, ...newMembers],
      });

      console.log("created user: ", createdBoard);
      res.json({ message: "board created" });
    } catch (err) {
      console.log("PUT /create/board", err);
      res
        .status(400)
        .json({ status: "error", message: "an error has occurred" });
    }
  }
);

////////////////////////////////
// Display all Boards that logged in user have
////////////////////////////////
/*
currently how members will be displayed as
{
    "members": [
            {
                "email": "desmond.lim@generalassemb.ly"
            },
            {
                "email": "studenta@generalassemb.ly"
            },
            {
                "email": "studentb@hotmail.com"
            },
            {
                "email": "studentc@gmail.com"
            }
        ],
}
*/

router.get("/display/boards/all", auth, async (req, res) => {
  const boards = await Board.find({
    members: { $all: [req.decoded.id] },
  });
  // .populate({ path: "members", select: "email -_id" });
  res.json(boards);
});

////////////////////////////////
// Update Board Info
////////////////////////////////
/*
req.body => 
{
    "boardId": "board object id",
    "title":"updatedTitle of Project",
    "desc": "checking if updatedProject is updated",
    "members": ["studenta@generalassemb.ly","studentb@generalassemb.ly","studentc@generalassemb.ly"]
    
  }
*/

router.patch("/update/board", auth, async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.body.boardId });
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "board does not exist" });
    }
    let member;
    const newMembers = [];
    if (req.body.members != null) {
      for (let i = 0; i < req.body.members.length; i++) {
        member = await User.findOne({ email: req.body.members[i] });
        if (member) {
          newMembers.push(member._id);
        } else {
          return res.json(`${req.body.members[i]} does not exist`);
        }
      }
    }

    board.title = req.body.title || board.title;
    board.desc = req.body.desc || board.desc;
    // board.members = newMembers || board.members;
    board.updatedBy = req.decoded.id || board.updatedBy;
    const now = Date.now();
    board.updatedAt = now;

    await board.save();

    res.json(board);
  } catch (err) {
    console.log("PATCH /update/board", err);

    res.status(400).json({
      status: "error",
      message: "update error",
    });
  }
});

////////////////////////////////
// Delete Board
////////////////////////////////
/*
req.body => 
{
    "boardId": "board object id",
  }
*/
router.delete("/remove/board", auth, async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.body.boardId });
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "board does not exist" });
    }
    await board.deleteOne({ _id: req.body.boardId });

    res.json(` ${req.body.boardId} Board is successfully removed`);
  } catch (err) {
    console.log("DELETE /delete/board", err);

    res.status(400).json({
      status: "error",
      message: "Delete error",
    });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////
// Cards API
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////
// Create new Card
////////////////////////////////
/*

card status is default to toDo

req.body => 
{
    "boardId":"board object id",
    "actionTitle": "New Action card",
    "actionDesc": "Planning a new task"
}
*/

router.put(
  "/create/card",
  [
    auth,
    body("actionTitle", "Please enter Card Title").not().isEmpty(),
    // body("actionDesc", "Please enter Card Description").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const board = await Board.findOne({ _id: req.body.boardId });
      if (!board) {
        return res
          .status(404)
          .json({ status: "error", message: "board does not exist" });
      }
      const newCard = {
        actionTitle: req.body.actionTitle,
        actionDesc: req.body.actionDesc,
        // comments: [],
        createdBy: req.decoded.id,
        updatedBy: req.decoded.id,
      };
      const updatedBoard = await Board.updateOne(
        { _id: req.body.boardId },
        { $push: { activeCards: newCard } }
      );

      res.json(updatedBoard);
    } catch (err) {
      console.log("PUT /create/card", err);
      res
        .status(400)
        .json({ status: "error", message: "an error has occurred" });
    }
  }
);

////////////////////////////////
// Update Card Info
////////////////////////////////
/*
req.body => 
{
    "boardId": "board object id",
    "cardId": "card object id",
     "actionTitle": "New Action card",
    "actionDesc": "Planning a new task",
    "status": "inProgress"
    
  }
*/
router.patch("/update/card", auth, async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.body.boardId });
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "board does not exist" });
    }

    // board.title = req.body.title || board.title;
    // board.desc = req.body.desc || board.desc;
    // board.members = newMembers || board.members;
    // board.updatedBy = req.decoded.id || board.updatedBy;
    // const now = Date.now();
    // board.updatedAt = now;

    // await board.save();

    const updatedBoard = await Board.findOneAndUpdate(
      {
        _id: req.body.boardId,
        activeCards: { $elemMatch: { _id: req.body.cardId } },
      },
      {
        $set: {
          "activeCards.$.actionTitle": req.body.actionTitle || this.actionTitle,
          "activeCards.$.actionDesc": req.body.actionDesc || this.actionDesc,
          "activeCards.$.status": req.body.status || this.status,
        },
      },

      { new: true }
    );

    res.json(updatedBoard);
  } catch (err) {
    console.log("PATCH /update/card", err);

    res.status(400).json({
      status: "error",
      message: "update error",
    });
  }
});
////////////////////////////////
// Get Cards by status
////////////////////////////////
/*
req.body => 
{
    "boardId":"board object id",
}
*/

router.get("/display/cards/:status", auth, async (req, res) => {
  console.log(req.body.boardId);
  try {
    const board = await Board.findOne(
      {
        _id: req.body.boardId,
      }
      //   {
      //     activeCards: { status: { $eq: req.params.status } } ,
      //   }
    );
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "board does not exist" });
    }
    const filteredArray = board.activeCards.filter(
      (card) => card.status === req.params.status
    );

    res.json(filteredArray);
  } catch (err) {
    console.log("GET /display/cards/:status", err);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
});

router.post("/display/cards/:status", auth, async (req, res) => {
  console.log(req.body.boardId);
  try {
    const board = await Board.findOne(
      {
        _id: req.body.boardId,
      }
      //   {
      //     activeCards: { status: { $eq: req.params.status } } ,
      //   }
    );
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "board does not exist" });
    }
    const filteredArray = board.activeCards.filter(
      (card) => card.status === req.params.status
    );

    res.json(filteredArray);
  } catch (err) {
    console.log("GET /display/cards/:status", err);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
});

////////////////////////////////
// Delete Card
////////////////////////////////
/*
req.body => 
{
    "boardId":"board object id",
    "cardId": "card object id",
  }
*/
router.delete("/remove/card", auth, async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.body.boardId });
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "Board does not exist" });
    }

    const updatedBoard = await Board.updateOne(
      { _id: req.body.boardId },
      { $pull: { activeCards: { _id: req.body.cardId } } }
    );
    res.json(updatedBoard);

    // res.json(` ${req.body.cardId} Card is successfully removed`);
  } catch (err) {
    console.log("DELETE /remove/card", err);

    res.status(400).json({
      status: "error",
      message: "Delete error",
    });
  }
});

////////////////////////////////
// Add Comment in Card
////////////////////////////////
/*
req.body => 
{
    "boardId":"board object id",
    "cardId": "card object id",
    "comment": "New comment!!! :D"
  }
*/
router.put(
  "/create/comment",
  [auth, body("comment", "Please enter Card Title").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const board = await Board.findOne({ _id: req.body.boardId });
      if (!board) {
        return res
          .status(404)
          .json({ status: "error", message: "board does not exist" });
      }
      /*
      await Hotels.findOneAndUpdate(
      {
        _id: hotelId, // i think not relevant because mongo ObjectId should always be unique
        rooms: { $elemMatch: { _id: roomId } },
      },
      { $set: { "rooms.$.price": roomPrice } }
    );
    It works, Thanks ZhenHao!:DDD

      */
      const newComment = {
        commentValue: req.body.comment,
        createdBy: req.decoded.id,
      };

      const updatedBoard = await Board.findOneAndUpdate(
        {
          _id: req.body.boardId,
          activeCards: { $elemMatch: { _id: req.body.cardId } },
        },
        { $push: { "activeCards.$.comments": newComment } },
        { new: true }
      );

      res.json(updatedBoard);
    } catch (err) {
      console.log("PUT /create/comment", err);
      res
        .status(400)
        .json({ status: "error", message: "an error has occurred" });
    }
  }
);

////////////////////////////////
// Delete Comment in Card
////////////////////////////////
/*
req.body => 
{
    "boardId":"board object id",
    "cardId": "card object id",
    "commentId": "comment object id"
  }
*/
router.delete("/remove/comment", auth, async (req, res) => {
  try {
    const board = await Board.findOne({ _id: req.body.boardId });
    if (!board) {
      return res
        .status(404)
        .json({ status: "error", message: "Board does not exist" });
    }
    // await board.updateOne(
    //   { _id: req.body.boardId },
    //   { $pull: { activeCards: { _id: req.body.cardId } } }
    // );

    const updatedBoard = await Board.findOneAndUpdate(
      {
        _id: req.body.boardId,
        activeCards: { $elemMatch: { _id: req.body.cardId } },
      },
      { $pull: { "activeCards.$.comments": { _id: req.body.commentId } } },

      { new: true }
    );

    res.json(updatedBoard);

    // res.json(` ${req.body.cardId} Card is successfully removed`);
  } catch (err) {
    console.log("DELETE /remove/comment", err);

    res.status(400).json({
      status: "error",
      message: "Delete error",
    });
  }
});

module.exports = router;
