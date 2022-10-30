const key = "6f941b6e-29ae-4076-bbb9-46d5cfde15b5";

//Function to render the data by storing it in Array
const displayComments = () => {
  const selectComments = document.querySelector(".comments__container");
  selectComments.innerHTML = "";
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
    .then((response) => {
      const commentArray = response.data;
      //Sorting by date
      commentArray.sort((a, b) => b.timestamp - a.timestamp);

      for (let i = 0; i < commentArray.length; i++) {
        const fullName = document.createElement("h3");
        fullName.classList.add("comments__full");
        fullName.innerText = commentArray[i].name;

        const time = document.createElement("p");
        time.classList.add("comments__time");
        time.innerText = getTimeFull(commentArray[i].timestamp);

        const comm = document.createElement("p");
        comm.classList.add("comments__commenttext");
        comm.innerText = commentArray[i].comment;

        const commentsLists = document.createElement("div");
        commentsLists.classList.add("comments__lists");

        if (i < commentArray.length - 3) {
          const imageContainer = document.createElement("img");
          imageContainer.classList.add("comments__profile-pic");
          imageContainer.setAttribute(
            "src",
            "./assets/images/Mohan-muruge.jpg"
          );
          commentsLists.appendChild(imageContainer);
        } else {
          const imageContainer = document.createElement("div");
          imageContainer.classList.add("comments__profile-pic");
          imageContainer.innerText = "";
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
    });
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

const getTimeFull = (d) => {
  const da = new Date(d);
  const year = da.getFullYear();
  const month = da.getMonth() + 1;
  const date = da.getDate();
  return `${month > 9 ? "" : 0}${month}/${date > 9 ? "" : 0}${date}/${year}`;
};

//Load comments when Dom loaded
document.addEventListener("DOMContentLoaded", () => {
  displayComments();
  const formInput = document.querySelector(".comments__form");

  //Event listener for the form
  formInput.addEventListener("submit", (event) => {
    event.preventDefault();

    checkingContent(event);
    if (event.target.name.value != "" && event.target.comment.value != "") {
      axios
        .post(`https://project-1-api.herokuapp.com/comments?api_key=${key}`, {
          name: event.target.name.value,
          comment: event.target.comment.value,
        })
        .then((response) => {
          displayComments();
        })
        .catch((error) => {
          console.log(error);
        });

      event.target.comment.value = "";
      event.target.name.value = "";
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

// axios
//   .delete(
//     `https://project-1-api.herokuapp.com/comments/6fcced26-bde0-4a95-b828-1e8736cc0f4a?api_key=${key}`
//   )
//   .then((response) => {
//     console.log(response);
//   });
