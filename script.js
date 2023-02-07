const certificateNumber = "01000E01-72A2-1D9A-B59E-174AC459165A0";
const validCertificates = [
  {
    number: "01000E01-72A2-1D9A-B59E-174AC459165A0",
    name: "Yashwant Kumar Aditya",
    training: "AutoCAD",
    college: "Chouksey Engineering College, Bilaspur",
    score: "80%",
    date: "2023-03-15"
  }
];

function verifyCertificate() {
  let inputCertificateNumber = document.querySelector("#certificate-number").value;
  let result = document.querySelector("#result");

  let isValid = false;
  let certificateData;

  for (let i = 0; i < validCertificates.length; i++) {
    if (validCertificates[i].number === inputCertificateNumber) {
      isValid = true;
      certificateData = validCertificates[i];
      break;
    }
  }

  if (isValid) {
    result.innerHTML = "Certificate number is valid.<br> Name: " +
      certificateData.name +
      "<br> Training Name: " +
      certificateData.training +
      "<br> College Name: " +
      certificateData.college +
      "<br> Final Score: " +
      certificateData.score +
      "<br> Date of Certification: " +
      certificateData.date +
      ".";
  } else {
    result.innerHTML = "Certificate number is invalid.";
  }
}
