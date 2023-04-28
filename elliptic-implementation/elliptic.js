let EC = require('elliptic').ec;

function genPrivateKey() {

    let ec = new EC('secp256k1');

    let list_alpha_numer = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //random entropy list
    let gen_entropy = "";

    for (i = 0; i < 128; i++) {
        gen_entropy += list_alpha_numer[(Math.round(Math.random() * 1000)) % 35];
    }
    console.log(gen_entropy);
    let key = ec.genKeyPair({ entropy: gen_entropy });

    let Pkey = key.getPrivate().toString('hex');

    return Pkey;
}

console.log(genPrivateKey(Pkey));