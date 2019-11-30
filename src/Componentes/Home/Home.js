import React from 'react';
import ContextHome from './store/contextHome';
import useGlobalHome from './store/useGlobalHome';
import Modal from './modal/modal';

export default function Home() {
    const store = useGlobalHome();
    return (
        <ContextHome.Provider value={store}>
            <Modal />
        </ContextHome.Provider>
    )
}
    