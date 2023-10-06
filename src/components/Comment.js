import { useState } from "react";

const Comment = ({comment, handleRemove}) => {
    const [incrementUpvotes, setIncrementUpvotes] = useState(0)
    const [incrementDnvotes, setIncrementDnvotes] = useState(0)

    const handleUpvote = () => {
        setIncrementUpvotes(currentUpvotes => currentUpvotes += 1)
    }

    const handleDownvote = () => {
        setIncrementDnvotes(currentDnvotes => currentDnvotes += 1)
    }

    return (
        <span key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            <button onClick={handleUpvote}>{incrementUpvotes} 👍</button>
            <button onClick={handleDownvote}>{incrementDnvotes} 👎</button>
            <button onClick={() => handleRemove(comment.id)}>Remove Comment</button>
        </span>
    )
}

export default Comment