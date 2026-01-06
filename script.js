const LNK1 = "https://www.checkout-ds24.com/product/533731?_ga=150968777.1766605529&_b=NDkxMDEwO3Byb2RlbnRpbTI0LmNvbS90ZXh0LnBocDt1bmRlZmluZWQ7dGV4dDsxOzE1ODtmZTt1bmRlZmluZWQ%3D&aff=Jesselimalima";
const LNK2 = "https://www.checkout-ds24.com/product/533733?_ga=150968777.1766605529&_b=NDkxMDEwO3Byb2RlbnRpbTI0LmNvbS90ZXh0LnBocDt1bmRlZmluZWQ7dGV4dDszOzI5NDtmZTt1bmRlZmluZWQ%3D&aff=Jesselimalima";
const LNK3 = "https://www.checkout-ds24.com/product/533732?_ga=150968777.1766605529&_b=NDkxMDEwO3Byb2RlbnRpbTI0LmNvbS90ZXh0LnBocDt1bmRlZmluZWQ7dGV4dDsyOzIwNztmZTt1bmRlZmluZWQ%3D&aff=Jesselimalima";

document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
  }
  var imgs = document.querySelectorAll("img");
  for (var j = 0; j < imgs.length; j++) {
    if (!imgs[j].closest("a")) {
      imgs[j].addEventListener("click", function() {
        window.location.href = LNK2;
      });
    }
  }
  var btn = document.getElementById("mobileMenuBtn");
  var menu = document.getElementById("mobileMenu");
  var overlay = document.getElementById("mobileOverlay");
  function closeMenu() {
    if (menu) menu.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function openMenu() {
    if (menu) menu.classList.add("open");
    if (overlay) overlay.classList.add("open");
    if (btn) btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  if (btn && menu && overlay) {
    btn.addEventListener("click", function() {
      if (menu.classList.contains("open")) closeMenu(); else openMenu();
    });
    overlay.addEventListener("click", closeMenu);
    var links = menu.querySelectorAll("a");
    for (var k = 0; k < links.length; k++) links[k].addEventListener("click", closeMenu);
  }
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var m = 0; m < anchors.length; m++) {
    anchors[m].addEventListener("click", function(e) {
      var id = this.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", "#" + id);
      }
    });
  }
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 992) closeMenu();
  });
});
