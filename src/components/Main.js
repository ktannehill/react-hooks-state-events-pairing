import { useState } from "react";

const Main = ({ 
  title, 
  views, 
  createdAt, 
  upvotes, 
  downvotes, 
  toggleHideComments, 
  hideComments 
}) => {
  const [incrementUpvotes, setIncrementUpvotes] = useState(upvotes)
  const [incrementDnvotes, setIncrementDnvotes] = useState(downvotes)

  const handleUpvote = () => {
    setIncrementUpvotes(currentUpvotes => currentUpvotes += 1)
  }

  const handleDownvote = () => {
    setIncrementDnvotes(currentDnvotes => currentDnvotes += 1)
  }

  return (
    <main>
      <h1>{title}</h1>
      <p>{views} | {createdAt}</p>
      <button onClick={handleUpvote}>{incrementUpvotes} 👍</button>
      <button onClick={handleDownvote}>{incrementDnvotes} 👎</button>
      <button onClick={toggleHideComments}>
        {hideComments ? "Show Comments" : "Hide Comments"}
      </button>
    </main>
  )
}

export default Main