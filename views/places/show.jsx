const React = require("react");
const Def = require("../default");

function show(data) {
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
      <div>Comments</div>
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
