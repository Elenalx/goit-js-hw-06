const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', onBlur);
function onBlur(e) {
  const input = e.currentTarget;
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    input.classList.add("valid");
    invalid.remove();
  } else {
    input.classList.add("invalid");
    valid.remove();
  }
}


