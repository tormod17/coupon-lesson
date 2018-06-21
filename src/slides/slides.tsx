// src/components/Hello.tsx
import * as React from 'react';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';


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
      selected: 0,
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.slideElements = [ 
       <Slide1 show={true} key={1}/>,
       <Slide2 show={true} key={2}/>,
       <Slide3 show={true} key={3}/>
     ];
  }

  public render() {
     const { selected } = this.state;

     return (
       <div>
         <div>
           <button onClick={this.previous}>
             Previous
           </button>
            <button onClick={this.next}>
             Next
           </button>
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
