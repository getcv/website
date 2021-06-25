import LocomotiveScroll from "locomotive-scroll";
import imagesLoaded from "imagesloaded";

var imgLoad = imagesLoaded(document.querySelector("[data-scroll-container]"));

imgLoad.on("always", function (instance) {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  document.querySelector('.header--cta').addEventListener("click", () => {
    scroll.scrollTo(document.querySelector('#mc-embedded-subscribe-form'), {
      offset: -200,
      callback: () => {
        document.querySelector('#mce-EMAIL').focus();
      }
    })
  })
});
