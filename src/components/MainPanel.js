import React, {Component} from 'react';
import PreviewEditPanel from './PreviewEditPanel';
import ComponentToolbar from './ComponentToolbar';

class MainPanel extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const style={
            position:'relative'
        }
        return  <div>
                    <h1>HTML EDITOR v0.1</h1>
                    <br/>
                    <div className='MainContainer' style={style}>
                        <PreviewEditPanel/><ComponentToolbar/>
                    </div>
                </div>
    }
}
export default MainPanel;