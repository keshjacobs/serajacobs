import "../../css/Products.css";
import Animate from "../../Motion";

function Mirror(props) {
  return (
    <Animate>
            <div className='thumb-image' style={{backgroundImage:"url("+props.url+")"}}></div>
    </Animate>
  );
}

export default Mirror;