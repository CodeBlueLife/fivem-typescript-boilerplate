import { useState } from "react";
import { isEnvBrowser } from "./utils/misc";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";

function App() {
  const [visible, setVisible] = useState(isEnvBrowser());
  const [count, setCount] = useState(0);

  useNuiEvent("setVisible", (data: { visible?: boolean }) => {
    setVisible(data.visible || false);
  });

  function handleHideModal() {
    setVisible(false);
    void fetchNui("exit");
  }

  return (
    <>
      {visible && (
        <div className="h-screen flex flex-col items-center justify-center select-none font-sans">
          <div className="bg-[#22232c] text-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Boilerplate Modal</h3>
            <p className="mb-4">Count: {count}</p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCount((prev) => ++prev)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white"
              >
                Increment
              </button>
              <button
                type="button"
                onClick={() => setCount((prev) => --prev)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white"
              >
                Decrement
              </button>
              <button
                type="button"
                onClick={() => handleHideModal()}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white"
              >
                Hide modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
