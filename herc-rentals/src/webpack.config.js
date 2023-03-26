module.exports = {
   
    resolve: {
      fallback: {
        "crypto": false,
        "stream": false,
        "timers": false,
        "util": require.resolve("util/"),
        "url": require.resolve("url/")
      }
    }
  };