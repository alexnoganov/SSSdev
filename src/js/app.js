function accordionHandle() {
  function findElements(object, element) {
    const instance = object;
    instance.element = element;
    instance.target = element.nextElementSibling;
  }

  function showElement(object) {
    const instance = object;
    const { target, height } = instance;
    target.style.height = `${height}px`;
    instance.isActive = true;
  }

  function changeElementStatus(instance) {
    if (instance.isActive) {
      hideElement(instance);
    } else {
      showElement(instance);
    }
  }

  function measureHeight(object) {
    const instance = object;
    instance.height = object.target.firstElementChild.clientHeight;
  }

  function subscribe(instance) {
    instance.element.addEventListener("click", (event) => {
      event.preventDefault();
      changeElementStatus(instance);
    });
    window.addEventListener("resize", () => measureHeight(instance));
  }

  function accordion(element) {
    const instance = {};
    const btn = document.querySelector(".gallery__more");
    const hideBtn = document.querySelector(".btn__hide");

    function init() {
      findElements(instance, element);
      measureHeight(instance);
      subscribe(instance);
      btn.addEventListener("click", () => {
        btn.style.display = "none";
        hideBtn.style.display = "flex";
      });
      hideBtn.addEventListener("click", () => {
        hideBtn.style.display = "none";
      });
    }

    init();
  }

  const elements = [...document.querySelectorAll(".js-accordion")];
  elements.forEach(accordion);
}

function priceTab() {
  const tabsBtns = document.querySelectorAll(".price__tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".price__tabs__item");

  tabsBtns.forEach((btn) => {
    onTabClick(btn);
  });

  document.querySelector(".price__tabs__nav-btn").click();

  function onTabClick(item) {
    item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currnetTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active__tab")) {
        tabsBtns.forEach((btn) => {
          btn.classList.remove("active__tab");
        });
        tabsItems.forEach((item) => {
          item.classList.remove("active__tab");
        });

        currentBtn.classList.add("active__tab");
        currnetTab.classList.add("active__tab");
      }
    });
  }
}

function dropDownElement() {
  jQuery(($) => {
    $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).next().fadeOut();
      } else {
        $(".select__head").removeClass("open");
        $(".select__list").fadeOut();
        $(this).addClass("open");
        $(this).next().fadeIn();
      }
    });

    $(".select").on("click", ".select__item", function () {
      $(".select__head").removeClass("open");
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
      if (!$(e.target).closest(".select").length) {
        $(".select__head").removeClass("open");
        $(".select__list").fadeOut();
      }
    });
  });
}

function phoneMask(id) {
  const item = document.querySelector(id);
  Inputmask("+38 (999)-999-99-99", {
    showMaskOnHover: false,
  }).mask(item);
}

function handleButtonClick(btnId, target) {
  document.querySelectorAll(btnId).forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelector(target)
        .scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
}

function doubleclickbtn() {
  $(document).mouseup(function (e) {
    var modal = $("#menu");
    var test = $("#test");

    if (test.is(e.target)) {
      modal.toggleClass("display_flex");
    }

    if (
      !modal.is(e.target) &&
      modal.has(e.target).length === 0 &&
      !test.is(e.target)
    ) {
      modal.removeClass("display_flex");
    }
  });
}

function wtauHoverMobile() {
  document.getElementById("hover").addEventListener("click", () => {
    document.getElementById("hover").classList.toggle("wtau__hover");
  });
}

function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".burger-menu__botton");
  let links = menu.querySelectorAll(".burger-menu__link");
  let overlay = menu.querySelector(".burger-menu__overlay");
  let ham = document.querySelector(".ham");
  let arrow = menu.querySelector(".arrow-icon");
  let arrow2 = menu.querySelector(".arrow-icon2");
  let logo = document.getElementById("logo");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  logo.addEventListener("click", () => {
    toggleMenu();
    ham.classList.remove("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      toggleMenu();
      ham.classList.remove("active");
    });
  });

  overlay.addEventListener("click", () => {
    toggleMenu();
    if (ham.classList.contains("active")) {
      ham.classList.remove("active");
    }

    if (arrow.classList.contains("open")) {
      arrow.classList.remove("open");
    }

    if (arrow2.classList.contains("open")) {
      arrow2.classList.remove("open");
    }
  });

  // ham.addEventListener("click", (e) => {
  //   if (!subMenu.classList.contains("burger-menu__hidden__link")) {
  //     subMenu.classList.add("burger-menu__hidden__link");
  //   }

  //   if (arrow.classList.contains("open")) {
  //     arrow.classList.remove("open");
  //   }

  //   if (arrow2.classList.contains("open")) {
  //     arrow2.classList.remove("open");
  //   }
  // });

  function toggleMenu() {
    menu.classList.toggle("burger-menu_active");

    // if (menu.classList.contains("burger-menu_active")) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "visible";
    // }
  }
}

function popupHandle() {
  const womens = document.querySelectorAll(".women__in__block");

  const closeBtns = document.querySelectorAll(".parent__popup");

  const overlays = document.querySelectorAll(".overlay");

  overlays.forEach((overlay) => {
    const parentPopup = overlay.parentElement;

    overlay.addEventListener("click", () => {
      if (parentPopup.classList.contains("popup__active")) {
        parentPopup.classList.remove("popup__active");
        document.body.style.overflowY = "visible";
      }
    });
  });

  closeBtns.forEach((btn) => {
    const parentPopup = btn.parentElement.parentElement;
    btn.addEventListener("click", () => {
      if (parentPopup.classList.contains("popup__active")) {
        parentPopup.classList.remove("popup__active");
        document.body.style.overflowY = "visible";
      }
    });
  });

  womens.forEach((item) => {
    item.addEventListener("click", () => {
      const cardId = item.getAttribute("data-num");
      const popup = document.getElementById(`parent_popup__${cardId}`);
      popup.classList.add("popup__active");
      if (
        document.querySelector(`#parent_popup__${cardId}`).clientWidth <= 860
      ) {
        document.body.style.overflowY = "hidden";
      }
    });
  });
}

burgerMenu(".burger-menu");
popupHandle();
doubleclickbtn();
accordionHandle();
priceTab();
dropDownElement();
wtauHoverMobile();
phoneMask("#form__phone");
handleButtonClick(".contactsLink", ".contact");
handleButtonClick(".coursesLink", ".price");
handleButtonClick(".aboutLink", ".women");
handleButtonClick(".galleryLink", ".gallery");
handleButtonClick("#back-top", ".We");
handleButtonClick("#logo", ".We");
