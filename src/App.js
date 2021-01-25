import React, {useState , useEffect } from 'react';
import Article from './components/Article';
import 'bootstrap/dist/css/bootstrap.min.css'; 
    
function App() {

  const [articles , setArticles] = useState([]);
  const [subreddit , setSubreddit] = useState('alternativeart');
 
    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {
          if(res.status !== 200){
            console.log('error');
            return;
          }
          else{
            res.json().then(data => {
              if(data !== null){
                setArticles(data.data.children);
              }
            })
          }

        })
    }, [subreddit]);




  return (
 
    <div className="App container">
      <select onChange = {(e) => {
        setSubreddit(e.target.value); 
      }}>
        <option value="alternativeart">Alternative Art</option>
        <option value="pics">Pics</option>
        <option value="gifs">Gifs</option>
        <option value="adviceanimals">Advice Animals</option>
        <option value="images">Images</option>
        <option value="photoshopbattles">Photoshop Battles</option>
        <option value="hmmm">hmmm</option>
        <option value="all">All</option>
        <option value="aww">aww</option> 
        
      </select>
      <ul className="article articleList">
        {
          (articles != null) ? articles.map((article, index) => 
          
          <Article key={index} articles={article.data} />) : ''
        }
         
        
      
      </ul>

    </div>
  
  );
}

export default App;
