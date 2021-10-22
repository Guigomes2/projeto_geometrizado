import React from "react";

class Triangle extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div
                    style={{ boderColorBottom: this.props.color }}
                    className="Triangle"></div>
            </div>

        )
    }
}

export default Triangle;