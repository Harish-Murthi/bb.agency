import dev from './dev.jpg'
export default function NewPhoto(){
    return <div>
        <div style={{marginLeft:"30%",marginTop:"50px"}}>
        <img src={dev}  style={{ width: "90%", height: "600px" }} />
    </div>
    <div style={{marginTop:"50px",marginLeft:"30%",fontSize:"30px"}}>ThoughtSpot</div>
    <div style={{marginTop:"30px",marginLeft:"30%",fontSize:"20px",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}} >Elevating the experience of the world most accessible data analytics tool.</div>
   
   <div style={{marginLeft:"30%",marginTop:"20px"}}><button style={{
            margin: "10px",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
          }}>Market Research</button> <button  style={{
            margin: "10px",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
          }}>UI Design</button> <button style={{
            margin: "10px",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
          }}>Product Design</button></div> </div>
}