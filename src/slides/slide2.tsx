// src/components/Hello.tsx
import * as React from 'react';

export interface Slide2State {
    selected?: number;
}

export interface Slide2Prop {
  show: boolean;
}


class Slide2 extends React.Component<Slide2Prop, Slide2State> {
  public constructor(props: Slide2Prop) {
    super(props);
    this.state ={
      selected: 1,
    };
  }

  public render() {
     return (
       <div>
         <p>Hello Slide 2, Introduction to HTML and Javascript.</p>
       </div>
     );   
  }
}

export default Slide2;
