import React, { Component } from 'react';
import PlanBox from './PlanBox'

class Plans extends Component {
    state = {
        workoutData: []
    };

    componentDidMount() {
        fetch('http://localhost:4005/Workouts').then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            throw new Error('Blad');
        })
            .then(data => {
                this.setState({
                    workoutData: data
                })
            })
    }

    render() {
        return (
            <div className="section__main">
                <div className="boxes-container">
                    <div className="current-plan"><h2>Yours plans</h2></div>
                    {/*{this.state.workoutData.map(function(el, i){*/}
                    {/*return (<div className='boxes-wrapper'>*/}
                    {/*{el.map(function(workoutElement, j) {*/}
                    {/*return(*/}
                    {/*<WorkoutBox workoutName={<h2 id={i}key={j}>{workoutElement.workoutName}</h2>}/>*/}
                    {/*)*/}
                    {/*})}</div>)*/}
                    {/*})}*/}

                    {this.state.workoutData.map((el, i) => {
                        return(
                            <div key={i} className="boxes-wrapper">
                                <PlanBox data={this.state.workoutData} id={el.id} planName={<h2>{el.planName}</h2>}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Plans;