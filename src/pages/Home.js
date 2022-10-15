import React,{useState,useEffect} from 'react';
import Brief from "../components/Sections/Brief";
import app from "../Config";
import ActionButton from "../components/Buttons/ActionButton";
import Jumbo from "../components/Sections/Jumbo";
import Message from '../components/Items/Message';
import Feature from "../components/Sections/Feature";
import Commerce from '@chec/commerce.js';
import { Popup } from 'react-mapbox-gl';
const commerce = new Commerce(app.public_key);

const Home = (props) => {
    const [products, setProducts] = useState([]); 
    
    useEffect(function(){
         commerce.products.list().then(function(products){ 
            setProducts(products.data);
        });
      },[]);
  return (
        <>
            <Jumbo style={{marginTop:"-20px"}} button={<ActionButton path="/collections" name="View Collections" />} title={app.jumbo.title} body={app.jumbo.body} image={app.jumbo.image} />
           
         <Feature title="New In" body="Sera Jacobs Summer 23" items={products}/> 
            <div className='padding'>
          <Brief dark={true} full={true} button={<ActionButton path={`/shop/${app.content[0].path}`} name="Buy Now" />} data={app.content[0]} set="last" image={app.bg[0]}/>  
                <br/> 
                <br/> 
                <Brief dark={false} full={true}  data={app.content[1]} set="first" image={app.bg[1]}/>   
           </div>
              </>
  );
};
export default Home;
