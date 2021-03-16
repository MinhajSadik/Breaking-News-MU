import { Button, ButtonGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import News from './Componenets/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    const url =('http://newsapi.org/v2/everything?q=apple&from=2021-03-05&to=2021-03-05&sortBy=popularity&apiKey=648a47f69b5046a590f3e4960a2e5418')
    fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div >
      <Button color="primary">Headlines:{articles.length} </Button>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
