import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('FvJjbMJVoMTB4zraNnEah3L6kcEw2PBJfoxmoq2NQEPN');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()