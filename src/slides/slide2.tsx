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
         <h2>Why do we need to know CSS Selectors and HTML?</h2>
         <ul>
           <li>Select an element from a clients website, we use CSS Selectors</li>
           <li>Identify the user is on a URL, we use Regex</li>
           <li>Get a value from an element, we use Regex</li>
           <li>HTML the skeleton lets look at a tag</li>
           <li>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6CZHfNqoEE7_gIMqHVESDH-ZMEDaXmJqo6u_fwtReN-sBsP9"/>
           </li>
           <li>Attributes, what are they ?</li>
           <li>Used to store data, or provide an attribute to an element and can be used with CSS selectors</li>
           <li>Examples:- class, style, id, data-field, href... anything within a tag is an attribute</li>
           <li>
             <code>
               document.querySelectorAll('[src*="src"]')[0].getAttribute("src");
              </code>
            </li>
           <li>Open your console select all the image sources from this page.</li>
           <li>lets see how we can use them [attribute=something]</li>
         </ul>
       </div>
     );   
  }
}

export default Slide2;
