import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-2 space-y-2.5 shadow-md shadow-gray-500 bg-gray-200 rounded-md">
        <h1 className="text-5xl font-bold text-center opacity-70 ">
          Count: {count}
        </h1>
        <div className="flex justify-center">
          <button
            className="px-3 py-2 text-2xl font-semibold text-white uppercase bg-blue-600 active:bg-blue-800 active:scale-95 outline-0 rounded-2xl"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
