// src/components/Hello.tsx
import * as React from 'react';


export interface QuestionProp {
  questions: any[];
}

export interface QuestionState {
  lastQ: boolean;
  userAnswers: string[];
  selected: number;
}

class Question extends React.Component<QuestionProp, QuestionState> {

  public constructor(props: QuestionProp) {
    super(props);
    this.state = {
      lastQ: false,
      selected: 0,
      userAnswers: []
    };
    this.next= this.next.bind(this);
    this.previous= this.previous.bind(this);
  }

  public componentDidUpdate(){
    const elem = document.querySelector('input:checked');
    if (elem instanceof HTMLInputElement) {
      elem.checked = false ;
    } 
    const checkEls = document.querySelectorAll('.fa.fa-check');
    const score = document.querySelector('#score'); 
    if(checkEls.length > 0 && score instanceof HTMLElement) {
      score.innerHTML = `Score: ${checkEls.length} / ${this.state.userAnswers.length}`;
    } 
  }
  
  public render() {
    const { selected, lastQ, userAnswers } = this.state;
    return (
     <div>
     {!lastQ &&
      <div className="quiz card"> 
        <h1 className="title is-2">Quiz</h1>
      <div className={`${this.props.questions[selected].selector}`}>
         <div>
           <ul>
             <li>
                <h1 className="title is-5">{this.props.questions[selected].Question}?</h1>
             </li>
             <li>               
               <label className="checkbox" >
                 <input name="A" type="checkBox"/>
                <span>{this.props.questions[selected].Answers.A}</span>
               </label>
             </li>
             <li>               
               <label className="checkbox">
                 <input name="B" type="checkBox"/>
                 <span>{this.props.questions[selected].Answers.B}</span>
                </label>
             </li>
             <li>               
               <label className="checkbox">
                 <input name="C" type="checkBox"/>
                 <span>{this.props.questions[selected].Answers.C}</span>
               </label>
              </li>
           </ul>
         </div>
         <div className="column">
            <div>
              <button
                className="button"
                onClick={this.previous}
              >
                go back
              </button>
              <button
                className="button is-primary is-outlined"
                onClick={this.next}
              >
                submit
              </button>
            </div>
         </div>
         </div>
        </div>
        }
        { lastQ &&
          <div>
            <div className="lq">
              <h1 className="title is-2">Quiz</h1>
              <div className="">
                <ul className="questions">
                {this.props.questions.map((question, i) =>
                  <li className="" key={`questions${i}`}>
                    <span>{`${i+1}. ${question.Question} ?   `}</span>
                    <span> -- </span>
                    <span>{`  ${question.Answers[question.CorrectAnswer]}`}</span>
                    <span className="icon">
                    { question.CorrectAnswer === userAnswers[i] ?
                      <i className="fa fa-check"/> :
                      <i className="fa fa-times"/> 
                    }
                    </span>
                  </li>
                )}
                </ul>
              </div>
            </div>
            <div>
              <h2 id="score"/>
            </div>
          </div>
         } 
      </div>    
     );   
  }

  private next():void {
    const length: number = this.props.questions.length;
    const { selected, userAnswers } = this.state;
    const elem = document.querySelector('input:checked');
    if (elem instanceof HTMLInputElement) {
      const answer  = `${elem.getAttribute('name')}`;
      userAnswers[selected] = answer;
      const lastQ = selected === (length - 1)
      this.setState({
        lastQ,
        selected: selected + (lastQ ? 0 : 1),
        userAnswers
      });
    } else {
      // alert('no answer , please provide an answer');
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
