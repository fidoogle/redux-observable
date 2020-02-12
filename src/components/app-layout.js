import React from 'react'
import Nav from './nav'
import PageTitles from './page-titles'
import Search from './search'
import PayButtons from './pay-buttons'
import Tiles from './tiles'
import Footer from './footer'

function AppLayout() {
    return (
        <>
            <Nav />
            <PageTitles />
            <Search />
            <PayButtons />
            <Tiles />
            <Footer />
        </>
    );
}

export default AppLayout;
