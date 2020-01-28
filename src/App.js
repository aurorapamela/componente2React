import React from "react";
import "./App.css";

const BootstrapCard = () => {
  return (
    <div class="card m-5">
      <img
        class="card-img-top"
        src="https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Dave Grohl</h5>
        <p class="card-text">
          David Eric Grohl (born January 14, 1969) is an American singer,
          songwriter, musician and ... guest for a concert at the Anfield
          football stadium in Liverpool, in one of the central events of the
          English city's year as European Capital of Culture.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Dave_Grohl"
          class="btn btn-primary"
        >
          Go to wikipedia
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <BootstrapCard />
    </main>
  );
};

export default App;
