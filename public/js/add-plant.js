const plantElement = document.querySelector('#plantname');
const plantUrlElement = document.querySelector('#planturl');
const zonesElement = document.querySelector('#zones');
const sunshineElement = document.querySelector('#sunshine');
const spaceElement = document.querySelector('#space');
const createButton = document.querySelector('#create-plant');

const addPlant = async (event) => {
  event.preventDefault();
  const plantname = plantElement.value;
  let zones = zonesElement.value;
  const sunshine = sunshineElement.value;
  const space = spaceElement.value;
  const plant_url = plantUrlElement.value;

  zones = zones.replace(/,\s+/g, ',');
  const zoneList = zones.toLowerCase().split(',');

  const zoneObjects = [];
  zoneList.forEach((zone) => {
    zoneObjects.push({ zonename: zone });
  });

  const newPlant = {
    plantname,
    plant_url,
    space,
    sunshine: [{ sunshinename: sunshine }],
    zones: [zoneObjects]
  };

  const response = await fetch('/api/plants', {
    method: 'POST',
    body: JSON.stringify(newPlant),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    const json = await response.json();
    window.location.href = `/plant/${json.id}`;
  }
};

createButton.addEventListener('click', addPlant);
