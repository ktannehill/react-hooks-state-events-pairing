import { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Main from "./Main.js";

function App() {
  // console.log("Here's your data:", video);
  const [hideComments, setHideComments] = useState(false)

  const toggleHideComments = () => {
    setHideComments(currentState => currentState = !currentState)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    {/* start new components */}

    <Main {...video} hideComments={hideComments} toggleHideComments={toggleHideComments} />
    {hideComments ? null : <Comments {...video} />}

    {/* end new components */}
    </div>
  );
}

export default App;
