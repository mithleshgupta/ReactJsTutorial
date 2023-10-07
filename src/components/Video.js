import "./Video.css";

import useVideoDispatch from "../hooks/VideoDispatch";
import { useEffect } from "react";
function Video({
  title,
  channel = "Ankit",
  views,
  time,
  verified,
  id,
  children,

  editVideo,
}) {
  const dispatch = useVideoDispatch();

  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("video player", id);
  //   }, 3000);

  //   return () => {
  //     clearInterval(idx);
  //   };
  // }, [id]);

  return (
    <>
      <div className="container">
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/200/200`} alt="dummy" />
        </div>
        <div className="title">{title}</div>

        <div className="channel">
          {channel}
          {verified ? "✅" : null}{" "}
        </div>

        <div className="views">
          {views} Views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
