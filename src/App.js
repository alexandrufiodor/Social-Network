import './App.css';


const App = () =>  {
  return (
      <div className="app-wrapper">
        <header className="header">
          <img src="https://www.logodesign.net/logo/abstract-waves-with-sun-1353ld.png?size=2&industry=All" alt="logo"/>
        </header>

        <nav className="nav">
          <div>
            <a href="#">Profile</a>
          </div>
          <div>
            <a href="#">Messages</a>
          </div>
          <div>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">Music</a>
          </div>
          <div>
            <a href="#">Setting</a>
          </div>
        </nav>
        <div className="content">
          <div>
            <img src="https://www.etisalat.ae/en/images/ptc-annual-conference-homepage-1920x500_tcm313-157350.jpg" alt=""/>
          </div>
          <div>
            ava + description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div>
              <div>
                post 1
              </div>
              <div>
                post 2
              </div>
              <div>
                post 3
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


export default App;
