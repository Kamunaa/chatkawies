const fullDate = document.querySelector(".full-date");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const now = new Date();
const month = `${monthNames[now.getMonth()]}`;
const date = `${now.getDate()}`;
const year = `${now.getFullYear()}`;
const hours = `${now.getHours()}`;
const minutes = `${now.getMinutes()}`;

fullDate.innerHTML = ` ${hours} : ${minutes}<br> ${year}, ${date} ${month}`;

var particles = Particles.init({
  selector: ".background",
  color: ["#90F7EC", "#CE9FFC", "#DBEDF3"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 727,
      options: {
        color: "#f535aa",
        maxParticles: 69,
        connectParticles: true
      }
    }
  ]
});