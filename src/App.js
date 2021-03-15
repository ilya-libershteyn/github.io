import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>I<span class="seo">lya</span> Libershteyn</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#Work">Work</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
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
        <article id="Contact">
            <h2>Contact</h2>
            <div class="contact">
                <ul>
                    <li><a href="tel:14088924264">(408)892-4264</a></li>
                    <li><a href="mailto:ilya.v.libershteyn@gmail.com">ilya.v.libershteyn@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/ilya-libershteyn/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/ilya-libershteyn" target="_blank">GitHub</a></li>
                </ul>
            </div>
        </article>
    </main>
    </div>
  );
}

export default App;
