//person data

const peopleData = [
    {
      name: "Alex",
      age: 21,
      gender: "male",
      distance: "0.95Km",
      status: "Online",
      imgSrc: "mmale.png",
    },
    {
      name: "Brad Mondon",
      age: 32,
      gender: "male",
      distance: "3.97km",
      status: "Online",
      imgSrc: "mmale.png",
    },
    {
      name: "Meagan",
      age: 25,
      gender: "male",
      distance: "1.25km",
      status: "Offline",
      imgSrc: "mmale.png",
    },
    {
      name: "John Bolton",
      age: 23,
      gender: "male",
      distance: "2.05km",
      status: "Offline",
      imgSrc: "mmale.png",
    },
    {
      name: "Alisa Cha",
      age: 27,
      gender: "female",
      distance: "2.42Km",
      status: "Online",
      imgSrc: "female.png",
    },
    {
      name: "Mike Lane",
      age: 29,
      gender: "female",
      distance: "1.90Km",
      status: "Offline",
      imgSrc: "female.png",
    },
    {
      name: "Scarlett Wilson",
      age: 23,
      gender: "female",
      distance: "3.01Km",
      status: "Online",
      imgSrc: "female.png",
    },
    {
      name: "Rose Mary",
      age: 26,
      gender: "female",
      distance: "2.58Km",
      status: "Online",
      imgSrc: "female.png",
    },
  ];
  

  const container = document.querySelector(".container");

  //Tabs
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Tabs";
  container.appendChild(title);
  
  //Gender
  const genderContainer = document.createElement("div");
  genderContainer.classList.add("gender__container");
  
  const genderTabs = document.createElement("ul");
  
  const genders = ["male", "female", "both"];
  for (const gender of genders) {
    const tab = document.createElement("li");
    tab.dataset.tab = gender;
    tab.textContent = gender.charAt(0).toUpperCase() + gender.slice(1);
    genderTabs.appendChild(tab);
  }
  
  genderContainer.appendChild(genderTabs);
  container.appendChild(genderContainer);

  //People
  const peopleContainer = document.createElement("div");
  peopleContainer.classList.add("people__container");
  
  const peopleList = document.createElement("ul");
  
  for (const person of peopleData) {
    const personContainer = document.createElement("li");
    personContainer.classList.add(
      "person__container",
      person.gender,
      person.status.toUpperCase()
    );
  
    const person_tabs = document.createElement("div");
    person_tabs.classList.add("person_tabs");
  
    const left = document.createElement("div");
    left.classList.add("left");
  
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img__container");
  
    const img = document.createElement("img");
    img.src = person.imgSrc;
  
    const personData = document.createElement("div");
    personData.classList.add("personData");
  
    const name = document.createElement("h6");
    name.classList.add("name");
    name.textContent = `${person.name}, ${person.age}`;
  
    const distance = document.createElement("people");
    distance.classList.add("distance");
    distance.textContent = person.distance;
  
    const right = document.createElement("div");
    right.classList.add("right");
  
    const status = document.createElement("div");
    status.classList.add("status");
    status.textContent = person.status;
  
    imgContainer.appendChild(img);
    personData.appendChild(name);
    personData.appendChild(distance);
    left.appendChild(imgContainer);
    left.appendChild(personData);
    right.appendChild(status);
    person_tabs.appendChild(left);
    person_tabs.appendChild(right);
    personContainer.appendChild(person_tabs);
    peopleList.appendChild(personContainer);
  }
  
  peopleContainer.appendChild(peopleList);
  container.appendChild(peopleContainer);
  
  const hrElements = document.querySelectorAll("hr");
  hrElements.forEach((hr) => {
    hr.classList.add("hr");
  });
  
  const male = document.querySelector("[data-tab='male']");
  const female = document.querySelector("[data-tab='female']");
  const both = document.querySelector("[data-tab='both']");
  
  //Stores and restores the gender selected by default

  let selectedGender = localStorage.getItem("selectedGender") || "both";
    Peoples(selectedGender);
    setSelectedTab(selectedGender);

    male.addEventListener("click", () => {
        selectedGender = "male";
        setSelectedTab(selectedGender);
        Peoples(selectedGender);
        localStorage.setItem("selectedGender", selectedGender);
      });

    female.addEventListener("click", () => {
        selectedGender = "female";
        setSelectedTab(selectedGender);
        Peoples(selectedGender);
        localStorage.setItem("selectedGender", selectedGender);
});
  
    both.addEventListener("click", () => {
         selectedGender = "both";
         setSelectedTab(selectedGender);
         Peoples(selectedGender);
         localStorage.setItem("selectedGender", selectedGender);
  });
  function setSelectedTab(selectedGender) {
    const tabs = document.querySelectorAll("[data-tab]");
    tabs.forEach((tab) => {
      if (tab.dataset.tab === selectedGender) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }
 
  //excludes both gender
  
  function Peoples(gender) {
    const people = document.querySelectorAll(".person__container");
    people.forEach((person) => {
      if (gender === "both" || person.classList.contains(gender)) {
        person.style.display = "block";
      } else {
        person.style.display = "none";
      }
    });
  }


  