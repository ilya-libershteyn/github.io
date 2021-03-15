import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Header/>
    <div class="hero" alt="A picture of the developer"></div>
    <main class="content">        
        <article id="about">    
            <h2>About Me</h2>       
            <div class="about_text">
                <p>
                    I am a quality assurance engineer at Apple with an extensive background in testing, test automation, and working knowledge of programming and various object-oriented programming languages. I am currently attempting to branch away from testing and into a developer role.
                </p>
            </div>
        </article> 
        <article id="Work">            
            <h2>Work</h2>
            <div class="work">
                <a href="https://ilya-libershteyn.github.io/CodeRefactorHomework01/" target="_blank">
                    <div class="main_tile">
                        <div class="label">
                            <h3>Horiseon</h3>
                            <p>Code Refactor</p>
                        </div>
                    </div>
                </a>    
            </div>
        </article>
        <Footer/>
    </main>
    </div>
  );
}

export default App;
