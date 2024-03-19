import { Outlet } from 'react-router';
import Navbar from "../components/Navbar";
import Sidebar from '../components/sidebar';

const Layout = () => {
    return (
        <div className='w-screen h-screen relative'>
            <Navbar />
            <Sidebar />
            <div className='md:pl[240px] pl-[110px] pr-[-30px] pt-[70px] w-full h-full overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;