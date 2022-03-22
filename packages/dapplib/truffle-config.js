require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name raise ranch color hunt person bridge twin'; 
let testAccounts = [
"0xf9f095a038314bfcf8c17da41492f469d3f4ada24953e8d33cd940741a254d92",
"0x56e41968d95309b3c9c796ed7257d5eedf37d3363aab4c419d59a54002a47487",
"0xb73f2c4d80b5da9500bf9f55de85ae65ea8b36d393514a57ebf0858cfdd23496",
"0x7618e5cf1a940d4bafd799e41f5c50b11a534f67ebc78f09a7ca0d61eca8239e",
"0xfa70c1ab1a225e4bb7a712382c494ed071411db1a97270770b7dba374e70d96d",
"0x9bf81ed652362538767442db5dc88d169dd6463ce0846732c18260220ac6dd29",
"0x097f20e9f49c29690a4d47b97e5831ab7e4c39a56d5069b28333c4ee600004d9",
"0x25a70c3729a0398ceb02d317c518bc0fb4ac43ca940679cc2d516317fcecc1e4",
"0x7c6b47ed9650ba607d86dc58154c349e462872905a421270566f9c636e6903b1",
"0xa42676e23459bef745143f40fc190adce267aeec0d40ee6e2d980e0e12b77c58"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

