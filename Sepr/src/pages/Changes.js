import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class Changes extends React.Component {
    render() {
        const storageRef = storage.ref().child('/FirebaseStructure/8Changes');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Changes</h1>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

Changes.propTypes = {
    DeviceWidth: PropTypes.number,
};

Changes.defaultProps = {
    DeviceWidth: 0,
};