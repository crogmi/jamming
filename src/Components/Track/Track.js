import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        // eslint-disable-next-line
        const value = this.props.isRemoval ? '-' : '+';
        return value;
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{ this.props.track.name }</h3>
                    <p>{ this.props.track.artist } | { this.props.track.album }</p>
                </div>
                <button className="Track-action">{ this.renderAction }</button> {/*Need to confirm if the value within the button is correct... */}
            </div>
        );
    }
};

export default Track;