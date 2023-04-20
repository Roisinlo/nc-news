function CommentsList({ comments }) {
  return (
    <section className="commentsContainer">
      {comments.map((comment) => {
        return (
            <div className="comment" key={comment.comment_id}>
                <p>Comment: {comment.body}</p>
                <p>By: {comment.author}</p>
                <p>Likes: {comment.votes}</p>
                <button >Like this comment</button>
            </div>
      )})}
    </section>
  );
}
export default CommentsList;
