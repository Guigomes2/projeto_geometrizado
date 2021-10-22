import React from "react";

class Art extends React.Component {
    render(){
        return (
            <div  className="Art">
               {this.props.children}
            </div>
        )
    }
}

export default Art;