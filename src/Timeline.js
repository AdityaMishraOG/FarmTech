import React, { useState } from 'react';
import Navbar from './Navbar';
import "./timeline.css"
import ParseData from './ParseData';
import LineChart from './LineChart';
import { sensors } from './data';
import { om2m_data } from './data';
import { start_index } from './data';

// Transpose function to convert rows to columns
// const transpose = (matrix) => matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
const transpose = (matrix) => {
    return matrix[0].map((_, colIndex) => {
        return matrix.map((row) => {
            return row[colIndex] !== null ? row[colIndex] : 0;
        });
    });
};


const PlotArray = ({ id, date, name, array }) => {
    // Assuming you have the array passed as a prop

    const i = parseInt(date);
    const si = start_index[i];
    const ei = start_index[i + 1];

    const subArray = array.slice(si, ei);
    const labels = subArray.map((value, index) => index);


    return (
        <div class="plot_array">
            {/* Other components or content */}
            <LineChart key={id} name={name} data={subArray} labels={labels} />
        </div>
    );
};

class DateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    handledateChange = (event) => {
        this.setState({ date: event.target.value });
    };


    handleClick = () => {
        const { date } = this.state;
        // Call your function with date and endDate as parameters
        this.yourFunction(date);
    };

    yourFunction = (date) => {
        // Replace this with your actual logic using date and endDate
        console.log('Start Date:', date);

    };

    render() {
        return (
            <div className='center'>
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        value={this.state.date}
                        onChange={this.handledateChange}
                    />
                    <span>Enter Day</span>
                </div>
                <div className="inputbox">
                    <button id="submit_button" type="button" onClick={this.handleClick}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}




function Timeline() {
    const [arrays, setArrays] = useState([transpose(om2m_data)]);

    const [date, setDate] = useState('1');
    const [formSubmitted, setFormSubmitted] = useState(true);

    console.log(date);


    return (
        <>
            <Navbar />
            <div className="title">
                <h2 style={{ marginTop: "2vh" }}>Timeline</h2>
                <div className="underline"></div>
            </div>
            <DateForm />

            {console.log(date)};

            {formSubmitted && (
                <div id="plots_container">
                    {sensors.map((sensor) => {
                        const id = sensor.id;
                        const name = sensor.name;
                        return (
                            <PlotArray
                                className="each_plot"
                                key={id}
                                date={date}
                                name={name}
                                array={arrays[0][id - 1]}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Timeline;
