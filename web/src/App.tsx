import { useState } from "react";
import { isEnvBrowser } from "./utils/misc";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <div className="h-screen flex items-center justify-center select-none">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Boilerplate Modal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Count: {count}</p>
              <div className="flex gap-2">
                <Button
                  variant="default"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  Increment
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setCount((prev) => prev - 1)}
                >
                  Decrement
                </Button>
                <Button variant="outline" onClick={handleHideModal}>
                  Hide Modal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

export default App;
