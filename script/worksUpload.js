/* <div class="work__videoContainer">
  <video
    loop
    muted
    poster="./src/works/motion graphic/poster/1_low.png"
    onmouseover="this.play()"
    onmouseout="this.load();this.currentTime=0;"
  >
    <source src="./src/works/motion graphic/MW_preview.mp4" type="video/mp4" />
  </video>
</div>; */

let path = "./src/works/motion graphic/MW_preview.mp4";
let posterPath = "./src/works/motion graphic/poster/1_low.png";

function createItem(posterPath, path) {
  let itemContainer = document.createElement("div");
  itemContainer.className = "work__videoContainer";

  let parent = document.querySelector("#motionGraphic");
  parent.appendChild(itemContainer);

  let item = document.createElement("video");
  itemContainer.appendChild(item);

  item.setAttribute("poster", posterPath);
  item.setAttribute("src", path);
  item.setAttribute("loop", "");
  item.setAttribute("muted", "");
  item.setAttribute("type", "video/mp4");
  item.setAttribute("onmouseover", "this.play()");
  item.setAttribute("onmouseout", "this.load();this.currentTime=0;");
}