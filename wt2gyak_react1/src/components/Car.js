import * as React from "react";

class Car extends React.Component{
    render(){
        return <div class="card bg-secondary">
            <div className="card-header bg-dark">{this.props.car.plate}</div>
            <div className="card-body">
                <div className="card-text">Manufacturer: {this.props.car.manufacturer}</div>
                <div className="card-text">Model: {this.props.car.model}</div>
                <div className="card-text">Year: {this.props.car.year}</div>
                <div className="card-text">Horsepower: {this.props.car.horsepower}</div>
            </div>
        </div>
    }
}

export default Car;