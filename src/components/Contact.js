import { useRef } from "react";

export default function Contact() {
  const firstName = useRef();

  return (
    <div>
      <input type="text" ref={firstName} />
      <button onClick={()=>console.log(firstName)}>print firstName</button>
    </div>
  );
}
