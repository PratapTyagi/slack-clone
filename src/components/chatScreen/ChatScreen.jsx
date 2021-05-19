import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase";

import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

import Message from "./Message";
import "./ChatScreen.css";

function ChatScreen() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
          </h4>
          <StarBorderOutlined />
        </div>
        <div className="chat__headerRight">
          <InfoOutlined />
          <p>Details</p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ id, data }) => (
          <Message
            key={id}
            message={data.message}
            timestamp={data.timestamp}
            username={data.username}
            userImage={data.userImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatScreen;
