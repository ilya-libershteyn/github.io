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
                    I am a quality assurance engineer at Apple with an extensive background in testing, test automation, and working knowledge of programming and various object-oriented programming languages. I am currently attempting to branch away from testing and into a developer role.
                </p>
            </div>
        </article> 
        <article id="Work">            
            <h2>Work</h2>
            <div class="work">
                <Project projectData={projectData[0]}/>
                <div class="row">
                  <SubProject projectData={projectData[1]}/>
                  <SubProject projectData={projectData[2]}/>
                </div>
            </div>
        </article>
        <Footer/>
    </main>
    </div>
  );
}

export default App;
