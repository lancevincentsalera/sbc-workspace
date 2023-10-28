import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN")
const decoded = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "Cg6DEFCiCMBGBkzmoQX3WZD9jEudwPhiFuYgXHArLMre"
const tokenAccountAddress = "HFeeZpRE4VyVt72tJ4yaDoNY3tupcdnn7JhQJiq7pdcA"

async function main(){
    const mintToken  = await token.mintTo(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        new Web3.PublicKey(tokenAccountAddress),
        publickey,
        100000000000 // owner of the token-account
    );

    console.log('mint Token ', mintToken);
}

main();

// import 'dotenv/config'
// import * as Web3 from '@solana/web3.js'
// import * as token from '@solana/spl-token'

// import base58 from 'bs58';
// async function main(){

//     const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
//     const base58DecodedPK = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW');
//     const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

//     const mintToken = await token.mintTo(
//         connection,
//         signer,
//         new Web3.PublicKey('Cg6DEFCiCMBGBkzmoQX3WZD9jEudwPhiFuYgXHArLMre'), //mint 
//         new Web3.PublicKey('FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN'), //owner
//         new Web3.PublicKey('FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN'), //authority
//         100000000000, //amount
//     )
//     console.log('mint Token ', mintToken)

// }
// main()