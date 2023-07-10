import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function Room() {
  const {roomId} = useParams();

  function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345wertupoihasdghkzxcvbnmqwertyuioasdfghjkl',
      maxPos = chars.length,
      i;
      len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  let myMeeting = async (element) => {
    const appID = 403113409;
    const serverSecret = 'ad4d7c4cab35827c2e370aacb56c4a0b';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId, randomID(5),randomID(5));
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    console.log(zp)
    zp.joinRoom({
      container:element,
      scenario: {
        mode : ZegoUIKitPrebuilt.LiveStreaming,
        // config: {
        //   role,
        // },
      },
      sharedLinks : [{
        name: "Copy Link",
        url : `http:localhost:3000/room/${roomId}`
      }]
    });


  };
  return (
    <div>
      <h1 ref={myMeeting}></h1>
    </div>
  )
}

export default Room
