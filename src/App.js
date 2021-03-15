import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Project from "./components/Project.js";
import SubProject from "./components/SubProject.js";
import projectData from "./components/projectData.js";

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
                    I am a quality assurance engineer at Apple with an extensive background in testing, test automation, and working knowledge of programming and various object-oriented programming languages.
                </p>
                <h3>Skills demonstrated in this portfolio:</h3>
                <ul>
                  <li><p>HTML5 and CSS</p></li>
                  <li><p>Bootstrap</p></li>
                  <li><p>Javascript</p></li>
                  <li><p>Node.js</p></li>
                  <li><p>SQL and Oracle MySQL</p></li>
                  <li><p>Handlebars</p></li>
                  <li><p>NoSQL and MongoDB</p></li>
                  <li><p>React.js</p></li>
                </ul>
            </div>
        </article> 
        <article id="Work">            
            <h2>Work</h2>
            <div class="work">
                <Project projectData={projectData[0]}/>
                <div class="row">
                  <div class="col-md">  
                    <SubProject projectData={projectData[1]}/>
                  </div>
                  <div class="col-md">
                    <SubProject projectData={projectData[2]}/>
                  </div>
                  <div class="col-md">
                    <SubProject projectData={projectData[4]}/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <SubProject projectData={projectData[3]}/>
                  </div>
                  <div class="col-md">
                    <SubProject projectData={projectData[5]}/>
                  </div>
                </div>
            </div>
        </article>
        <Footer/>
    </main>
    </div>
  );
}

export default App;
