import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from "enzyme";
import CamreRoll from './CamreRoll';
//import { handleIncrement } from './CamreRoll'

// test ('Increment', ()=>{
//     // CamreRoll.handleIncrement = jest.fn();
//     const value = handleIncrement(3);
//     expect(value).toBe(4);
// }); 
 
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<CamreRoll />, div);

});