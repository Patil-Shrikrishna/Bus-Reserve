import Button from "./components/Button";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import SearchBar from "./components/SearchBar";

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
        <Rating rating="4.5" />
        <SearchBar name="From" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
