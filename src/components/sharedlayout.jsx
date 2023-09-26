import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import '../CSS/navbar.css';

function SharedLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
export default SharedLayout;
