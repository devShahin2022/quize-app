import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbarheader from '../components/Navbar/Navbarheader';

const AppLayout = () => {
    return (
        <div>
            <Navbarheader></Navbarheader>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AppLayout;