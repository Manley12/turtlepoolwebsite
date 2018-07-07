var poolHost = "35.184.215.232";

var api = "http://" + poolHost + ":8117";

var api_blockexplorer = "http://"+ poolHost +":11899";

var irc = "";

var email = "";

var cryptonatorWidget = ["{symbol}-BTC", "{symbol}-USD", "{symbol}-EUR"];

var easyminerDownload = "https://github.com/zone117x/cryptonote-easy-miner/releases/";

var blockchainExplorer = "https://blocks.turtle.link/?hash={id}#blockchain_block";

var transactionExplorer = "https://blocks.turtle.link/?hash={id}#blockchain_transaction";

function reloadPoolHostURLs(){
    api = "http://" + poolHost + "8117";
    api_blockexplorer = "http://"+ poolHost +":11899";
    //blockchainExplorer = "http://"+ poolHost +"/?hash={id}#blockchain_block";
    //transactionExplorer = "http://"+ poolHost +"/?hash={id}#blockchain_transaction";
}

var themeCss = "";

var networkStat = {
    "trtl": [
        /*["eu.turtlepool.space", "http://eu.turtlepool.space:8117"],
        ["us.turtlepool.space", "http://us.turtlepool.space:8117"],
        ["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
        ["slowandsteady.fun", "http://slowandsteady.fun:8119"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api/"],
        ["pool.turtleco.in", "https://pool.turtleco.in/api/"],
        ["xk.is", "https://xk.is/api/"],
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api/"],
        ["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"]
    ]*/
        ["eu.turtlepool.space", "http://eu.turtlepool.space/api"],
        ["us.turtlepool.space", "http://us.turtlepool.space/api"],
        ["hk.turtlepool.space", "http://hk.turtlepool.space/api"],
        //["turtlecoinpool.ddns.net", "http://turtlecoinpool.ddns.net:8127"],
        ["slowandsteady.fun", "http://slowandsteady.fun:8119"],
        ["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
        ["pool.turtleco.in", "https://pool.turtleco.in/api"],
        ["auspool.turtleco.in", "https://auspool.turtleco.in/api"],
        //["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"],
        ["ny.minetrtl.us", "http://ny.minetrtl.us:8117"],
        ["z-pool.com", "https://z-pool.com/api"],
        ["xk.is", "https://xk.is/api"],
        //["cryptoknight.cc/turtle", "http://78.46.85.142:6229"],
        //["pool.trtl.me", "http://pool.trtl.me:8117"],
        ["trtlpool.ninja", "http://trtlpool.ninja:8117"],
        ["trtl.ninja", "https://trtl.ninja/api"]
    ]
};