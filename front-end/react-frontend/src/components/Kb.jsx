import React, { useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function App(props) {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  useEffect(() => {
    setInput(props.text);
    keyboard.current.setInput(props.text);
  }, []);

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    // alert(input);
    // setInput(input);
    // keyboard.current.setInput(input);
    // setInput((input) => {
    //   keyboard.current.setInput(currInput);
    // });
  };

  return (
    <div className="App">
      <textarea
        className="form-control"
        cols="50"
        rows="5"
        onChange={onChangeInput}
        value={input}
      />
      <br />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default App;
