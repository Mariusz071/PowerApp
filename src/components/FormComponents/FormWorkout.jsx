import React, {Component} from 'react'

class FormWorkout extends Component {
    state = {
        workoutName: this.props.workoutName,
        setsNumber: '',
        exerciseName: '',
        workoutsArray: ''
    };

    handleSetsChange = (e) => {
        const setsNumber = e.target.value;
        this.setState({
            setsNumber: Number(setsNumber)
        })
    };

    handleExerciseName = (e) => {
        const exerciseName = e.target.value;
        this.setState({
            exerciseName: exerciseName
        })
    };


    addExercise = (e) => {
        e.preventDefault();
        let array = [];
        const workoutObject = {'workoutName': this.props.workoutName,
                                'exerciseName': this.state.exerciseName,
                                'setsNumber':this.state.setsNumber};
        array.push(workoutObject);
        this.setState({
            workoutsArray: [...this.state.workoutsArray, workoutObject]
        });

        this.setState({
            setsNumber: ''
        });

        this.setState({
            exerciseName: ''
        });

        let exercisesArray = this.state.workoutsArray;
        this.props.getExercises(exercisesArray)
    };

    // submitHandler = () => {
    //
    // }

//Jak wyczyscic inputy? Stan maja ustawion na '' wiec czemu sie nie czyszcza?



    render() {
        console.log(this.state.workoutsArray);

        return(
            <div className="form-workout" >
                <label className="form-workout--label-wrapper">
                    Name of the exercise
                    <input type="text" id="exerciseName" className="form-workout--exercise-name" onChange={this.handleExerciseName}/>
                </label>

                <label className="form-workout--label-wrapper">
                    How many sets are you up to?
                    <input type="text" className="form-workout--workout-sets" id="exerciseSets" onChange={this.handleSetsChange}/>
                </label>
                <button type="submit" className="plan-form__workout-number-btn" id="addExercise" onClick={this.addExercise}>Add this exercise <i className="far fa-plus-square"></i></button>
            </div>
        )
    }
}

export default FormWorkout