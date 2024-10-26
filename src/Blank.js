import React from 'react';
class Blank extends React.Component {

    render() {
        const { h } = this.props;
        return (
            <div style={{height: h +'px'}}></div>
        );
    }
}

export default Blank;
