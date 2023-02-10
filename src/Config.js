

import bg from "./images/jumbo1.jpg";
import jumbo from "./images/bg/jumbo.webp";
import about from "./images/ads/boss.jpeg";
import img1 from "./images/ads/1.jpeg";
import img2 from "./images/ads/2.webp";
import slider1 from "./images/sliders/1.jpeg";
import slider2 from "./images/sliders/2.jpg";
import appicon from "./images/icon.png";
import app from "./App.json";
import ActionButton from "./components/Buttons/ActionButton";

app.icon=appicon;
app.jumbo.image=jumbo;
app.about.image=about;
app.content[0].image=bg;
app.bg=[img1,img2];

app.slideshow[0].image=slider1;
app.slideshow[0].button=<ActionButton path="/collections" name="View Collections" />

app.slideshow[1].image=slider2;
app.slideshow[1].button=<ActionButton path="/collections" name="View Collections" />

export default app;
