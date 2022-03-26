const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/roasted-crab.jpeg"
            alt="RPM Steak's Coal Roasted Crab"
            height="700"
            width="700"
          />
          <div>
            Photo Courtesy{" "}
            <a href="https://photos.singleplatform.com/40c050dfcfae3e4697cb13dbe50e73959b4b8479.jpg">
              {" "}
              RPM Steak
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
