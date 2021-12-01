const { expect, use} = require("chai");
const { ethers } = require("hardhat");

describe("Creation", function () {
  let creation,owner,creator,agent,publisher,user;
  beforeEach(async function (){
    const Creation = await ethers.getContractFactory("Creation");
    creation = await Creation.deploy("Taiwan","TW","localhost:8080");
    await creation.deployed();
    [owner,creator,agent,publisher,user]=await ethers.getSigners()
  })

  it("name test", async function () {
    expect(await creation.name()).to.equal("Taiwan");
    console.log(owner.address)
  });

  it("mint test", async function () {
    const tx =await creation.mint("001")
    await tx.wait();
    expect(await creation.balanceOf(owner.address)).to.equal(1);
  });


  it("trade test", async function () {
    const mintTnx =await creation.mint("p-001")
    await mintTnx.wait();
    expect(await creation.balanceOf(owner.address)).to.equal(1);
    const tradeTnx = await creation.trade("o-001",owner.address,user.address,0);
    await tradeTnx.wait();
    expect(await creation.balanceOf(user.address)).to.equal(1);
  });
});

function getBalanceOfEther(accounts){
  let prov = ethers.provider;
  let balance;
  accounts.forEach(async (account)=>{
    balance = await prov.getBalance(account.address);
    console.log(`${account.address}:${balance}`);
  })
}
