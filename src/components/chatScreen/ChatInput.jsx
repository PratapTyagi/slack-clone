import { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../context/StateProvider";

import "./ChatInput.css";
function ChatInput({ channelName, channelId }) {
  const [input, setinput] = useState("");
  const [{ user }] = useStateValue();
  console.log(
    user.photoUrl,
    user.displayName,
    firebase.firestore.FieldValue.serverTimestamp()
  );
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
          message: input,
          userImage: !user.photoURL ? "" : user.photoURL,
          username: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
