import { quotes } from "../data/quotes";
import App from "../App.css";

const MyButt = () => {
    return (
        <div style={App}>
            <div>
                <q id="newQuote">To be, or not to be, that is the question.</q>
                <div>
                    <p id="quoteAuthor">William Shakespear</p>
                </div>
                <div>
                    <button onClick={randoNum} class="button-56">Random Quote</button>
                </div>                   
            </div>
                
        </div>        
    )    
}

const randoNum = () => {
    let rand = Math.floor(Math.random() * (quotes.length - 1));
    document.getElementById("newQuote").innerHTML = quotes[rand].quoteText;
    document.getElementById("quoteAuthor").innerHTML = quotes[rand].quoteAuthor;
}







export default MyButt;
