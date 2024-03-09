import { useRef, useState } from "react";

const ChangeText = () => {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeText = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      const newText = inputRef.current.value;
      setText(newText);
    }
  };

  return (
    <div className="changetext">
      <p>{text}</p>
      <input type="text" placeholder="skriv en text" ref={inputRef} />
      <button onClick={handleChangeText}>Change text</button>
    </div>
  );
};

export default ChangeText;
