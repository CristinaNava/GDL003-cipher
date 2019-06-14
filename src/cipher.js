window.cipher = {

  encode: (offset, texto) => {
    let arr = [];
    for (let i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) === 32) {
        arr.push(" ");
      }
      else if (texto.charCodeAt(i) === 46) {
        arr.push(".");
      }
      else if (texto.charCodeAt(i) === 44) {
        arr.push(",");
      }
      else if (texto.charCodeAt(i) === 59) {
        arr.push(";");
      }
      else if (texto.charCodeAt(i) === 58) {
        arr.push(":");
      }
      
      else if (texto.charCodeAt(i) < 97) {
        let asc = (texto.charCodeAt(i)- 65 + offset)% 26 + 65;
        arr.push(String.fromCharCode(asc));
      }
      else {
        let asc = (texto.charCodeAt(i) - 97 + offset) % 26 + 97;
        arr.push(String.fromCharCode(asc));
      }
    }
    let ciphered = arr.join("");
    return ciphered;
  },

  decode:  (offset, texto) => {
    let arr = [];
    for (let i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) === 32) {
        arr.push(" ");
      }
      else if (texto.charCodeAt(i) === 46) {
        arr.push(".");
      }
      else if (texto.charCodeAt(i) === 44) {
        arr.push(",");
      }
      else if (texto.charCodeAt(i) === 59) {
            arr.push(";");
      }
      else if (texto.charCodeAt(i) === 58) {
        arr.push(":");
      }
      else if (texto.charCodeAt(i) < 97) {
        let asc = (texto.charCodeAt(i) + 65 - offset) % 26 + 65;
        arr.push(String.fromCharCode(asc));
      }
      else {
        let asc = (texto.charCodeAt(i) + 97 - offset) % 26 + 97;
        arr.push(String.fromCharCode(asc));
      }
    }
    let ciphered = arr.join("");
    return ciphered;
  }
};
