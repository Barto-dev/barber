let link = document.querySelector('.login-link');
let popup = document.querySelector('.modal-login');
let close = popup.querySelector('.modal-close');
let login = popup.querySelector('[name="login"]');
let password = popup.querySelector('[name="password"]');
let form = popup.querySelector('form');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click" ,function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if(storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth=popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode===27 && popup.classList.contains("modal-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
})

let mapLink = document.querySelector(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode===27 && mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
});
