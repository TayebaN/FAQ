function toggle(e) {
  console.log(e);

  const element = e.currentTarget;
  element.classList.toggle("active");
}

const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

// const totalSections = 5;

// for (let i = 1; i <= totalSections; i++) {
//   const sectionElement = document.getElementById(`section` + i);
//   sectionElement.addEventListener("click", toggle);
// }

const accordion = document.querySelector(".accordion");

async function getFaqData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);

  data.forEach((post) => {
    const title = post.title;
    const body = post.body;

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";

    titleDiv.addEventListener("click", toggle);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description";

    titleDiv.innerHTML = `<i class="fa-solid fa-chevron-up"></i>
    <p>${title}</p>`;

    descriptionDiv.textContent = body;

    accordion.appendChild(titleDiv);
    accordion.appendChild(descriptionDiv);
  });
}
getFaqData();
