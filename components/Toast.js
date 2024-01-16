export const loadToastSuccess = () => {
  let template = document.getElementById("toast-success-template");
  let content = template.content.cloneNode(true);
  let container = document.getElementById("contact-wrapper");
  container.appendChild(content);
};

export const loadToastFail = () => {
  let template = document.getElementById("toast-fail-template");
  let content = template.content.cloneNode(true);
  let container = document.getElementById("contact-wrapper");
  container.appendChild(content);
};

export const showToastSuccess = () => {
  let container = document.getElementById("contact-wrapper");
  let toast;
  if (document.getElementById("toast-fail")) {
    toast = document.getElementById("toast-fail");
    container.removeChild(toast);
  }
  toast = document.querySelector(".toast");
  toast.style.display = "flex";
  setTimeout(() => {
    toast.classList.add("toast-fade");
  }, 10);
};

export const showToastFail = () => {
  let container = document.getElementById("contact-wrapper");
  let toast;
  if (document.getElementById("toast-success")) {
    toast = document.getElementById("toast-success");
    container.removeChild(toast);
  }
  toast = document.querySelector(".toast");
  toast.style.display = "flex";
  setTimeout(() => {
    toast.classList.add("toast-fade");
  }, 10);
};
