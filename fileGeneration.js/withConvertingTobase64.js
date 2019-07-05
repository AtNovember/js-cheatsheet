function solution1(base64Data) {

  var arrBuffer = base64ToArrayBuffer(base64Data);

  // It is necessary to create a new blob object with mime-type explicitly set
  // otherwise only Chrome works like it should
  var newBlob = new Blob([arrBuffer], { type: "application/pdf" });

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  // For other browsers: 
  // Create a link pointing to the ObjectURL containing the blob.
  var data = window.URL.createObjectURL(newBlob);

  var link = document.createElement('a');
  document.body.appendChild(link); //required in FF, optional for Chrome
  link.href = data;
  link.download = "file.pdf";
  link.click();
  window.URL.revokeObjectURL(data);
  link.remove();
}

function base64ToArrayBuffer(data) {
  var binaryString = window.atob(data);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
    var ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
};