const client  = new Paho.MQTT.Client("test.mosquitto.org", 8080, "unique-key-101");
//Area Void or Functions


const lost = (obj) =>{
   console.log("Connection has been unsuccessful");
}

const messageReceiver = (msg) =>{
   console.log("Message :", msg.payloadString );
   var tot = msg.payloadString;



}

const conNect = () =>{
   console.log("Connection made with broker!");
  
   client.subscribe("main/test");
  
   console.log("hello");
   ///Sending the message    
   
   msg = new Paho.MQTT.Message("Hello World!");
   msg.destinationName = "main/test";
   client.send(msg);

   
//    setInterval(()=>{
//        msg = new Paho.MQTT.Message("Hello World!");
//        msg.destinationName = "main/test";
//        client.send(msg);
//    }, 2000)
   

}

//Error Handler
client.onConnectionLost = lost;
client.onMessageArrived = messageReceiver;

//Area Connection


client.connect({onSuccess:conNect });


