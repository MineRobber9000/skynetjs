const WebSocket = require("ws");

const ws = new WebSocket("wss://osmarks.tk/skynet/connect");

ws.on('message',(d)=>console.log(d))

ws.on('open',function opened() {
	ws.send(JSON.stringify({"type":"open","channel":"*"}));
	ws.send(JSON.stringify({"type":"message","channel":"default","message":"this is a never-ending fuckwad"}));
});

