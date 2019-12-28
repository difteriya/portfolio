$(".tabs-content-item").hide();
$(".tabs-content-item")
  .eq(0)
  .css("display", "grid");

$(".title-tabs-item").on("click", function() {
  $(".title-tabs-item.active").removeClass("active");
  $(this).addClass("active");
  $(".tabs-content-item").hide();
  $(".tabs-content-item[data-service =" + $(this).data("service") + "]").css(
    "display",
    "grid"
  );
});

$(function() {
  $("#mix-container").mixItUp({
    animation: {
      effects: "fade translateZ(100px) rotateZ(80deg) rotateY(80deg) scale(0.1)"
    }
  });
});


const slider = () => {
  const leftBtn = document.querySelector(".left-slide");
  const rightBtn = document.querySelector(".right-slide");
  const slides = document.querySelectorAll(".reviewer-img");
  const slidesArr = Array.prototype.slice.call(slides);
  const reviews = document.querySelectorAll(".review-text");
  const bigReview = document.querySelectorAll(".big-reviewer");

  let countIndex = slides.length - 1;
  let countSlide = 2;

  const clearActive = () => {
    const clearActiveReviewer = document.querySelector(".active-reviewer");
    const clearActiveReview = document.querySelector(".active-review");
    const clearActiveBigReview = document.querySelector(".active-big-review");

    clearActiveReviewer.classList.remove("active-reviewer");
    clearActiveReview.classList.remove("active-review");
    clearActiveBigReview.classList.remove("active-big-review");
  };

  const setActive = index => {
    slides[index].classList.add("active-reviewer");
    reviews.forEach(elem => {
      if (elem.dataset.review === slides[index].dataset.review) {
        elem.classList.add("active-review");
      }
    });
    bigReview.forEach(elem => {
      if (elem.dataset.review === slides[index].dataset.review) {
        elem.classList.add("active-big-review");
      }
    });
  };

  slides.forEach(elem => {
    elem.addEventListener("click", () => {
      clearActive();

      countSlide = slidesArr.indexOf(elem);

      setActive(countSlide);
    });
  });

  leftBtn.addEventListener("click", () => {
    clearActive();

    if (countSlide === 0) {
      countSlide = countIndex;
    } else {
      countSlide -= 1;
    }
    setActive(countSlide);
  });

  rightBtn.addEventListener("click", () => {
    clearActive();

    if (countSlide === countIndex) {
      countSlide = 0;
    } else {
      countSlide += 1;
    }
    setActive(countSlide);
  });
};

slider();