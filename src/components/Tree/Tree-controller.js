
import React from 'react';
import View from './Tree-view';

class Tree extends React.Component {
    state = {
        isConfirmed: localStorage.getItem('confirmed') || false,
    }
    
    render() {
        let blockTree =<div className="Tree"> Say hi!</div>;
        if(this.state.isConfirmed === "false"){
            blockTree = <div className="Tree"> <div className="Tree-plus">Favor de verificar su cuenta, revisar su correo electrónico!</div></div>;
        }
        return (
            <View
            blockTree={blockTree}
            />
        );
    }
}
export default Tree;
