document.getElementById('fetch-persons').addEventListener('click',fetchPersons);

function fetchPersons() {
    const personsList = document.getElementById('person-list');
    personsList.innerHTML = 'Carregando...';

    fetch('https://api.disneyapi.dev/character')
        .then(response => response.json())
        .then(data => {
            personsList.innerHTML = '';
            data.data.forEach(person => {
                const personDiv = document.createElement('div');
                personDiv.innerHTML = `
                <h3>Personagem:${person.name}</h3>
                <img src='${person.imageUrl}'>
                <a href='${person.sourceUrl}'>Wiki do personagem</a>
                `
                personsList.appendChild(personDiv);
            })
        })
        .catch(error => {
            console.error('', error)
            personsList.innerHTML = "Ocorreu um erro!"
        }
        )
        
}