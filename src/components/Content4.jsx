import games from "./game.jpg";
import web from "./web.jpg";
import web1 from "./web2.jpg";
import web2 from "./web3.jpg";
import "./styles.css"; // Assuming you have the CSS in this file

export default function Content4() {
  return (
    <div style={{ backgroundColor: "black", marginTop: "90px", height: "2500px" }}>
      <div
        className="text-hover"
        style={{
          color: "white",
          marginLeft: "60px",
          position: "relative",
          left: "40%",
          top: "60px",
          fontSize: "30px",
        }}
      >
        Our Approach
      </div>

      <div
        className="text-hover"
        style={{
          color: "white",
          marginTop: "80px",
          marginLeft: "20%",
          fontSize: "80px",
        }}
      >
        Where others see roadblocks, we uncover opportunities
      </div>
      <div style={{ marginTop: "100px", marginLeft: "70px", display: "flex" }}>
        <img src={games} style={{ width: "50%", height: "500px" }} />
        <div
          style={{
            color: "white",
            marginLeft: "60px",
            fontSize: "30px",
            wordSpacing: "10px",
            marginRight: "40px",
          }}
        >
          Through rich collaboration, we delve into your unique challenges and
          opportunities. This understanding shapes our comprehensive approach from
          research and strategic direction to brand development and website or product
          deployment. We’re with you every step of the way, driving holistic change and
          creating lasting value.
          <div style={{ marginTop: "40px", marginLeft: "10px" }}>
            <button
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                backgroundColor: "white",
                color: "black",
                fontSize: "30px",
                borderRadius: "30px",
                paddingLeft: "35px",
                paddingRight: "35px",
              }}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
      <hr style={{ color: "white", marginTop: "10%" }}></hr>
      <div
        className="text-hover"
        style={{
          color: "white",
          fontSize: "70px",
          marginTop: "50px",
          marginLeft: "50px",
          fontWeight: "bold",
        }}
      >
        Articles & News
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={web}
          style={{
            width: "25%",
            height: "300px",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        />
        <div style={{ marginLeft: "50px" }}>
          <img
            src={web2}
            style={{
              width: "100%",
              height: "300px",
              marginTop: "50px",
              marginLeft: "50px",
            }}
          />
        </div>
        <div style={{ marginLeft: "50px" }}>
          <img
            src={web1}
            style={{
              width: "70%",
              height: "300px",
              marginTop: "50px",
              marginLeft: "90px",
              marginRight: "90px",
            }}
          />
        </div>
      </div>
      <div
        className="text-hover"
        style={{
          color: "white",
          display: "flex",
          marginLeft: "50px",
          marginTop: "30px",
          fontSize: "20px",
        }}
      >
        BB Team <div style={{ marginLeft: "420px" }}>Dominik Kosic </div>
        <div style={{ marginLeft: "380px" }}>Emma Dolezal</div>
      </div>
      <div
        className="text-hover"
        style={{
          color: "white",
          fontSize: "33px",
          display: "flex",
          marginLeft: "50px",
          marginTop: "30px",
        }}
      >
        6 ways a Retainer Model can Optimize your product design process
        <div style={{ marginLeft: "120px", marginRight: "40px" }}>
          Streamlining Blog Post Bulk Upload: From Google docs drafts to
          WordPress website posts with N8N and AI
        </div>
        <div style={{ marginLeft: "10px", marginRight: "150px" }}>
          Nurturing Growth through Feedback in a Remote Environment
        </div>{" "}
      </div>

      <div
        style={{
          color: "white",
          marginTop: "40px",
          marginLeft: "50px",
          display: "flex",
        }}
      >
        <button style={{ padding: "10px" }}>Work</button>{" "}
        <div style={{ marginLeft: "27%", display: "flex" }}>
          <button style={{ padding: "10px" }}>Tech</button>{" "}
          <div style={{ marginLeft: "520px" }}>
            <button style={{ padding: "10px" }}>Culture</button>
          </div>
        </div>
      </div>
      <div style={{color:"white",marginLeft:"50px",marginTop:"180px",fontSize:"40px"}}>
      Stay tuned into our latest endeavors, insightful articles,
      <br></br> and the industry trends. Fresh insights delivered weekly. 
      </div>
      <div style={{marginTop:"55px",marginLeft:"50px",}}><button style={{padding:"28px",borderRadius:"30px",backgroundColor:"white",color:"black",fontSize:"30px"}}>Keep Reading</button></div>
    </div>
  );
}
