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

 Date: 02/11/2021 18:37:23
*/


// ----------------------------
// Collection structure for item
// ----------------------------
db.getCollection("item").drop();
db.createCollection("item");

// ----------------------------
// Documents of item
// ----------------------------
session = db.getMongo().startSession();
db = session.getDatabase("nftshopping-item");
db.getCollection("item").insert([ {
    _id: {
        contract: "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4",
        token: "0"
    },
    creationId: "618112af282ebd884918be7c",
    __v: NumberInt("0")
} ]);
db.getCollection("item").insert([ {
    _id: {
        contract: "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4",
        token: "1"
    },
    creationId: "618112af282ebd884918be7c",
    __v: NumberInt("0")
} ]);
session.endSession();
