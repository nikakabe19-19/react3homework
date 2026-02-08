import Eye from "../../../assets/Eye.svg";
import Remove from "../../../assets/Remove.svg";
import Vector from "../../../assets/Vector.png";
import Yellow from "../../../assets/Yellow.svg";

function New_Box() {
  return (
    <>
      <div className="new_box">
        <h1 className="header">Summary</h1>
        <div className="reaction_box">
          <div className="react_box">
            <div className="vector">
              <img className="image_box" src={Vector} alt="" />
              <h1 className="reac_box">Reaction</h1>
            </div>
            <div className="numero_box">
              <h1 className="num_box">
                <span className="span_2box"> 80</span> / 100
              </h1>
            </div>
          </div>
          <div className="memory_box">
            <div className="brain_box">
              <img className="image_box" src={Yellow} alt="" />
              <h1 className="mem_box">Memory</h1>
            </div>
            <div>
              <h1 className="num1_box">
                <span className="span_2box"> 92 </span> / 100
              </h1>
            </div>
          </div>
          <div className="verbal_box">
            <div className="remove_box">
              <img className="image_box" src={Remove} alt="" />
              <h1 className="ver_box">Verbal</h1>
            </div>
            <div>
              <h1 className="num2_box">
                <span className="span_2box"> 61 </span> / 100
              </h1>
            </div>
          </div>
          <div className="visual_box">
            <div className="eye_box">
              <img className="image_box" src={Eye} alt="" />
              <h1 className="vis_box">Visual</h1>
            </div>
            <div>
              <h1 className="num3_box">
                <span className="span_2box"> 73 </span> / 100
              </h1>
            </div>
          </div>
        </div>
        <div className="last_stop">
          <h1 className="cont_box">Continue</h1>
        </div>
      </div>
    </>
  );
}
export default New_Box;
