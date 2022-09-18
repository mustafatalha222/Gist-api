const pluralize = (count, noun, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

const pluralizeText = (count, noun, suffix = "s") =>
  `${noun}${count !== 1 ? suffix : ""}`;

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default { pluralize, debounce, pluralizeText };
