import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

function SharedLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
export default SharedLayout;
