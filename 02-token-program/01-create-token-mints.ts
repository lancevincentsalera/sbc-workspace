import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN")
const decoded = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();