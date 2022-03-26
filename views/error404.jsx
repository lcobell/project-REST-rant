const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/142282110_157741076117808_6193331715204126229_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1RKtiY385yUAX8xohT6&_nc_ht=scontent-ort2-1.xx&oh=00_AT_O2CzclHTAC9X8lNf809mVSm4vjBgJIWAoxuyxo_x0Zg&oe=62645866"
            alt="Pre run pic with my boys Bru and Neltje"
          />
          <div>Photo by Alicia Castaneda</div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
