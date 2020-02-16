import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class SelfAssessment extends React.Component {
    render() {
        const storageRef = storage.ref().child('/FirebaseStructure/9Self Assessment');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Self Assessment page</h1>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}
SelfAssessment.propTypes = {
    DeviceWidth: PropTypes.number,
};

SelfAssessment.defaultProps = {
    DeviceWidth: 0,
};