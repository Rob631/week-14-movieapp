import { useState } from "react";

function ReviewForm(){
    const[comment, setComment] = useState("");
    const[comments, setComments] = useState([]);

    const onClickHandler = () => {
        setComments((comments) =>[...comments, comment]);
    };
    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };
    return(
        <div>
            <div className="comment-flexbox">
                <h3 className="comment-text">Leave a Review!</h3>
                <textarea
                    value={comment}
                    onChange={onChangeHandler}
                    className="input-box"
                />
                <button onClick={onClickHandler} className="comment-button">
                    Submit
                </button>
            </div>
            {comments.map((text)=>(
                <div className="comment-container">{text}</div>
            ))}
        </div>
        
    )
}
export default ReviewForm; 