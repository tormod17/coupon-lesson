// src/components/Hello.tsx
import * as React from 'react';

export interface Slide3State {
    selected?: number;
}

export interface Slide3Prop {
  show: boolean;
}


class Slide3 extends React.Component<Slide3Prop, Slide3State> {
  public constructor(props: Slide3Prop) {
    super(props);
    this.state ={
      selected: 1,
    };
  }

  public render() {
     return (
       <div>
         Hello Slide 3, Introduction to HTML and Javascript.
       </div>
     );   
  }
}

export default Slide3;
