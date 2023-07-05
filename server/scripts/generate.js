const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = toHex(secp.secp256k1.utils.randomPrivateKey());

console.log('private key:', privateKey)

const publicKey = toHex(secp.secp256k1.getPublicKey(privateKey));

console.log('public key:', publicKey)


// //Import the necessary module:

// const { ethers } = require("ethers");

// //Define an async function to generate the keys:

// async function generateKeys() {
// // The createRandom method is called on the Wallet class to generate a new random wallet. 
// // This creates a wallet instance with a random private key and public key.

//   const wallet = ethers.Wallet.createRandom();

// // The private key is accessed using the privateKey property of the wallet.

//   const privateKey = wallet.privateKey;

// // The public key is accessed using the publicKey property of the wallet.

//   const publicKey = wallet.publicKey;

// // The computeAddress function from ethers.utils is used to derive the Ethereum address (public address) from the public key.

//   const publicAddress = ethers.utils.computeAddress(publicKey);

// // The private key and public address are logged to the console.

//   console.log("Private key:", privateKey);
//   console.log("Public key:", publicKey);
//   console.log("Public key Address:", publicAddress);
// }

// generateKeys();