//These will be in the database later in this project
const workout1 = '/assets/dailiyWorkoutDemo.png';
const workout2 = '/assets/dailiyWorkoutDemo.png';
const workout3 = '/assets/dailiyWorkoutDemo.png';
const workout4 = '/assets/dailiyWorkoutDemo.png';
const workout5 = '/assets/dailiyWorkoutDemo.png';
let workouts =[workout1, workout2, workout3, workout4, workout5];
localStorage.setItem("workouts", JSON.stringify(workouts));

const newWorkout = (path) => `
    <div class="workoutItem">
        <a href = "${path}">Workout</a>
    </div>
`
const addWorkout = (thisWorkout)=>{
    listOfWorkouts.innerHTML += newWorkout(thisWorkout)
}

//simulation of taking them from the database and inserting into the DOM
const listOfWorkouts = document.querySelector('.workoutsList');
let importedWorkouts = JSON.parse(localStorage.getItem("workouts"));
importedWorkouts.slice().reverse().forEach(x => addWorkout(x));







