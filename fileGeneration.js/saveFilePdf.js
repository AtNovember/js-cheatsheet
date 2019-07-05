
const blob = 'server respose with file';
// TODO: request which you sent to server before to get fileStream data 
// TODO: MUST HAVE This config { responseType: 'arraybuffer' }

function showFile(blob) {

  // define filename and contnt-type
  const filename = blob.headers["content-disposition"].split("filename=")[1];
  const type = blob.headers['content-type'];

  // It is necessary to create a new blob object with mime-type explicitly set
  // otherwise only Chrome works like it should
  var newBlob = new Blob([blob], { type: "application/pdf" })

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  // For other browsers:
  // Create a link pointing to the ObjectURL containing the blob.
  const data = window.URL.createObjectURL(newBlob);

  var link = document.createElement('a');
  link.href = data;
  link.download = "file.pdf";
  link.click();
  setTimeout(function () {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
    window.open(window.URL.revokeObjectURL(data));
  }, 100);
}