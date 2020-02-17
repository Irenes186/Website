import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import { storage } from "../config";
import Section from '../components/Section';

export default class Implementation extends React.Component {
    render() {
        const storageRef = storage.ref().child('/FirebaseStructure/7Implementation');
        const { DeviceWidth } = this.props;
        return (
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
            }}>
               <h1>Welcome to the Implementation page</h1>
               <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Play <strong style={{fontSize: '5rem'}}>Kroy!</strong></h1>
                <h3 style={{ marginBottom: '1rem'}}>Created by <strong style={{fontSize: '2.5rem'}}>MiKroysoft!</strong></h3>
                   <ul>
                       <li>
                    <a href="https://drive.google.com/file/d/1bmw0JG5HgpIfrzvuSjhQQp50Sj79XysK/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h5>Download the game here</h5>
                    </a>
                    </li>
                    <li>
                    <a href="https://drive.google.com/drive/folders/1vjS0JRKsDzLebtg6g_j6dnzWqnN_bqkL?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h5>Download the source code here</h5>
                    </a>
                    </li>
                    </ul>
               <Section storageRef={storageRef} DeviceWidth={DeviceWidth} withControls={true} />
           </div>
        );
    }
}

Implementation.propTypes = {
    DeviceWidth: PropTypes.number,
};

Implementation.defaultProps = {
    DeviceWidth: 0,
};