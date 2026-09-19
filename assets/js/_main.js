/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(function() {
  // FitVids init
  $("#main").fitVids();

  // Sticky sidebar
  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper").find("button").length === 0
        ? $(window).width() > 1024 // width should match $large Sass variable
        : !$(".author__urls-wrapper").find("button").is(":visible");
    if (show) {
      // fix
      $(".sidebar").addClass("sticky");
    } else {
      // unfix
      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper").find("button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper").find("button").toggleClass("open");
  });

   
  // OS-aware keyboard shortcut detection (⌘K on Mac, Ctrl+K on Windows/Linux)
  var isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent);
  var shortcutText = isMac ? "⌘K" : "Ctrl K";
  var shortcutHtml = isMac ? '<abbr title="Command">⌘</abbr>K' : 'Ctrl K';

  var updateSearchKeyBadges = function() {
    $(".search-key-badge").each(function() {
      $(this).html(shortcutHtml);
    });
    $(".search-btn-global").attr("title", "Search (" + shortcutText + ")");
  };
  updateSearchKeyBadges();

  // Search open / close functions
  var openSearchModal = function() {
    $(".search-content").addClass("is--visible");
    $("body").css("overflow", "hidden");
    setTimeout(function() {
      var $input = $(".search-content").find("input[type='search'], input#search, .search-input").first();
      $input.focus().select();
    }, 50);
  };

  var closeSearchModal = function() {
    $(".search-content").removeClass("is--visible");
    $("body").css("overflow", "");
    var $input = $(".search-content").find("input[type='search'], input#search, .search-input").first();
    $input.blur();
  };

  var toggleSearchModal = function() {
    if ($(".search-content").hasClass("is--visible")) {
      closeSearchModal();
    } else {
      openSearchModal();
    }
  };

  // Search button click handler
  $(document).on("click", ".search__toggle, .search-btn-global", function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleSearchModal();
  });

  $(document).on("click", ".search-clear-btn", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $input = $(".search-content").find("input[type='search'], input#search, .search-input").first();
    if ($input.length) {
      $input.val("").trigger("input").trigger("keyup").trigger("change").focus();
    }
    $("#results").empty();
  });

  $(document).on("click", ".search-modal-close-btn, .search-close-btn, .search-cancel-btn", function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeSearchModal();
  });

  $(document).on("click", ".search-content", function(e) {
    if ($(e.target).hasClass("search-content")) {
      closeSearchModal();
    }
  });

  // Global Keyboard Shortcuts (⌘K / Ctrl+K, /, Escape)
  window.addEventListener("keydown", function(e) {
    var isK = e.key === "k" || e.key === "K" || e.code === "KeyK" || e.keyCode === 75;
    if ((e.metaKey || e.ctrlKey) && isK) {
      e.preventDefault();
      e.stopPropagation();
      toggleSearchModal();
      return;
    }

    if (e.key === "Escape" || e.code === "Escape" || e.keyCode === 27) {
      if ($(".search-content").hasClass("is--visible")) {
        e.preventDefault();
        e.stopPropagation();
        closeSearchModal();
        return;
      }
    }

    if ((e.key === "/" || e.code === "Slash" || e.keyCode === 191) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      var activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      var isContentEditable = document.activeElement && document.activeElement.isContentEditable;
      if (activeTag !== "input" && activeTag !== "textarea" && activeTag !== "select" && !isContentEditable) {
        e.preventDefault();
        e.stopPropagation();
        openSearchModal();
      }
    }
  }, true);

  // Smooth scrolling
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 20,
    speed: 400,
    speedAsDuration: true,
    durationMax: 500
  });

  // Gumshoe scroll spy init
  if($("nav.toc").length > 0) {
    var spy = new Gumshoe("nav.toc a", {
      // Active classes
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content

      // Nested navigation
      nested: false, // if true, add classes to parents of active link
      nestedClass: "active", // applied to the parent items

      // Offset & reflow
      offset: 20, // how far from the top of the page to activate a content area
      reflow: true, // if true, listen for reflows

      // Event support
      events: true // if true, emit custom events
    });
  }

  // add lightbox class to all image links
  $(
    "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']"
  ).has("> img").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // Add anchors for headings
  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function() {
    var id = $(this).attr('id');
    if (id) {
      var anchor = document.createElement("a");
      anchor.className = 'header-link';
      anchor.href = '#' + id;
      anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fas fa-link\"></i>';
      anchor.title = "Permalink";
      $(this).append(anchor);
    }
  });
});
