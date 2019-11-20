import React, { Suspense, StrictMode } from "react";
import "./App.css";
// import Jokes from "./components/jokes";
import Loading from "./components/loading";

import { unstable_next } from "scheduler";

const Jokes = React.lazy(() => import("./components/jokes"));

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <StrictMode>
        <Suspense fallback={<Loading />}>
          <div>
            <label>
              <input
                type="checkbox"
                checked={displayJokes}
                // onChange={() => setDisplayJokes(!displayJokes)}
                onChange={() =>
                  unstable_next(() => setDisplayJokes(!displayJokes))
                }
                autoFocus
              />
              Display jokes
            </label>
          </div>
          {displayJokes && <Jokes url="/api/jon-skeet.json" />}
          <div>
            <a
              href="http://timeslicing-unstable-demo.surge.sh/"
              target="async-demo"
            >
              Async demo
            </a>
          </div>
        </Suspense>
      </StrictMode>
    </div>
  );
};

export default App;
