import { Button } from "@/components/ui/button";

function App() {
  return (
    <div>
      <Button
        variant="default"
        size="default"
        onClick={() => console.log("it worked!!!")}
        className="cursor-pointer m-4"
      >
        Click Me
      </Button>
    </div>
  );
}
export default App;
