import React, {Component} from 'react';

class InputTag extends Component{
    state = {
        style:'',
        placeholder:'',
        name:'',
        className:''                
    }

    render(){
        return <Input placeholder={this.state.placeholder}
                        style={this.state.style}
                        name={this.state.name}
                        className={this.state.className}
                />
    }
}
export default InputTag;