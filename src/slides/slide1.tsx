// src/components/Hello.tsx
import * as React from 'react';

export interface Slide1State {
    selected?: number;
}

export interface Slide1Prop {
  show: boolean;
}


class Slide1 extends React.Component<Slide1Prop, Slide1State> {
  public constructor(props: Slide1Prop) {
    super(props);
    this.state ={
      selected: 0,
    };
  }

  public render() {
     return (
       <div>
         <h2>Welcome to Regex, CSS Selectors and Coupon Training</h2>
         <p>What we'll cover</p>
         <ul>
           <li>Recap of an HTML element</li>
           <li>Some cool CSS selectors </li>
           <li>Lets look at some cool Regex</li>
           <li>Lets use Regex 101</li>
           <li>Lets look coupon campaings</li>
           <li>Multi Choice quiz</li>
           <li>Let's fix the coupon problem</li> 
          </ul>
       </div>
     );   
  }
}

export default Slide1;
