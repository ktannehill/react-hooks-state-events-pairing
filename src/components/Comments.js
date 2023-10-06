import { useState } from "react";

import Comment from "./Comment"

const Comments = ({ comments }) => {
    const [searchBy, setSearchBy] = useState("")
    const [filteredComments, setFilteredComments] = useState(comments)
    
    const handleChange = (e) => {
        setSearchBy(searchBy => searchBy = e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const filteredComments = comments.filter(comment => (
            comment.user.toLowerCase().includes(searchBy.toLowerCase())
        ))
        setFilteredComments(currentComments => currentComments = filteredComments)
    }

    const handleRemove = (id) => {
        const remainingComment = filteredComments.filter(comment => comment.id !== id)
        setFilteredComments(currentComments => currentComments = remainingComment)
    }

    const displayComments = filteredComments.map(comment => (
        <Comment key={comment.user} comment={comment} handleRemove={handleRemove} />
    ))

    return (
        <div id="comments">
            <h2>{filteredComments.length} Comments</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search for user:</label>
                <input type="text" name="search" id="search" value={searchBy} onChange={handleChange}></input>
                <input type="submit" value="Search"/>
            </form>
            {displayComments}
        </div>
  )
}

export default Comments