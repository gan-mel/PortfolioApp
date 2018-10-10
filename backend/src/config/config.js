var config = {
    production: {
      mongo : {
          url:'ganner_42:Zingin11!@gandb-xsdxz.mongodb.net/test?retryWrites=true',
      }
    },
    default: {
      mongo : {
        url: '*****'
      }
    }
  }
  
  exports.get = function get(env) {
    return config[env] || config.default;
  }