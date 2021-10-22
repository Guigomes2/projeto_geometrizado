import React from "react";

class Circle extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div style={{ background: this.props.color }} className="Circle"></div>
            </div>

        )
    }
}

export default Circle;