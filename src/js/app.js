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

      if (!currentBtn.classList.contains("active")) {
        tabsBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        tabsItems.forEach((item) => {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currnetTab.classList.add("active");
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
  document.querySelector(btnId).addEventListener("click", () => {
    document
      .querySelector(target)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

accordionHandle();
priceTab();
dropDownElement();
phoneMask("#form__phone");
phoneMask("#callback__phone");
handleButtonClick("#contacts", ".contact");
handleButtonClick("#courses", ".price");
handleButtonClick("#about", ".women");
handleButtonClick("#gallery", ".gallery");
handleButtonClick("#back-top", ".We");
