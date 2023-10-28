import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('3JbVsQfnVD2QwS5Pn5wzwJhLes63G4gn5kmhWFyccSFLyiHqaob1mYNpYxRMtmAAWaNAzhV16JHwnFDgi4QdeBZW')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN');
    const publicKeyTo = new Web3.PublicKey('JcvmtbwqkFUKoMaVfzcZTU7uMNLjP54bpzzmJskuXmL');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();