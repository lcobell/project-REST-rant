const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <img src={data.place.pic} alt={data.place.name} />

        <h1>{data.place.name}</h1>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>
        <p>Not yet rated</p>
        <h3>Description</h3>
        <p>Located where restaurants are!</p>
      </main>

      <h2>Comments</h2>
      {comments}
      <form method="POST" action={`/places/$data.id}?_method=PUT`}>
        <h2>Leave a comment!</h2>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            className="form-control"
            id="author"
            name="author"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            className="form-control"
            id="content"
            name="content"
            type="textarea"
            placeholder="Leave your review here."
          />
        </div>
        <div className="form-group">
          <label htmlFor="stars">Star Rating</label>
          <input
            className="form-control"
            id="stars"
            name="stars"
            type="range"
            min="0"
            max="5"
            step=".5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rant">Is this a rant!?</label>
          <input id="rant" name="rant" type="checkbox" />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Add Comment"
        ></input>
      </form>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
