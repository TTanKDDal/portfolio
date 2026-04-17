gsap.registerPlugin(ScrollTrigger);

// 🔹 단어 내부 span 감싸기 (마스크용)
document.querySelectorAll(".word").forEach(word => {
  let text = word.innerText;
  word.innerHTML = "<span>" + text + "</span>";
});

// 🎬 비디오 스크롤 연동
const video = document.querySelector(".video");

video.addEventListener("loadedmetadata", () => {
  let duration = video.duration;

  gsap.to(video, {
    currentTime: duration,
    ease: "none",
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });
});

// 🧠 텍스트 등장 애니메이션 (마스크)
gsap.to(".word span", {
  y: "0%",
  ease: "power4.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".main",
    start: "top 30%",
    end: "top -30%",
    scrub: 1
  }
});

// 🌊 패럴랙스 (깊이감)
gsap.to(".text-area", {
  y: -150,
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});



