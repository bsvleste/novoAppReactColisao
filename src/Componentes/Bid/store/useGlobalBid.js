import {useState} from 'react';

export default function useGlobalBid(){
    const [estadoModal, useModal] = useState(false);
    
    const actions =(action)=>{
        const {type,playload} = action;
        switch (type) {
            case 'setModal':
                return useModal(playload)
            default:
                return estadoModal;
        }
    }
    return {estadoModal,actions}
}