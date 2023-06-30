import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const SharedLayout = () => (
  <main>
    <Navbar />
    <Outlet />
  </main>
);
export default SharedLayout;
