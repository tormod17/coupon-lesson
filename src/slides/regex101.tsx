// src/components/Hello.tsx
import * as React from 'react';

export interface Slide4State {
    selected: number;
}

export interface Slide4Prop {
  show: boolean;
}

// function addInlineStyle(selector: string, style: string): void{
//   const elem = document.querySelector(selector);
//     if (elem instanceof HTMLElement) {
//       elem.style.display = style;                
//     } else {
//       throw new Error("element #test not in document")
//     }
// }

class Slide4 extends React.Component<Slide4Prop, Slide4State> {
  
  private instruction: string[][]; 

  public constructor(props: Slide4Prop) {
    super(props);
    this.state = {
      selected: 0
    };
    this.next= this.next.bind(this);
    this.previous= this.previous.bind(this);
    this.instruction = [
      ['Login through google and select javascript as your flavour',  'We can see a breakdown of what the regex is matching', 'Quick Reference', 'save regex for later'],
      ['Lets look at quantifiers, {0,250}, {250}, +,  *, ?', '{0,250} a range of 0 to 250', '{250} matches exactly 250 characters', '+ one or more', '* zero or more', '? zero or one' ],
      ['Map the addidas product pages we only want shoes', 'Grab a sample of different urls from the site to test your regex (could use Looker for this)'],
      ['Negative/ Positive Look ahead. (?!.+-) OR (?=.+-)', '(?!.+-) forget all characters before "-" match all after.' , 'Test string aabbcc-aabbcc-aabbcc'],
      ['Map product page for the good guys site.']
     ]
  }

  // public componentDidUpdate(){
  //   this.hideSlideButtons()
  // }

  // public componentDidMount(){
  //   this.hideSlideButtons()
  // }

  public render() {
    const { selected } = this.state;
     return (
       <div className="regex101">
         <div className="columns">
            <div className="column is-three-quarters content">
              <h1 className="subtitle is-5 instruct">Regex 101</h1>
              <ul>
              { this.instruction[selected].map(inst =>
                 <li key={inst}><p className="instruct">{inst}</p></li>
                )
              }
              </ul>
            </div>
            { selected < this.instruction.length -1 &&
              <div className="column">
                  <button
                    className="button"
                    onClick={this.previous}
                  >
                   previous
                  </button>
                  <button 
                    className="button is-primary is-outlined"
                    onClick={this.next}
                  >
                    next
                  </button>
              </div>
             }
         </div>
         <div className="regex101">
           <iframe width="100%" height="100vh" src="https://regex101.com/"/>
         </div>
       </div>
     );   
  }
  
  // private hideSlideButtons(): void{
  //   const { selected } = this.state;
  //   const style = (selected < (this.instruction.length -1)) ? 'none' :'block';
  //   addInlineStyle('.slides > div > div', style);             
  // }

  private next():void {
    const length: number = this.instruction.length;
    const { selected } = this.state;
    if(selected === (length -1)){
      return;
    } else {
      this.setState({
        selected: selected + 1
      });
    }
  }

  private previous():void {
    const { selected } = this.state;
    if(selected === 0){
      return;
    } else {
      this.setState({
        selected: selected - 1
      });      
    }
  }
}

export default Slide4;
