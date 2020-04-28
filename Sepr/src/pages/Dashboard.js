import React from "react";
import PropTypes from "prop-types";
import "../layout.css";
import Iframe from 'react-iframe';

const Dashboard = ({ DeviceWidth }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: DeviceWidth <= 700 ? 'center' : 'flex-start',
        }}>
            {DeviceWidth > 850 && <div style={{
                position: 'absolute', right: 0, bottom: 0, zIndex: -1,
                borderRight:`${DeviceWidth}px solid rgb(50,125,247)`, borderTop:`${window.innerHeight * 0.6}px solid white`,
                }}
            />}
            <div>
         

               <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Play <strong style={{fontSize: '5rem'}}>Kroy!</strong></h1>
                <h3 style={{ marginBottom: '1rem'}}>Created by <strong style={{fontSize: '2.5rem'}}>MiKroysoft!</strong></h3>
                <a href="" rel="noopener noreferrer" target="_blank">
                        <h5>Download the Mikroysoft game here - Version Assessment 4</h5>
                    </a>
                    <p>The following links contain details about our project</p>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1TymdH1py0cL52On4k3azOCH9zPowLtUc/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <h5>The User manual for Kroy can be found here</h5>
                        </a></li>
                        <li><a href="https://github.com/Irenes186/Website" rel="noopener noreferrer" target="_blank">
                            <h5>GitHub Repo for this website</h5>
                        </a></li>
                    </ul>
                    <a href="https://drive.google.com/a/york.ac.uk/file/d/1yjQCnpAWV_J7Hk0eDUBXWFZsT8MuFupM/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h5>Salt and Sepr Assessment Two game - Version 2</h5>
                    </a>
                    <a href="https://drive.google.com/file/d/1bmw0JG5HgpIfrzvuSjhQQp50Sj79XysK/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                        <h5>Download the Mikroysoft game here - Version 3</h5>
                    </a>
                
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    DeviceWidth: PropTypes.number,
};

Dashboard.defaultProps = {
    DeviceWidth: 0,
};

export default Dashboard;