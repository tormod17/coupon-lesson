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
       <div className="card attrCSS content">
         <h1 className="title is-1">CSS Selectors and Regex?</h1>
         <div className="content">
          <ul className="list">
            <li className="title is-4">Select an element from a clients website, we use CSS Selectors</li>
            <li className="title is-4">We always want to return just one element</li>
            <li className="title is-4">Identify the user is on a URL, we use Regex</li>
            <li className="title is-4">Get a string from an element, we use Regex</li>
          </ul>
        </div>
       </div>
     );   
  }
}

export default Slide2;
