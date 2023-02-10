import React,{useState,useEffect} from 'react';
import Brief from "../components/Sections/Brief";
import app from "../Config";
import ActionButton from "../components/Buttons/ActionButton";
import Jumbo from "../components/Sections/Jumbo";
import Feature from "../components/Sections/Feature";
import Commerce from '@chec/commerce.js';
import SlideBox from '../components/Sections/SliderBox';
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
            <SlideBox items={app.slideshow}/>
            <Brief dark={false} full={false} button={<ActionButton path={`/shop/${app.content[0].path}`} name="Buy Now" />} data={app.content[0]} set="last" image={app.bg[0]}/>  
            <Feature title="Technical. Tailored. Sustainable." body="Premium craftsmanship delivered directly to you. Sustainably produced in limited quantities." items={products}/> 
            <Jumbo style={{marginTop:"-20px"}} button={<ActionButton path="/collections" name="View Collections" />} title={app.jumbo.title} body={app.jumbo.body} image={app.jumbo.image} />
            <Brief dark={true} full={true}  button={<ActionButton path={`/shop/${app.content[0].path}`} name="Buy Now" />}  data={app.content[1]} set="first" image={app.bg[1]}/>   
        </>
  );
};
export default Home;
