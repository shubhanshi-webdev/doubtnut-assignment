
import 'bootstrap/dist/css/bootstrap.min.css';


function Article(props){
    return(
        <>
        
                {
                    console.log(props.articles)
                } 
                <li>
                <img src={props.articles.thumbnail} />
             
                <a href={"https://www.reddit.com/" + props.articles.permalink} ><h3>{props.articles.title}</h3></a>
                <p>
                    <u><strong>Upvotes    </strong></u>  {props.articles.upvote_ratio}</p>

                    <p><u><strong>Comments    </strong></u>  {props.articles.num_comments}</p>
                </li>
                  
          </>     
               
       
    )
}

export default Article;