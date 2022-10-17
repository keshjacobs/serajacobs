

import bg from "./images/jumbo1.jpg";
import jumbo from "./images/bg/jumbo.webp";
import about from "./images/ads/boss.jpeg";
import img1 from "./images/ads/1.jpeg";
import img2 from "./images/ads/2.webp";
import appicon from "./images/icon.png";
import app from "./App.json";

app.icon=appicon;
app.jumbo.image=jumbo;
app.about.image=about;
app.content[0].image=bg;
app.bg=[img1,img2];


export default app;
