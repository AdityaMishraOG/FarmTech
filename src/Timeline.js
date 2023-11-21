import React, { useState } from 'react';
import Navbar from './Navbar';
import "./timeline.css"
import ParseData from './ParseData';
import LineChart from './LineChart';

const PlotArray = ({ array }) => {
    // Assuming you have the array passed as a prop
    const labels = array.map((value, index) => index);

    return (
        <div class="plot_array">
            {/* Other components or content */}
            <LineChart data={array} labels={labels} />
        </div>
    );
};



class DateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
        };
    }

    handleStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    };

    handleEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    };

    handleClick = () => {
        const { startDate, endDate } = this.state;

        // Call your function with startDate and endDate as parameters
        this.yourFunction(startDate, endDate);
    };

    yourFunction = (startDate, endDate) => {
        // Replace this with your actual logic using startDate and endDate
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);


        const htmlContent = `[400, 34.0, 6.22, 23.48, 1306, 11]
[454, 28.0, 6.44, 29.66, 994, 4]
[427, 32.0, 6.46, 24.55, 1377, 5]
[438, 35.0, 6.28, 30.05, 1350, 2]
[452, 29.0, 5.6, 26.24, 986, 0]`


        const result = ParseData(htmlContent);

        // Access the arrays from the result object
        console.log(result.array1);
        console.log(result.array2);
        console.log(result.array3);
        console.log(result.array4);
        console.log(result.array5);
        console.log(result.array6);

        PlotArray(result.array1)




    };

    render() {
        return (
            <div className='center'>
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        value={this.state.startDate}
                        onChange={this.handleStartDateChange}
                    />
                    <span>Start Date</span>
                </div>
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        value={this.state.endDate}
                        onChange={this.handleEndDateChange}
                    />
                    <span>End Date</span>
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

// class NewsletterForm extends React.Component {


//     render() {
//         return (
//             <div className="center">
//                 <form>
//                     <div className="inputbox">
//                         <input type="text" required="required" value={this.state.startDate}
//                             onChange={this.handleStartDateChange} />
//                         <span>Start Date</span>
//                     </div>
//                     <div className="inputbox">
//                         <input type="text" required="required" value={this.state.endDate}
//                             onChange={this.handleEndDateChange} />
//                         <span>End Date</span>
//                     </div>
//                     <div className="inputbox">
//                         <button id="submit_button" type="button" onClick={this.handleClick}>
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }



function Timeline() {
    const [dataArray, setDataArray] = useState([1, 2, 3, 4]);
    return (
        <>
            <Navbar />
            {/* <h2>Timeline Page</h2> */}
            {/* <NewsletterForm /> */}
            {/* <DateForm /> */}
            <PlotArray array={dataArray} />
            <PlotArray array={dataArray} />
            <PlotArray array={dataArray} />
            <PlotArray array={dataArray} />
            <PlotArray array={dataArray} />
            <PlotArray array={dataArray} />

        </>
    );
}

export default Timeline;
