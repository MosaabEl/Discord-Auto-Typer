const dc = require('./discord');
const { sig } = require("./utils/sig");


(async () => {
    sig();

    await dc.initialize();
    /* 
    */
    await dc.login('email', 'password')

    await dc.likeChannelProcess('919886516707270717', '932935795818524682', 1) // 1 = 1 minute
   
    debugger;
    
})();
