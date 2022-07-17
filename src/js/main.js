document.body.addEventListener(
  "load",
  () => {
    // set copyright ro the current year in the footer
    document.querySelector("#year").innerText =
      new Date().getFullYear() + " © ";

    // fade in on scroll
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -20px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          console.log("not intersecting");
          entry.target.classList.toggle("appear");
          return;
        } else {
          entry.target.classList.toggle("appear");
          console.log("intersecting");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  },
  true
);
