

document.body.innerHTML = `<div class="heading-container">
<h1>ISRO related organizations</h1>

</div>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://isro.vercel.app/api/centres");
    const organizations = await data.json();
    mainContainer.innerHTML = "loading...";
    organizations.forEach((organization) => {
      displayData(organization);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3 class="blue">organizations Name:<span>${obj.centres.name}</span></h3>
  <p class="para blue">organizations Type:<span>${obj.centres.Place}</span></p>
  <p class="para blue">organizations Type:<span>${obj.centres.State}</span></p>
  
  </div>
  `;
};
