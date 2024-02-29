const spinBtn = document.querySelector(".spinBtn");
const wheel = document.querySelector(".wheel");
let SelectedItem = "";
let SelectedPicture = "";

spinBtn.addEventListener("click", Roullet);

function Roullet() {
  wheelSpin.play();
  let Rander = Math.random() * 9999;
  Calculate(Rander);

  function Calculate(Rander) {
    value = Rander / 360;
    value = (value - parseInt(value.toString().split(".")[0])) * 360;
    wheel.style.transform = "rotate(" + Rander + "deg)";
    console.log(value);

    setTimeout(function () {
      switch (true) {
        case value > 0 && value <= 18:
          SelectedItem = "Setrika Uap";
          SelectedPicture = "./image/Setrika Uap.jpg";
          break;
        case value > 18 && value <= 37:
          SelectedItem = "Smart Wacth";
          SelectedPicture = "./image/Smartwatch.jpg";
          break;
        case value > 37 && value <= 56:
          SelectedItem = "Jam Dinding";
          SelectedPicture = "./image/Jam Dinding.jpg";
          break;
        case value > 56 && value <= 75:
          SelectedItem = "Smart TV";
          SelectedPicture = "./image/Smart TV.jpg";
          break;
        case value > 75 && value <= 93:
          SelectedItem = "Juicer Portable";
          SelectedPicture = "./image/Juicer Portabel.jpg";
          break;
        case value > 93 && value <= 112:
          SelectedItem = "Air Fryer";
          SelectedPicture = "./image/Air Fryer.jpg";
          break;
        case value > 112 && value <= 130:
          SelectedItem = "Toester";
          SelectedPicture = "./image/Toaster.jpg";
          break;
        case value > 130 && value <= 149:
          SelectedItem = "Jam Dinding";
          SelectedPicture = "./image/Jam Dinding.jpg";
          break;
        case value > 149 && value <= 169:
          SelectedItem = "1 Gram Emas";
          SelectedPicture = "./image/Emas.jpg";
          break;
        case value > 169 && value <= 189:
          SelectedItem = "Juicer Portable";
          SelectedPicture = "./image/Juicer Portabel.jpg";
          break;
        case value > 189 && value <= 208:
          SelectedItem = "Speaker Bluetooth";
          SelectedPicture = "./image/Speaker Bluetooth.jpg";
          break;
        case value > 208 && value <= 226:
          SelectedItem = "Jam Dinding";
          SelectedPicture = "./image/Jam Dinding.jpg";
          break;
        case value > 226 && value <= 246:
          SelectedItem = "Magsafe Powerbank";
          SelectedPicture = "./image/Megsafe Portable.jpg";
          break;
        case value > 246 && value <= 265:
          SelectedItem = "Juicer Portable";
          SelectedPicture = "./image/Juicer Portabel.jpg";
          break;
        case value > 265 && value <= 283:
          SelectedItem = "E-Money 1 Juta";
          SelectedPicture = "./image/E-money.jpg";
          break;
        case value > 283 && value <= 301:
          SelectedItem = "Dash Cam";
          SelectedPicture = "./image/Dashcam.jpg";
          break;
        case value > 301 && value <= 321:
          SelectedItem = "Jam Dinding";
          SelectedPicture = "./image/Jam Dinding.jpg";
          break;
        case value > 321 && value <= 339:
          SelectedItem = "Car air pump";
          SelectedPicture = "./image/Car Air Pump.jpg";
          break;
        case value > 339 && value <= 360:
          SelectedItem = "Juicer Portable";
          SelectedPicture = "./image/Juicer Portabel.jpg";
          break;
      }
      applause.play();
      Swal.fire({
        title: "Yeeeeeyyyyy...",
        html: "Selamat kamu mendapatkan | " + SelectedItem,
        color: "#010101",
        width: 600,
        imageUrl: SelectedPicture,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonColor: "#ff3f3f",
        background: "#fff url(./assets/Yuhuu.gif)",
      });
    }, 5500);
  }
}
