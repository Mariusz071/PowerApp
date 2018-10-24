import React, {Component} from 'react';
import FormWorkout from "./FormWorkout";

class CreatePlanForm extends Component {
    state = {
        workoutsChange: '',
        exercises: [],
        workoutName: '',
    };

    handleGetExercises = (array) => {
        this.setState({exercises:  [...array]})
    };

    // handleWorkoutsChange = (e) => {
    //     const val = e.target.value;
    //     this.setState({
    //         workoutsChange: val,
    //     })
    // };

    handleWorkoutName = (e) => {
        const val = e.target.value;
        this.setState({
            workoutName: val
        })
    };





    render() {
        console.log(this.state.exercises);
        return(
            <div className="form-wrapper">
                <form className="plan-form" onSubmit={this.handleSubmit}>
                    {/*<label className="plan-form__workout-number" >How many workouts are you planning?*/}
                        {/*<div className="label-content-wrapper">*/}
                            {/*<input className="plan-form__workout-number-input" type="text" onChange={this.handleWorkoutsChange} value={this.state.workoutsChange} />*/}
                            {/*<button className="plan-form__workout-number-btn" onClick={this.addExercisesForm}><i className="far fa-plus-square"></i> Add workouts</button>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                    <label className="plan-form__workout-name">
                        Name of the workout
                        <input type="text" id="workoutName" className="plan-form__workout-name-input" onChange={this.handleWorkoutName}/>
                    </label>
                        <div className="plan-form__workoutElement">
                            <FormWorkout getExercises={this.handleGetExercises} workoutName={this.state.workoutName}/>
                        </div>

                    <button type="submit" id="addPlan" className="btn btn--white">Submit</button>
                </form>
            </div>
        )
    }
}


export default CreatePlanForm
// CreatePlanForm