import React, { useContext } from 'react'
import { StoreContext } from '../stores/store'
import Nav from './nav'
import PageTitles from './page-titles'
import Search from './search'
import PayButtons from './pay-buttons'
import Tiles from './tiles'
import PayContinueBar from './pay-continue-bar'
import Footer from './footer'

function AppLayout(props) {
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext);

    return (
        <>
            <Nav />
            <PageTitles />
            <Search />
            <PayButtons />
            <Tiles p={props.location.state.p}/>
            {
                dataApp.activeLink==='payment' && 
                <PayContinueBar/>
            }
            <Footer />
        </>
    );
}

export default AppLayout;
