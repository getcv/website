import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";

var imgLoad = imagesLoaded(document.querySelector("[data-scroll-container]"));

imgLoad.on("always", function (instance) {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
});
