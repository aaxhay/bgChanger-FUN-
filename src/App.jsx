import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center rounded-xl inset-x-0 px-2">
        <div className="flex flex-wrap bg-white rounded-full px-3 py-4 justify-center gap-3 shadow-lg">
          <button
            onClick={() => setColor("red")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("olive")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("purple")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("violet")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-5 py-3 rounded-full text-white font-mono"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
