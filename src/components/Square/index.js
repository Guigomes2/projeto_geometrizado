import React from "react";

class Square extends React.Component {

    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div
                    style={{ background: this.props.color }}
                    className="Square"></div>
            </div>
        )
    }
}

export default Square;