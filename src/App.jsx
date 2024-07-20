import "./App.css";
import Select from "react-select";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <Select options={options} />
    </>
  );
}

export default App;
