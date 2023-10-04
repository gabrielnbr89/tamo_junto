import React from 'react';
import CountUp from 'react-countup';
import '../../estilos/Counter.css';
const Counter = (props) => {
    return(
        <table summary="assiciados" className='tabla'>
            <caption>
                lorem
            </caption>
            <thead>
                <tr>
                    <th> consectetur adipisicing</th>
                    <th>Lorem ipsum dolor sit amet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><CountUp end={100} duration={4} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={1}/></th>
                    <th><CountUp end={80} duration={4} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={1}/></th>
                </tr>
            </tbody>
        </table>
    )
        
}
export default Counter;