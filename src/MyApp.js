import React, {Component} from 'react'
import './MyApp.css'

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          instructors: [
            {
              name: 'Tim',
              hobbies: ['sailing', 'react']
            }, {
              name: 'Matt',
              hobbies: ['math', 'd3']
            }, {
              name: 'Colt',
              hobbies: ['css', 'hiking']
            }, {
              name: 'Elie',
              hobbies: ['music', 'es2015']
            }
          ]
        };

        setTimeout(() => {
            //random number instructor
            const ranInstruct = Math.floor(
                Math.random() * 
                this.state.instructors.length
            );
            //random number hobby
            const ranHobby = Math.floor(
                Math.random() * 
                this.state.instructors[ranInstruct].length
            );
            //makes a copy of our instructors array and returns it to this variable
            const instructors = this.state.instructors.slice();
            //make copy of original object we want to mutate
            instructors[ranInstruct] = Object.assign({}, instructors[ranInstruct]);
            //make a copy of the original hobbies array
            instructors[ranInstruct].hobbies = instructors[ranInstruct].hobbies.slice();
            //removing that specific hobby index
            instructors[ranInstruct].hobbies.splice(ranHobby, 1);
            //setting the state to the copy of the original array w/ the hobby value removed
            this.setState({instructors})
        }, 5000);
      }
      render() {
        const instructors = this.state.instructors.map((instructor, index) => (
          <li key={index}>
            <h3>{instructor.name}</h3>
            <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
          </li>
        ));
        return (
          <div className="App">
            <ul>
              {instructors}
            </ul>
          </div>
        );
      }
}

export default MyApp;