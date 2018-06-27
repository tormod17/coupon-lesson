// src/components/Hello.tsx
import * as React from 'react';

export interface Slide3State {
  currencySelector: string;  
  selected?: number;
}

export interface Slide3Prop {
  show: boolean;
}


class Slide3 extends React.Component<Slide3Prop, Slide3State> {
  
  public constructor(props: Slide3Prop) {
    super(props);
    this.state ={
      currencySelector: '',
      selected: 1,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  public render() {
    const { currencySelector } = this.state;
     return (
       <div className="card pSelectors">
         <h1 className="title is-1">CSS Selectors, Let's see some cool ones</h1>
         <ul>
          <li>
            <div id="currencies-block-top">
              <form id="setCurrency" action="/" method="post">
                <div style={{display: 'none'}}>
                  <input type="hidden" name="id_currency" id="id_currency" value=""/>
                    <input type="hidden" name="SubmitCurrency" value=""/>
                      <span className="cur-label">Currency:</span>
                      <strong>$</strong>
                      <img  src="data:image/jpeg;base64,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"/>
                </div>
                  <ul>
                    <li>
                      <a href="javascript:setCurrency(4);" rel="nofollow" title="Australian Dollar (AUD)">
                        Australian Dollar (AUD)
                      </a>
                    </li>
                    <li data-attr="selected" >
                      <a  href="javascript:setCurrency(1);" rel="nofollow" title="Dollar (USD)">
                        Dollar (USD)
                      </a>
                    </li>
                    <li>
                      <a href="javascript:setCurrency(3);" rel="nofollow" title="Euro (EUR)">
                        Euro (EUR)
                      </a>
                    </li>
                   <li>
                     <a href="javascript:setCurrency(2);" rel="nofollow" title="Pound Sterling (GBP)">
                       Pound Sterling (GBP)
                      </a>
                   </li>
                  </ul>
                  <ul className="mobile" style={{'display': 'none'}}>
                    <li>
                      <a href="javascript:setCurrency(4);" rel="nofollow" title="Australian Dollar (AUD)">
                        Australian Dollar (AUD)
                        </a>
                    </li>
                    <li data-attr="selected" >
                      <a href="javascript:setCurrency(1);" rel="nofollow" title="Dollar (USD)">
                        Dollar (USD)
                        </a>
                    </li>
                    <li>
                      <a href="javascript:setCurrency(3);" rel="nofollow" title="Euro (EUR)">
                        Euro (EUR)
                        </a>
                    </li>
                    <li>
                      <a href="javascript:setCurrency(2);" rel="nofollow" title="Pound Sterling (GBP)">
                        Pound Sterling (GBP)
                        </a>
                    </li>
                  </ul>
                </form>
              </div>
          </li>
           <li>
             <code>
               <p>document.querySelectorAll('[title="Australian Dollar (AUD)"]')[0].style.background ='blue';</p>
               <p>// selects all elements with an href attribute that contains "javascript"</p>
               <p>document.querySelectorAll('form > [style*="display: none;"]')[0].style.display = 'block';</p>
               <p>// selects the form element and the first decendent div with an attribute style of display none"</p>
               <p>document.querySelectorAll('div.current + ul')[0].style.background = 'green';</p>
               <p>// Selects the ul element immediately after the div with a class current</p>
             </code>
           </li>
          <li className="title is-4">Open your console and copy and paste the above to color the page.</li>
           <li className="title is-4">
            <p>Whats the selector you need to get the selected currency code?</p>
            <input 
              onChange={this.updateValue}
              value={currencySelector}
            />
          </li>
           <li className="title is-4">
             <p>What's the selector you would use to get the page type for the <a href="https://www.thegoodguys.com.au/fisher-and-paykel-8kg-condenser-dryer-de8060p2?rrec=true">the good guys</a></p>
             <input />
          </li>
         </ul>
       </div>
     );   
  }
 
  private updateValue(e: React.FormEvent<HTMLInputElement>): void {
    const val = e.currentTarget.value
    if (val === '[data-attr= selected]') {
      alert('correct');
    }
    this.setState({
      currencySelector: val,
    });
  }
}

export default Slide3;
