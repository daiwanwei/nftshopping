/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : nftshopping-item

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 02/11/2021 18:37:09
*/


// ----------------------------
// Collection structure for contract
// ----------------------------
db.getCollection("contract").drop();
db.createCollection("contract");

// ----------------------------
// Documents of contract
// ----------------------------
session = db.getMongo().startSession();
db = session.getDatabase("nftshopping-item");
db.getCollection("contract").insert([ {
    _id: ObjectId("618112af88dc93ae87e33589"),
    address: "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4",
    __v: NumberInt("0")
} ]);
session.endSession();
