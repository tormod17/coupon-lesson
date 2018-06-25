// src/components/Hello.tsx
import * as React from 'react';


export interface QuestionProp {
  questions: any[];
}

export interface QuestionState {
  selected: number;
}

class Question extends React.Component<QuestionProp, QuestionState> {

  public constructor(props: QuestionProp) {
    super(props);
    this.state = {
      selected: 0
    };
    this.next= this.next.bind(this);
    this.previous= this.previous.bind(this);
  }

  public render() {
     const { selected } = this.state;
     return (
       <div className={`${this.props.questions[selected].selector}`}>
         <div>
           <ul>
             <li>
               <h2>{this.props.questions[selected].Question}</h2>
             </li>
             <li>               
               <label className="checkbox">
                 <input type="checkBox"/>
                 {this.props.questions[selected].Answers.A}
               </label>
             </li>
             <li>               
               <label className="checkbox">
                 <input type="checkBox"/>
                 {this.props.questions[selected].Answers.B}
                </label>
             </li>
             <li>               
               <label className="checkbox">
                 <input type="checkBox"/>
                 {this.props.questions[selected].Answers.C}
               </label>
              </li>
           </ul>
         </div>
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
       </div>
     );   
  }

  private next():void {
    const length: number = this.props.questions.length;
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

export default Question;
