import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN")
const decoded = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "Cg6DEFCiCMBGBkzmoQX3WZD9jEudwPhiFuYgXHArLMre"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();