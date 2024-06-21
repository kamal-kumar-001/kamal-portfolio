import './MainLayout.scss';
import Theme from './theme';
import Navbar from "./navBar";
function MainLayout({ children }) {
 
  return (
    <div className="App">
      <div className='App__navbar-wrapper'>
        <Navbar />
      </div>
      <Theme />
      <div className='App__main-content-wrapper'>
        
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
