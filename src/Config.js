

import bg from "./images/jumbo1.jpg";
import jumbo from "./images/bg1.jpeg";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import appicon from "./images/icon.png";
import app from "./App.json";

app.icon=appicon;
app.jumbo.image=jumbo;
app.content[0].image=bg;
app.bg=[img1,img2];


export default app;
