import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import RadioButton from "./components/RadioButton";
import Rating from "./components/Rating";
import SearchBar from "./components/SearchBar";

function App() {
  const gender = ["Female", "Male", "Other"];
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
        <CheckBox label="Morning session" />
        <RadioButton label="Female" />
        <Dropdown list={gender} label="Gender" />
        <Footer />
      </div>
    </div>
  );
}
export default App;
