// import "./message.css";
// import { format } from "timeago.js";

// export default function Message({ message, own }) {
//   return (
//     <div className={own ? "message own" : "message"}>
//       <div className="messageTop">
//         <img
//           className="messageImg"
//           src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <p className="messageText">{message.text}</p>
//       </div>
//       <div className="messageBottom">{format(message.createdAt)}</div>
//     </div>
//   );
// }

import "./message.css";
//import { format } from "timeago.js";

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">Hello! Alx Chief, How's your debugging going?</p>
      </div>
      <div className="messageBottom">6 hours ago</div>
    </div>
  );
}
