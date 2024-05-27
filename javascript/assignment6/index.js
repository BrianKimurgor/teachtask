
  const { Octokit } = require('@octokit/rest');


const search = document.getElementById('search')
const button = document. getElementById('button')


const resultContainer = document.createElement('div');
resultContainer.id = 'result';
document.body.appendChild(resultContainer);

const request = async ()  => {
    try{
        const query = search.value;
        const data = await fetch(`https://api.github.com/users/${query}`)
        const response = await data.json()
        resultContainer.innerHTML = JSON.stringify(response);
    }catch(err) {
        console.log(err)
    }
}
// request()


//  getThem()


 button.addEventListener('click',async (event) => {
    event.preventDefault();
    await request();
    await getThem();
});
