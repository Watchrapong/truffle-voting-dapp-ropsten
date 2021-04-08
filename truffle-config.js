var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "2af9d0ecfe494d44bf54963a71bffdec";
var mnemonic = "verb dentist ranch lounge virtual code scrap fruit risk exchange fame divide";
var address = "0x40Ca61717ab8A5894791033396D838f23C0BAB96"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  // networks: {
  //   development: {
  //     host: "127.0.0.1",
  //     port: 7545,
  //     network_id: "*" // Match any network id
  //   },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      from: address,
      gas: 4700388
    }
  
};
