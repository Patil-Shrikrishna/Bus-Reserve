import Button from "./components/Button";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col m-10 gap-5">
        <Heading heading="Primary Heading" primary={true} />
        <Heading heading="Primary Heading" />
        <Button onClick={() => console.log("Hello")} name="Login" />
      </div>
    </div>
  );
}

export default App;
