// src/components/Hello.tsx
import * as React from 'react';
import Data from '../data.json';

import Questions from '../quiz/question';
import Attributes from './attributes';
import Coupons from './coupons';
import CssSelectors from './cssSelectors';
import Intro from './intro';
import PSelectors from './practiceSelectors';
import Regex101 from './regex101';
import TextContent from './textContent';

export interface SlidesState {
    selected: number;
}

export interface SlidesProp {
    show: true;
}

class Slides extends React.Component<SlidesProp, SlidesState> {

  private slideElements: JSX.Element[];
  
  public constructor(props: SlidesProp) {
    super(props);
    this.state ={
      selected: 6,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.slideElements = [ 
       <Intro show={true} key={1}/>,
       <CssSelectors show={true} key={2}/>,
       <TextContent show={true} key={3}/>,
       <Attributes show={true} key={5}/>,
       <PSelectors show={true} key={6}/>,
       <Regex101 show={true} key={7}/>,
       <Coupons show={true} key={8} />,
       <Questions questions={Data} key={9}/>
     ];
  }
  public render() {
     const { selected } = this.state;

     return (
       <div className="slides">
         <div className="level slides">
           <div className="level-item level-right">
             <button className="button " onClick={this.previous}>
               Previous Slide
             </button>

              <button className="button is-primary is-outlined" onClick={this.next}>
               Next Slide
             </button>
           </div>
         </div>
         <div>
          {this.slideElements.map((Ele, i) =>
                <div key={`${i} key`}>
                  { i === selected && Ele} 
                </div>
             ) 
           }
         </div>  
       </div>
     );   
  }

  private next():void {
    const length: number = this.slideElements.length;
    this.setState({
      selected: this.state.selected < (length - 1) ? this.state.selected + 1 : 0,
    })
  }

  private previous():void {
    const length: number = this.slideElements.length;
    this.setState({
      selected: this.state.selected  > 0 ? this.state.selected - 1 : length - 1,
    })
  }
}

export default Slides;
