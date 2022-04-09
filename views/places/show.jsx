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
      <p>No comments yet</p>
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
