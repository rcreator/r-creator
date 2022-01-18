import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Phone, PhoneDisabled } from "@material-ui/icons";
import ContextProvider from "../../components/SocketContext";
import { Avatar } from "@material-ui/core";

function VideoPlayer() {
  const [idToCall, setIdToCall] = useState("");
  const {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    callEnded,
    answerCall,
    me,
    userName,
    leaveCall,
    callUser,
  } = ContextProvider();

  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div className="absolute h-screen w-screen bg-gray-500/70"> </div>
      )}
      <div className="container d-flex gap-3 flex-column justify-content-center align-items-center">
        <h4 className="text-center py-3 w-1/2 border border-dark m-2 rounded-lg">
          Video Chat
        </h4>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center col-12">
          {stream && (
            <div className="col col-sm-9 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h3>{name || "Name"}</h3>
              <video playsInline muted ref={myVideo} autoPlay className="p-4" />
            </div>
          )}

          {callAccepted && !callEnded && (
            <div className="col col-sm-9 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h3>{call.name || "Name"} </h3>
              <video playsInline ref={userVideo} autoPlay className="p-4" />
            </div>
          )}
        </div>
      </div>

      <div className="container d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="d-flex gap-3 flex-column col-12 col-sm-6 p-4">
          <input
            value={name}
            onChange={(e) => userName(e)}
            className="border p-2 border-dark rounded-lg"
            placeholder="Enter Your Name"
          />
          <CopyToClipboard text={me}>
            <button className="btn-primary p-2 rounded"> Copy Your ID </button>
          </CopyToClipboard>
        </div>

        <div className="d-flex gap-3 flex-column col-12 col-sm-6 p-4">
          <input
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            className="border p-2 border-dark rounded-lg"
            placeholder="Enter Caller Id"
          />
          {callAccepted && !callEnded ? (
            <button className="btn-danger p-2 rounded" onClick={leaveCall}>
              <PhoneDisabled />
              Hang Up
            </button>
          ) : (
            <button
              className="btn-danger p-2 rounded"
              onClick={() => callUser(idToCall)}
            >
              <Phone />
              Call
            </button>
          )}
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 left-0 mx-auto ">
        {call.isReceivedCall && !callAccepted && (
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-10 border border-dark mb-2 bg-black text-white">
            <Avatar />
            <h5>{call.name}</h5>
            <button
              className="btn-primary px-5 py-2 rounded-lg"
              onClick={answerCall}
            >
              {" "}
              Answer{" "}
            </button>
            <button
              className="btn-danger px-5 py-2 rounded-lg"
              onClick={answerCall}
            >
              {" "}
              Denied{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
