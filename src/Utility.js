// export const debounce = (func, timer) => {
//   let inDebounce;

//   return function () {
//     let context = this;
//     let args = arguments;
//     clearTimeout(inDebounce);
//     setTimeout(() => {
//       func.apply(context, args);
//     }, timer);
//   };
// };

export const makeBold = (elemId) => {
  //debugger;
  let str = document.getElementById(elemId).innerHTML;
  let search = document.getElementById('search').value;
  let regex = new RegExp(search, 'gi');
  let result = str.replace(regex, '<mark><b>' + search + '</b></mark>');
  document.getElementById(elemId).innerHTML = result;
};
