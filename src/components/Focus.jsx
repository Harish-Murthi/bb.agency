import text from './program.jpg'
import text2 from './program2.png'
export default function Focus(){
    return <div style={{display:"flex"}}>
        <div style={{display:"block"}}>
        <img src={text}  style={{ width: "60%", height: "400px" ,marginLeft:"150px",marginTop:"180px"}}/>
    </div> 
  




    <div><img src={text2}  style={{ width: "60%", height: "400px" ,marginLeft:"150px",marginTop:"180px"}}/></div>

    
    </div>
}

