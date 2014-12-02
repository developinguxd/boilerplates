/*jshint scripturl:true, expr:true */

// replace # with void
$("a[href='#']").attr("href", "javascript:void(0);");

// toggle between classes on click
$("[data-toggle-class]").on("click", function () {
  var el          = $(this),
      toggleClass = el.data("toggle-class"),
      otherClass  = el.data("toggle-class-with"),
      target      = el.find("." + toggleClass + ", ." + otherClass);

  if (target.hasClass(toggleClass)) {
    target.removeClass(toggleClass).addClass(otherClass);
  } else {
    target.removeClass(otherClass).addClass(toggleClass);
  }
});

$("[data-show-on-click").on("click", function () {
  var el     = $(this),
      target = $(el.data("show-on-click"));
  target.removeClass("hidden");
});

$("[data-hide-on-click").on("click", function () {
  var el             = $(this),
      targetSelector = el.data("hide-on-click"),
      target         =  targetSelector ? $(targetSelector) : el;
  target.addClass("hidden");
});

(function () {
  var lastTarget, lastEl;
  $("[data-toggle-on-change]").on("change", function(event) {
    var el           = $(this),
        target       = $(el.data("toggle-on-change")),
        doToggleLast = el.is("[type=radio]");

    if (el === lastEl) {return;}

    target.toggleClass("hidden");
    doToggleLast && lastTarget && lastTarget.toggleClass("hidden");
    lastTarget = target;
    lastEl = el;
  });
})();
