import * as React from "react";
import Car from "./Car.js";

class SearchCar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchWord : "",
            searchCar : props.cars

        }
    }


    handleChange(event){
        this.setState({
            searchWord:event.target.value
        })
    }

    search = searchable =>{
        alert("Hello");
        if(searchable === "" || searchable === undefined){
            this.setState({searchCar:this.props.cars})
        } else{
            alert(this.props.cars);
            let filteredCars = this.props.cars.filter((car)=>{
                return car.manufacturer.toLowerCase() === searchable.toLowerCase();
            });
            alert(filteredCars.length);
            if(filteredCars.length===0){
                this.setState({searchCar:[]});
                alert("Hello3");
            }else{
                this.setState({searchCar:filteredCars})
                alert("Hello4");
            }
        }
    }


    render(){
        return <div className="text-capitalize">
            jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            <div>
                <input name="searchWord" value={this.state.searchWord} onChange={this.handleChange.bind(this)}/>
                <button onClick={()=>this.search(this.state.searchWord)}>Search</button>
            </div>
            <div>
                {this.state.searchCar.map((car)=>
                <Car car={car}/>)}
            </div>
        </div>
    }
}

export default SearchCar;