const WebSocket = require("ws");

const ws = new WebSocket("wss://osmarks.tk/skynet/connect");

ws.on('message',(d)=>console.log(JSON.parse(d)["message"]))

ws.on('open',function opened() {
	ws.send(JSON.stringify({"type":"open","channel":"switchcraft-chat"}));
});

