// src/components/Hello.tsx
import * as React from 'react';

export interface Slide1State {
    selected?: number;
}

export interface Slide1Prop {
  show: boolean;
}


class TextContent extends React.Component<Slide1Prop, Slide1State> {
  
  public constructor(props: Slide1Prop) {
    super(props);
    this.state ={
      selected: 0,
    };
  }

  public render() {
     return (
       <div className="container intro card">
         <h1 className="title is-2">We use textContent to return text from inside a selected element</h1>
         <div className="content">
          <ul className="list">
            <li><p className="title is-4">This is what happens next</p></li>
            <li>
                <code> 
                    return elem.textContent.replace(/\s+/g, ' ').replace(/\n/g, ' ');
                </code>
            </li> 
            <li><p className="title is-4">We replace the extra white space and the new lines with an empty space.</p></li>
            <li><p className="title is-4">This means text strings over multiple lines will have a much shorter length</p></li>
          </ul>
         </div>
       </div>
     );   
  }
}

export default TextContent
