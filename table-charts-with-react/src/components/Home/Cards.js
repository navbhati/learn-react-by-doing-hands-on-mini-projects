import React from 'react';
import CountUp from 'react-countup';
import { Loading } from '../Loading';

export const Cards = (props) => {
    //console.log(props);

    if (!props.data.total_cases) {
        return (<Loading />)
    }

    return (
        <div className="card-group mb-4">
            <div className="card shadow-lg">
                <div className="card-body bg-info justify-content-center">
                    <h5 className="card-title"><CountUp start={0} end={parseInt(props.data.total_cases.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                    <p className="lead">Total Cases</p>
                </div>
                <div className="card-footer">
                    <small>Last Updated: {props.data.statistic_taken_at}</small>
                </div>
            </div>
            <div className="card shadow-lg">
                <div className="card-body bg-danger justify-content-center">
                    <h5 className="card-title"><CountUp start={0} end={parseInt(props.data.total_deaths.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                    <p className="lead">Total Deaths</p>
                </div>
                <div className="card-footer">
                    <small>Last Updated: {props.data.statistic_taken_at}</small>
                </div>
            </div>

            <div className="card shadow-lg">
                <div className="card-body bg-secondary justify-content-center">
                    <h5 className="card-title"><CountUp start={0} end={parseInt(props.data.new_cases.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                    <p className="lead">New Cases Today</p>
                </div>
                <div className="card-footer">
                    <small>Last Updated: {props.data.statistic_taken_at}</small>
                </div>
            </div>
            <div className="card shadow-lg">
                <div className="card-body bg-warning justify-content-center">
                    <h5 className="card-title"><CountUp start={0} end={parseInt(props.data.serious_critical.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                    <p className="lead">Total Critical</p>
                </div>
                <div className="card-footer">
                    <small>Last Updated: {props.data.statistic_taken_at}</small>
                </div>
            </div>
            <div className="card shadow-lg">
                <div className="card-body bg-success justify-content-center">
                    <h5 className="card-title"><CountUp start={0} end={parseInt(props.data.total_recovered.replace(/,/g, ''))} duration={1.5} separator="," /></h5>
                    <p className="lead">Total Recovered</p>
                </div>
                <div className="card-footer">
                    <small>Last Updated: {props.data.statistic_taken_at}</small>
                </div>
            </div>
        </div>
    )
}