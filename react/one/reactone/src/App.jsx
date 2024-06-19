import { useState } from 'react';
import ListComponent from './components/listComponent';
import './App.css'

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  const [stories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <h1>Stories</h1>
      <input
        type="text"
        placeholder="Search stories"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ListComponent list={filteredStories} />
    </div>
  );
}


export default App
