import { LightningElement } from 'lwc';

const BASE_IMAGE_URL = 'https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars';

const COLORS = ['red', 'blue', 'black', 'green', 'white'];

export default class CarColorPicker extends LightningElement {

    colours= COLORS;
    selectedColour=this.colours[0];


    get selectedImage(){
        return `${BASE_IMAGE_URL}/car_${this.selectedColour}.jpg`;
    }

    selectedColourHandler(event){
        this.selectedColour = event.target.dataset.color;
    }

    
}