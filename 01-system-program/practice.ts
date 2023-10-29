import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

const publicKey = new Web3.PublicKey('FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN');
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
const decoded = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main() {
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey("B2s3EJFFkhUyCJUzRE432ESMA1qaVRx3CvqByrjfoQii"),
    });

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        new Web3.Transaction().add(instruction),
        [keyPair]
    )
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});