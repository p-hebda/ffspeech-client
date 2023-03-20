import '../../App.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: "center", paddingTop: "80px"}}>
                    <img src={'../../logo.svg'} alt="logo" width="25%" height="25%"/>
                </div>
            </React.Fragment>
        );
    }

}

export default Home;