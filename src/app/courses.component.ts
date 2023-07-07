import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
        
        <h3>Courses API:  {{ title }}</h3>
        I used the Get Method to access my Course Data, see my example method below: <br><br>

        getCourses()<br>
            &nbsp; &nbsp; return ["Angular", "Python", "Flask", "JavaScript"]
    
        <p>&nbsp;</p>
        Here are the results returned in a bullet list below: <br>
        <strong>Name of Courses</strong> <br>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})

export class CoursesComponent {  
    title = "List of Courses";  
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        console.log('Checunya is getting the following courses:', this.courses)
    }
}