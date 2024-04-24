import { content } from "../index";

function about() {
  const about = document.createElement("div");
  about.id = "about-section";
  about.innerHTML =
    "<h2>About</h2>\
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores rerum incidunt\
     praesentium aspernatur sunt quod quae enim illo dolore? Alias, itaque asperiores? Natus,\
      ipsum labore nostrum perferendis quaerat placeat.Lorem ipsum dolor sit amet consectetur\
      adipisicing elit. Reprehenderit dolorem adipisci quisquam! Numquam, accusamus soluta dolor\
       ullam explicabo doloremque impedit sed? Perspiciatis consectetur sit ipsa accusamus illum,\
        laborum neque dignissimos.<p>";

  content.appendChild(about);
}

export default about;
