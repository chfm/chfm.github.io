document.addEventListener("DOMContentLoaded", function () {

  // navbar collapse/show
  var navigation = document.getElementById("navigation");
  var navOverlay = document.getElementById("navOverlay");

  function closeNav() {
    navigation.classList.add("collapsed");
    navOverlay.style.display = "none";
  }

  document.getElementById("navCollapse").addEventListener("click", function () {
    if (navigation.classList.contains("collapsed")) {
      navigation.classList.remove("collapsed");
      navOverlay.style.display = "block";
    } else {
      closeNav();
    }
  });

  document.getElementById("navClose").addEventListener("click", closeNav);

  // closes nav when clicking outside of the nav
  document.body.addEventListener("click", function (evt) {
    if (!evt.target.closest("#navCollapse, #navigation")) {
      closeNav();
    }
  });

  // scroll to top
  document.getElementById("scrollTop").addEventListener("click", function (evt) {
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // link icons
  function addIcon(element, icon) {
    if (!element.classList.contains("noIcon")) {
      element.insertAdjacentHTML("beforeend", " <span class='" + icon + "'></span>");
    }
  }
  function addIcons(selector, icon) {
    document.querySelectorAll(selector).forEach(function (element) {
      addIcon(element, icon);
    });
  }
  addIcons("a[href^='mailto:']", "far fa-envelope");
  document.querySelectorAll("a").forEach(function (link) {
    if (link.hostname.length && link.hostname !== location.hostname && !link.classList.contains("noIcon")) {
      // make it a video icon if it's a zoom link
      if (link.hostname.match(/.*zoom.us*/)) {
        addIcon(link, "fas fa-video");
      } else { // otherwise add an "external link" icon
        link.insertAdjacentHTML("beforeend", " <span style='font-size: 13px' class='fas fa-external-link-alt'></span>");
      }
    }
  });
  addIcons("a[href$='.pdf']", "far fa-file-pdf");
  addIcons("a[href$='.docx']", "far fa-file-word");
  addIcons("a[href$='.doc']", "far fa-file-word");

  // make the accordion scroll (thanks Michael Coxon!)
  document.querySelectorAll(".autoScroll").forEach(function (panel) {
    panel.addEventListener("shown.bs.collapse", function () {
      var card = panel.closest(".card");
      window.scrollTo({
        top: card.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth"
      });
    });
  });

  // make a heart appear when you click my name :)
  var myName = document.getElementById("myName");
  myName.addEventListener("click", function () {
    myName.insertAdjacentHTML("beforeend", '<span style="color: #ff8797" class="far fa-heart"></span>');
  }, { once: true });

});
