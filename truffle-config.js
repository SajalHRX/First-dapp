

module.exports = {
  

  networks: {
      development: {
        host: "127.0.0.1",
        port: 7545, 
        network_id: "*", 
    },
    
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
      
    }
  },

  // To install lite-server 
//   npm install --save-dev lite-server
  
  // }
};
