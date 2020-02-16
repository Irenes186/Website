import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class ProjectPlanning extends React.Component {
    render() {
        const storageRef = storage.ref().child('/FirebaseStructure/3Project Planning');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Project Planning page</h1>
               <ul>
                   <li>
                    <a href="https://docs.google.com/document/d/1rC-AK8V_15Chx2y9bubHaMAIRrU4NdfQzSaiDZsgo3Y/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Calendar Plans</h4>
                    </a>
                   </li>
                   <li>
                    <a href="https://docs.google.com/spreadsheets/d/1Ho49NHwIYd1VwHRpWdaZ0DFUthhj9qsInbHv4TwtPl0/edit?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h4>Skeleton Plans</h4>
                    </a>
                   </li>
                   </ul>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

ProjectPlanning.propTypes = {
    DeviceWidth: PropTypes.number,
};

ProjectPlanning.defaultProps = {
    DeviceWidth: 0,
};