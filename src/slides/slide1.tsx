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
         <p>Hello Slide 1, Introduction to HTML and Javascript.</p>
         <code>document.querySelectorAll[0].textContent</code>
       </div>
     );   
  }
}

export default Slide1;
