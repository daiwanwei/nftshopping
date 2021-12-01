/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : nftshopping-store

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 02/11/2021 18:36:33
*/


// ----------------------------
// Collection structure for creation_item
// ----------------------------
db.getCollection("creation_item").drop();
db.createCollection("creation_item");

// ----------------------------
// Documents of creation_item
// ----------------------------
session = db.getMongo().startSession();
db = session.getDatabase("nftshopping-store");
db.getCollection("creation_item").insert([ {
    _id: {
        contract: "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4",
        token: "0"
    },
    "creation_id": ObjectId("618112af282ebd884918be7c"),
    owner: "",
    "brand_owner": "@woooo"
} ]);
db.getCollection("creation_item").insert([ {
    _id: {
        contract: "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4",
        token: "1"
    },
    "creation_id": ObjectId("618112af282ebd884918be7c"),
    owner: "",
    "brand_owner": "@woooo"
} ]);
session.endSession();
