import  { useState } from 'react';

export default function Eone() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
     
      <div
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          fontSize: "40px",
          textDecoration: isHovered ? 'underline' : 'none', 
        }}
        onMouseEnter={() => setIsHovered(true)}  
        onMouseLeave={() => setIsHovered(false)} 
      >
        eOne
      </div>

  
      <div style={{ marginLeft: "50px", marginTop: "50px", fontSize: "30px" }}>
        From Fragmentation to Fusion: Breaking Down the Complexities of Data Management
      </div>

     
      <div style={{ marginTop: "30px", marginLeft: "50px" }}>
        <button style={{ margin: "10px", backgroundColor: "white", color: "black", padding: "10px" }}>UX Research</button>
        <button style={{ margin: "10px", backgroundColor: "white", color: "black", padding: "10px" }}>Brand Strategy</button>
        <button style={{ margin: "10px", backgroundColor: "white", color: "black", padding: "10px" }}>Visual Identity</button>
      </div>
    </div>
  );
}
