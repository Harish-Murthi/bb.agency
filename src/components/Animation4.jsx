import  { useState, useEffect } from 'react';

export default function TextSwitcher() {
  const [text, setText] = useState("Deloitee");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setText((prevText) => (prevText === "Deloitee" ? "Kinetik" : "Deloitee"));
        setFade(true);
      }, 500);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1
        style={{
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s",
          textAlign: "center",
          display:"flex ",
          marginLeft:"170px",
          marginTop:"100px",
         fontFamily:"Arial, Helvetica, sans-serif"
        }}
      >
        {text}
      </h1>
    </div>
  );
}
