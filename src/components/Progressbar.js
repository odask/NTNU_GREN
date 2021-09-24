import { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Progressbar.css'

class Progressbar extends Component {
    render() {
        const percentage = 73
            return(
                <div className="progress_imported">
                <ProgressBar style={{ minWidth: 150, minHeight: 30}} now={percentage} label={`${percentage}% completed`} />
                </div>
            )
    }
}

export default Progressbar;