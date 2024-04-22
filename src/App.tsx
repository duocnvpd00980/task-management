import "./styles/index.css";
import { Rectangle, Type } from "./components/Atoms";
import Button from "./components/Molecules/Button";

function App() {
  return (
    <>
      <Rectangle transform={{ y: 60 }}>
        <Type as="h1">Hello</Type>
        <Button text="Hello" classList="primary" />
        <Button text="Hello" classList="primary-active" />
        <Button text="Hello" classList="secondary" />
        <Button text="Hello" classList="secondary-active" />
      </Rectangle>
    </>
  );
}

export default App;
