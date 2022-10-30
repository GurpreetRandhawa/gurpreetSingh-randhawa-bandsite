// const showsArray = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

const key = "6f941b6e-29ae-4076-bbb9-46d5cfde15b5";
const arr = ["DATE", "VENUE", "LOCATION", "BUY TICKETS"];
const containShow = document.querySelector(".shows__container");
const selectShows = document.querySelectorAll(".shows__card");

const displayLabels = () => {
  let k = 0;
  const label1Hidden = document.createElement("p");
  label1Hidden.classList.add("shows__hidden-label");
  label1Hidden.innerText = arr[k];
  k++;

  const label2Hidden = document.createElement("p");
  label2Hidden.classList.add("shows__hidden-label");
  label2Hidden.innerText = arr[k];
  k++;

  const label3Hidden = document.createElement("p");
  label3Hidden.classList.add("shows__hidden-label");
  label3Hidden.innerText = arr[k];

  const emptyP = document.createElement("p");
  emptyP.innerText = "";

  const hiddenContainer = document.createElement("div");
  hiddenContainer.classList.add("shows__hidden-label-list");

  hiddenContainer.appendChild(label1Hidden);
  hiddenContainer.appendChild(label2Hidden);
  hiddenContainer.appendChild(label3Hidden);
  hiddenContainer.appendChild(emptyP);

  containShow.prepend(hiddenContainer);
};

const getTimeFull = (d) => {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const da = new Date(d);

  const year = da.getFullYear();
  const month = da.getMonth();
  const date = da.getDate() + 1;
  const day = da.getDay() + 1;
  return `${days[day]} ${months[month]} ${date > 9 ? "" : 0}${date} ${year}`;
};

const displayShows = () => {
  axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${key}`)
    .then((response) => {
      const showsArray = response.data;
      for (let i = 0; i < showsArray.length; i++) {
        let k = 0;

        const label1 = document.createElement("div");
        label1.classList.add("shows__card-label");
        label1.innerText = arr[k];
        k++;

        const dateCard = document.createElement("div");
        dateCard.classList.add("shows__card-date");
        dateCard.innerText = getTimeFull(showsArray[i].date);

        const label2 = document.createElement("div");
        label2.classList.add("shows__card-label");
        label2.innerText = arr[k];
        k++;

        const venueCard = document.createElement("div");
        venueCard.classList.add("shows__card-venue");
        venueCard.innerText = showsArray[i].place;

        const label3 = document.createElement("div");
        label3.classList.add("shows__card-label");
        label3.innerText = arr[k];
        k++;

        const locationCard = document.createElement("div");
        locationCard.classList.add("shows__card-location");
        locationCard.innerText = showsArray[i].location;

        const buttonCard = document.createElement("button");
        buttonCard.classList.add("shows__button");
        buttonCard.innerText = arr[k];

        selectShows[i].setAttribute("id", showsArray[i].id);

        selectShows[i].appendChild(label1);
        selectShows[i].appendChild(dateCard);
        selectShows[i].appendChild(label2);
        selectShows[i].appendChild(venueCard);
        selectShows[i].appendChild(label3);
        selectShows[i].appendChild(locationCard);
        selectShows[i].appendChild(buttonCard);
      }
    });
};
document.addEventListener("DOMContentLoaded", () => {
  displayLabels();
  displayShows();
  const cardArr = document.querySelectorAll(".shows__card");
  for (let m = 0; m < cardArr.length; m++) {
    cardArr[m].addEventListener("click", (event) => {
      const selectCard = document.getElementById(event.target.id);
      cardArr.forEach((a) => a.classList.remove("shows__card--click"));
      selectCard.classList.toggle("shows__card--click");
    });
  }
});
