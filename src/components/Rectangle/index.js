import React from "react";

class Rectangle extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div
                    style={{background: this.props.color }}
                    className="Rectangle"></div>
            </div>

        )
    }
}

export default Rectangle;