//Array containing the given comments
const commentArray = [
  {
    name: "Miles Acosta",
    time: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    image: "",
  },
  {
    name: "Emilie Beach",
    time: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image: "",
  },
  {
    name: "Connor Walton",
    time: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    image: "",
  },
];

//Function to render comments contained in array

const renderComments = () => {
  const selectComments = document.querySelector(".comments__container");
  selectComments.innerHTML = "";
  for (let i = commentArray.length - 1; i >= 0; i--) {
    const fullName = document.createElement("h3");
    fullName.classList.add("comments__full");
    fullName.innerText = commentArray[i].name;

    const time = document.createElement("p");
    time.classList.add("comments__time");
    time.innerText = commentArray[i].time;

    const comm = document.createElement("p");
    comm.classList.add("comments__commenttext");
    comm.innerText = commentArray[i].comment;

    const commentsLists = document.createElement("div");
    commentsLists.classList.add("comments__lists");

    if (commentArray[i].image == "") {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("comments__profile-pic");
      imageContainer.innerText = "";
      commentsLists.appendChild(imageContainer);
    } else {
      const imageContainer = document.createElement("img");
      imageContainer.classList.add("comments__profile-pic");
      imageContainer.setAttribute("src", commentArray[i].image);
      commentsLists.appendChild(imageContainer);
    }

    const fullNameTime = document.createElement("div");
    fullNameTime.classList.add("comments__fullname-time");

    const upper = document.createElement("div");
    upper.classList.add("comments__upper");

    selectComments.appendChild(commentsLists);

    commentsLists.appendChild(fullNameTime);
    fullNameTime.appendChild(upper);
    fullNameTime.appendChild(comm);
    upper.appendChild(fullName);
    upper.appendChild(time);
  }
};

//Function to get time

const getTimeFull = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${month > 9 ? "" : 0}${month}/${date > 9 ? "" : 0}${date}/${year}`;
};
let nameInput = document.querySelector(".comments__name");
let commInput = document.querySelector(".comments__comment");

//Checking input errors
const checkingContent = (e) => {
  if (e.target.name.value == "" && e.target.comment.value == "") {
    nameInput.classList.add("comments__name--error");
    commInput.classList.add("comments__comment--error");
  } else if (e.target.name.value == "") {
    nameInput.classList.add("comments__name--error");
  } else if (e.target.comment.value == "") {
    commInput.classList.add("comments__comment--error");
  }
};

//Load comments when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  renderComments();
  const formInput = document.querySelector(".comments__form");

  //Event listener for the form
  formInput.addEventListener("submit", (event) => {
    event.preventDefault();

    checkingContent(event);
    if (event.target.name.value != "" && event.target.comment.value != "") {
      commentArray.push({
        name: event.target.name.value,
        time: getTimeFull(),
        comment: event.target.comment.value,
        image: "./assets/images/Mohan-muruge.jpg",
      });

      event.target.comment.value = "";
      event.target.name.value = "";

      renderComments();
    }
  });
});

nameInput.addEventListener("click", (event) => {
  nameInput.classList.remove("comments__name--error");
  commInput.classList.remove("comments__comment--error");
});

commInput.addEventListener("click", (event) => {
  nameInput.classList.remove("comments__name--error");
  commInput.classList.remove("comments__comment--error");
});
