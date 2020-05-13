const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const profiles = profileIterator(data);

// Display a person before clicking the button
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const curr = profiles.next().value;

  if (curr !== undefined) {
    document.getElementById(
      'profileDisplay'
    ).innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${curr.name}</li>
        <li class="list-group-item">Age: ${curr.age}</li>
        <li class="list-group-item">Location: ${curr.location}</li>
        <li class="list-group-item">Preference: ${
          curr.gender[0].toUpperCase() +
          curr.gender.slice(1, curr.gender.length)
        } looking for ${
      curr.lookingfor[0].toUpperCase() +
      curr.lookingfor.slice(1, curr.lookingfor.length)
    }</li>
    </ul>`;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${curr.image}">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
