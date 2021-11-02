import { LightningElement, track } from 'lwc';


export default class Students extends LightningElement {
    @track students = [];


    getStudents(){
        //assigning students data to students variable
        this.students = [
            {
                name: 'Kanika',
                age: 23,
                id: 1
            },
            {
                name: 'Divya',
                age: 17,
                id: 2
            },
            {
                name: 'Kavya',
                age: 17,
                id: 3
            },
        ];
    }
    //getter method to check if students array have value
    get isStudentsAvailable(){
        return this.students.length > 0;
    }
}
