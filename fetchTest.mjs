import fetch from 'node-fetch';


// post data
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 11,
    id: 102,
    title: 'test',
    body: 'testing'
  }),
}).then(response => {
  if (!response.ok) {
    throw new Error('no good');
  }
  return response.json();
})
  .then(body => console.log('post return:', body))
  .catch(error => console.error('Error:', error));


// get data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('no good');
    }
    return response.json();
  })
  .then(body => console.log('get body:', body))
  .catch(error => console.error('Error:', error));
