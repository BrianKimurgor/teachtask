
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

const getThem = async () => {
    try {
        const query = search.value;
        const octokit = new Octokit({

          })

        const response = await octokit.request('GET /users/{username}', {
            username: query,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
          resultContainer.innerHTML = JSON.stringify(response.data);
          console.log(responce.data)
    } catch (error) {
        console.log(error)
    }
}
//  getThem()


 button.addEventListener('click',async (event) => {
    event.preventDefault();
    await request();
    await getThem();
});
