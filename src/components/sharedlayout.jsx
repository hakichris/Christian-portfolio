import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function SharedLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
export default SharedLayout;
