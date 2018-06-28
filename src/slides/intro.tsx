// src/components/Hello.tsx
import * as React from 'react';

export interface Slide1State {
    selected?: number;
}

export interface Slide1Prop {
  show: boolean;
}


class Intro extends React.Component<Slide1Prop, Slide1State> {
  
  public constructor(props: Slide1Prop) {
    super(props);
    this.state ={
      selected: 0,
    };
  }

  public render() {
     return (
       <div className="container intro card">
         <h1 className="title is-2">Welcome to Regex, CSS Selectors and Coupon Training</h1>
         <div className="content">
          <ul className="list">
            <li><p className="title is-4">Recap of an HTML element</p></li>
            <li><p className="title is-4">Some cool CSS selectors </p></li>
            <li><p className="title is-4">Lets look at some cool Regex</p></li>
            <li><p className="title is-4">Lets use Regex 101</p></li>
            <li><p className="title is-4">Lets look at a coupon campaign</p></li>
            <li><p className="title is-4">Multi Choice quiz</p></li>
            <li><p className="title is-4">Let's fix the coupon problem</p></li> 
          </ul>
         </div>
       </div>
     );   
  }
}

export default Intro
