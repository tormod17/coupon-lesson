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
         <h2>CSS Selectors, Let's see some cool ones</h2>
         <ul>
          <li>
            PRACTICE MENU 
            <div id="currencies-block-top">
              <form id="setCurrency" action="/" method="post">
                <div className="current">
                  <input type="hidden" name="id_currency" id="id_currency" value=""/>
                    <input type="hidden" name="SubmitCurrency" value=""/>
                      <span className="cur-label">Currency:</span>
                      <strong>$</strong>
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
               <p>document.querySelectorAll('[title~="Australian"]')[0].style.background ='blue';</p>
               <p>// selects all elements with an href attribute that contains "javascript"</p>
               <p>document.querySelectorAll('[data-attr="selected"]')[0].style.background = 'yellow';</p>
               <p>// selects all elements with an data-attr attribute that is equal to "selected"</p>
               <p>document.querySelectorAll('div.current + ul')[0].style.background = 'green';</p>
               <p>// Selects the ul element immediately after the div with a class current</p>
             </code>
           </li>
          <li>Open your console and copy and paste the above to color the page.</li>
          <li>
            <p>Get the selected currency, as if you were setting up currency mapping.</p>
            <input />
          </li>
          <li>
             <p>What's the selector you would use to get the code page type for the <a href="https://www.thegoodguys.com.au/fisher-and-paykel-8kg-condenser-dryer-de8060p2?rrec=true">the good guys</a></p>
             <input />
          </li>
         </ul>
       </div>
     );   
  }
}

export default Slide3;
