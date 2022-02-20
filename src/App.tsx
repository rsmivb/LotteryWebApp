import './App.css';
import Content from './layout/content/Content';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import SideMenu from './layout/side-menu/SideMenu';

function App() {
  return <>
    <Header />
    <SideMenu />
    <Content />
    <Footer />
  </>;
}

export default App;
