import * as React from "react";
import ToggleButton from "./components/ToggleButton";

const App: React.FC = () => {
  return (
    <main>
      {/* toggler component  */}
      <ToggleButton />
      <h1>It`s a light theme</h1>
    </main>
  );
};

export default App;
