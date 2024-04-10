//These will be in the database later in this project
/*const workout1 = '/assets/dailyWorkoutDemo.png';
const workout2 = '/assets/dailyWorkoutDemo.png';
const workout3 = '/assets/dailyWorkoutDemo.png';
const workout4 = '/assets/dailyWorkoutDemo.png';
const workout5 = '/assets/dailyWorkoutDemo.png';
let workouts =[workout1, workout2, workout3, workout4, workout5];
localStorage.setItem("workouts", JSON.stringify(workouts));

const newWorkout = (path) => `
    <div class="workoutItem">
        <a href=${path}>Workout</a>
    </div>
`
const addWorkout = (thisWorkout)=>{
    listOfWorkouts.innerHTML += newWorkout(thisWorkout)
}

//simulation of taking them from the database and inserting into the DOM
const listOfWorkouts = document.querySelector('.workoutsList');
let importedWorkouts = JSON.parse(localStorage.getItem("workouts"));
importedWorkouts.slice().reverse().forEach(x => addWorkout(x));
*/
newWorkouts();

async function newWorkouts(){
    const response = await fetch('/workout', {
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const body = await response.json();
    const list = body.list;
    list.forEach(x=>addNewWorkout(x));
}

const addNewWorkout = (workout) =>{
    var element = document.getElementById("workoutsList");
    var tag = createWorkoutItem(workout.name, workout.warmup, workout.main, workout.cooldown);
    element.appendChild(tag);
}

function createWorkoutItem(name, warmup, main, cooldown){
    var work = document.createElement("pre");
    work.innerHTML += String(name);
    work.innerHTML += "</br>";
    work.innerHTML += "  Warmup:"
    work.innerHTML += "</br>";
    warmup.forEach(x=>{
        work.innerHTML += "    "
        work.innerHTML += String(x);
        work.innerHTML += "</br>";
    })
    work.innerHTML += "  Workout:"
    work.innerHTML += "</br>";
    main.forEach(x=>{
        work.innerHTML += "    "
        work.innerHTML += String(x);
        work.innerHTML += "</br>";
    })
    work.innerHTML += "  Cooldown:"
    work.innerHTML += "</br>";
    cooldown.forEach(x=>{
        work.innerHTML += "    "
        work.innerHTML += String(x);
        work.innerHTML += "</br>";
    })
    var tag = document.createElement("div");
    tag.setAttribute("class", "workoutItem");
    tag.appendChild(work);
    return tag;
}





