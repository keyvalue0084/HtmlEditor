import React, {Component} from 'react';

class ComponentToolbar extends Component{   
    render(){
        const style={
            width:'30%',
            padding:'5px'
        }
        return  <nav style={style}>
                    Component Toolbar
                </nav>
    }
}
export default ComponentToolbar;