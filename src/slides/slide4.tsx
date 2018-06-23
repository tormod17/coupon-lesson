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
         <div>
            <p>Learn how to use Regex 101</p>
         </div>
         <div>
           <iframe width="100%" height="100vh" src="https://regex101.com/"/>
         </div>
       </div>
     );   
  }
}

export default Slide3;
