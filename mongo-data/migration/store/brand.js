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

 Date: 02/11/2021 18:35:21
*/


// ----------------------------
// Collection structure for brand
// ----------------------------
db.getCollection("brand").drop();
db.createCollection("brand");

// ----------------------------
// Documents of brand
// ----------------------------
session = db.getMongo().startSession();
db = session.getDatabase("nftshopping-store");
db.getCollection("brand").insert([ {
    _id: "@woooo",
    name: "@woooo",
    description: "HAHAH",
    "image_url": "string",
    "create_at": ISODate("2021-10-29T02:20:38.922Z"),
    status: true,
    region: "TW"
} ]);
session.endSession();
