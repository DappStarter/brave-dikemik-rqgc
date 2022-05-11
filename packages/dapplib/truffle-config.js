require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give narrow frown ski stone cruise pulse pumpkin harvest flower army gauge'; 
let testAccounts = [
"0x3d86650c50e7f31cf70b7a6f2ec580a8d151e924cba525e0f8c0423c9b4397a8",
"0xf1bd2af92457dc547c9ff988f5f79d79a59e842469db70352448b91475ac0488",
"0xf8ce4f9919ce60f43c005608f8051c7597a66b3c83732e636f8beb9fb5d177eb",
"0xe7c05fb426151520e3b87f6be050a66cddef797c458db9ca28640b29c3cc221a",
"0xdde7c4cc9b1879bcea50e094ff30e0bdade8335e15bc8fa80d981026c673f066",
"0xc0b7ec82987dbed4fb9306836d94d2ac7eb7d00218dbd4c2236de42e13169842",
"0x25b0f020b98c2fac707d2fa8737e2f5f6ead4624fc3be5ea1f877bda8c959038",
"0x4b200c13cce5bdcdc20b98eae474558a5c7c0f7159b5ffd47b46daedb2c945e3",
"0xee98bc094224d01b3b3a2ad276bd11657b3d5ed6eb43d07d5a3e41cc8231f3b0",
"0x97c7fb9bbdb3db745edc9c8e13b114a0dc46932708cf5d386460093b70b01cc2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


