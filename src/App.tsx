import { Button } from "@/components/ui/button";

import {
  About,
  // Cart,
  // Checkout,
  // Error,
  // HomeLayout,
  // Landing,
  // Login,
  // Orders,
  // Products,
  // Register,
  // SingleProduct,
} from "./pages";

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
      <About/>
    </div>
  );
}
export default App;
