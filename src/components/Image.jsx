import Image from './mouse.jpg'
import image from './key.jpg'
export default function Photo(){
    return  <div style={{display:"flex"}}   >  <div style={{ marginLeft: "100px",marginTop:"90px" }}>
    <img src={Image} style={{ width: "100%", height: "300px" }} />
</div>
<div style={{ marginLeft: "260px",marginTop:"90px" }}> <img src={image} style={{ width: "100%", height: "300px" }}  /> </div>
<br></br>


</div>
    
    
    
  
}