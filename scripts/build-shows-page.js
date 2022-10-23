const arr = ["DATE", "VENUE", "LOCATION", "BUY TICKETS"];
const showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const selectShows = document.querySelector(".shows__container");

const displayShows = () => {
  for (let i = 0; i < showsArray.length; i++) {
    let k = 0;

    const label1 = document.createElement("div");
    label1.classList.add("shows__card-label");
    label1.innerText = arr[k];
    k++;

    const dateCard = document.createElement("div");
    dateCard.classList.add("shows__card-date");
    dateCard.innerText = showsArray[i].date;

    const label2 = document.createElement("div");
    label2.classList.add("shows__card-label");
    label2.innerText = arr[k];
    k++;

    const venueCard = document.createElement("div");
    venueCard.classList.add("shows__card-venue");
    venueCard.innerText = showsArray[i].venue;

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

    const showsCard = document.createElement("div");
    showsCard.classList.add("shows__card");

    showsCard.appendChild(label1);
    showsCard.appendChild(dateCard);
    showsCard.appendChild(label2);
    showsCard.appendChild(venueCard);
    showsCard.appendChild(label3);
    showsCard.appendChild(locationCard);
    showsCard.appendChild(buttonCard);

    selectShows.appendChild(showsCard);
  }
};

const displayLabels = () => {
  selectShows.innerHTML = "";
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

  selectShows.appendChild(hiddenContainer);
};

displayLabels();
displayShows();
