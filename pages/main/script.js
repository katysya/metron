const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_catalog = new Swiper("#swiper-catalog", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Modal

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const btnSend = document.querySelector(".modal__form-button");
const formFields = document.querySelectorAll(".modal__form-input");
const btnShowModal = document.querySelector(".banner__left-button");
const errors = document.querySelectorAll(".modal__form-error");

btnShowModal.addEventListener("click", showModal);
overlay.addEventListener("click", closeModal);

function showModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  body.style = "overflow-y: hidden";
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  body.style = "overflow-y: auto";
}

const typesFields = {
  NAME: "name",
  PHONE: "phone",
};

const form = {
  fields: [
    {
      value: "",
      isValid: false,
      type: "name",
      id: 0,
    },
    {
      value: "",
      isValid: false,
      type: "phone",
      id: 1,
    },
  ],
  isAgree: true,
};

formFields.forEach((field) => {
  const type = field.getAttribute("name");
  // new MaskInput(`.${field.classList.value}${type}`, { mask: "#-#" });

  field.addEventListener("input", (event) => validation(type, event));
});

function validation(type, event) {
  const field = form.fields.find((field) => field.type === type);
  field.value = event.target.value;

  setStatusForField(type, field);
  changeErrorStatusForField(field);
}

const setStatusForField = (type, field) => {
  switch (type) {
    case typesFields.NAME:
      if (field.value.length >= 1) {
        return (field.isValid = true);
      }

      return (field.isValid = false);
    case typesFields.PHONE:
      if (field.value.length >= 1) {
        return (field.isValid = true);
      }

      return (field.isValid = false);
  }
};

const changeErrorStatusForField = (field) => {
  if (!field.isValid) {
    const fieldDOM = document.querySelector(`#modal__form-${field.id}`);

    errors[field.id].classList.add("active");
    fieldDOM.classList.add("error");
    return;
  }

  if (field.isValid) {
    const fieldDOM = document.querySelector(`#modal__form-${field.id}`);

    errors[field.id].classList.remove("active");
    fieldDOM.classList.remove("error");
    return;
  }
};

btnSend.addEventListener("click", sendForm);

function sendForm(event) {
  event.preventDefault();

  if (isValidForm()) {
    resetForm();
    return console.log("form sended");
  }

  setErrors();
}

function isValidForm() {
  let result = true;

  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i];

    if (!field.isValid) {
      result = false;
      break;
    }
  }

  if (!form.isAgree) {
    result = false;
  }

  return result;
}

function setErrors() {
  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i];

    if (!field.isValid) {
      formFields.forEach((fieldDOM, idx) => {
        if (fieldDOM.getAttribute("name") === field.type) {
          fieldDOM.classList.add("error");
          errors[idx].classList.add("active");
        }
      });
      continue;
    }

    formFields.forEach((fieldDOM, idx) => {
      if (fieldDOM.getAttribute("name") === field.type) {
        fieldDOM.classList.remove("error");
        errors[idx].classList.remove("active");
      }
    });
  }
}

const resetForm = () => {
  formFields.forEach((field) => (field.value = ""));
  form.fields.forEach((field) => (field.isValid = false));
};
