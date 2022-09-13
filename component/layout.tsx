// import Header from './header'
// import Footer from './footer'
import React from 'react';

type childrenProps = {
    children: React.ReactNode
}

const Layout = ({ children }: childrenProps) => {
    return (
        <div>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;