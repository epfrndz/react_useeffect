import React, { useState, useEffect } from 'react'

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [testType, setTestType] = useState('1')
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <div>
        <button onClick={() => setTestType('1')}>1</button>
        <button onClick={() => setTestType('2')}>2</button>
        <button onClick={() => setTestType('3')}>3</button>
      </div>
      <h1>{resourceType}</h1>
      <h1>{testType}</h1>
      {items.map(item =>{
        return <pre key={item.id} >{JSON.stringify(item)}</pre>
      })}
    </>
    );
}

export default App;
