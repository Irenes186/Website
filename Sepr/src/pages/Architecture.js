import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class Architecture extends React.Component {
    render() {
        const storageRef = storage.ref().child('/FirebaseStructure/2Architecture');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Architecture page</h1>
               <ul>
                   <li>
                    <a href="https://drive.google.com/file/d/1rMYbKe_kVVIqnVQu01fHITEGcoHZd-t9/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Architecture diagram for Assessment 3</h4>
                    </a>
                   </li>
                   </ul>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

Architecture.propTypes = {
    DeviceWidth: PropTypes.number,
};

Architecture.defaultProps = {
    DeviceWidth: 0,
};