import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase";

import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

import "./ChatScreen.css";

function ChatScreen() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
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
      <h1>Hello0</h1>
      <h1>Hello1</h1>
      <h1>Hello2</h1>
      <h1>Hello3</h1>
      <h1>Hello4</h1>
      <h1>Hello5</h1>
      <h1>Hello6</h1>
      <h1>Hello7</h1>
      <h1>Hello8</h1>
      <h1>Hello9</h1>
      <h1>Hello10</h1>
      <h1>Hello11</h1>
      <h1>Hello12</h1>
      <h1>Hello13</h1>
      <h1>Hello14</h1>
      <h1>Hello15</h1>
      <h1>Hello16</h1>
      <h1>Hello17</h1>
    </div>
  );
}

export default ChatScreen;
