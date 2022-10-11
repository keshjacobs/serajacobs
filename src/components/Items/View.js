import "../../css/Products.css";
import { Link } from 'react-router-dom';
import Animate from "../../Motion";

function View(props) {
  return (
    <Animate>
         <Link className='product' to={'/shop/'+props.data.name}>
            <div className='product-image' style={{backgroundImage:"url("+(props.data.assets[0] ? props.data.assets[0].url:null)+")"}}></div>
            <h3>{props.data.name}</h3>
        </Link>
    </Animate>
  );
}

export default View;