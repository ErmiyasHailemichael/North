// ================================
// URL Endpoints
// ================================
const breedsURL = "https://dogapi.dog/api/v2/breeds";
const factsURL = "https://dogapi.dog/api/v2/facts?limit=3";
const groupsURL = "https://dogapi.dog/api/v2/groups";


// ================================
// Fetch All Breeds
// ================================
async function fetchBreeds() {
  try {
    const response = await fetch(breedsURL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const breeds = data.data;

    const breedList = document.getElementById("breedList");
    breedList.innerHTML = "";

    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = breed.attributes.name;
      li.style.cursor = "pointer";

      // When breed is clicked, fetch details
      li.addEventListener("click", () => {
        fetchBreedDetails(breed.id);
      });

      breedList.appendChild(li);
    });

  } catch (error) {
    console.error("Error fetching breeds:", error.message);
    alert("Failed to load breeds.");
  }
}


// ================================
// Fetch Specific Breed Details
// ================================
async function fetchBreedDetails(id) {
  try {
    const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const breed = data.data.attributes;

    const detailsDiv = document.getElementById("breedDetails");

    detailsDiv.innerHTML = `
      <h3>${breed.name}</h3>
      <p><strong>Description:</strong> ${breed.description}</p>
      <p><strong>Life Span:</strong> ${breed.life.min} - ${breed.life.max} years</p>
      <p><strong>Male Weight:</strong> ${breed.male_weight.min} - ${breed.male_weight.max} kg</p>
      <p><strong>Female Weight:</strong> ${breed.female_weight.min} - ${breed.female_weight.max} kg</p>
      <p><strong>Hypoallergenic:</strong> ${breed.hypoallergenic}</p>
    `;

  } catch (error) {
    console.error("Error fetching breed details:", error.message);
    alert("Failed to load breed details.");
  }
}


// ================================
// Fetch Dog Facts
// ================================
async function fetchFacts() {
  try {
    const response = await fetch(factsURL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const facts = data.data;

    const factsDiv = document.getElementById("facts");
    factsDiv.innerHTML = "";

    facts.forEach(fact => {
      const p = document.createElement("p");
      p.textContent = fact.attributes.body;
      factsDiv.appendChild(p);
    });

  } catch (error) {
    console.error("Error fetching facts:", error.message);
    alert("Failed to load facts.");
  }
}


// ================================
// Fetch Dog Groups
// ================================
async function fetchGroups() {
  try {
    const response = await fetch(groupsURL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    const groups = data.data;

    const groupList = document.getElementById("groupList");
    groupList.innerHTML = "";

    groups.forEach(group => {
      const li = document.createElement("li");
      li.textContent = group.attributes.name;
      groupList.appendChild(li);
    });

  } catch (error) {
    console.error("Error fetching groups:", error.message);
    alert("Failed to load groups.");
  }
}


// ================================
// Event Listeners
// ================================
document.getElementById("loadBreeds").addEventListener("click", fetchBreeds);
document.getElementById("loadFacts").addEventListener("click", fetchFacts);
document.getElementById("loadGroups").addEventListener("click", fetchGroups);
