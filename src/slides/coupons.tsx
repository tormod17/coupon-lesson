// src/components/Hello.tsx
// src/components/Hello.tsx
import * as React from 'react';

export interface Slide5State {
  selected: number;
}

export interface Slide5Prop {
  show: boolean;
}

class Slide5 extends React.Component<Slide5Prop, Slide5State> {

  private instruction: string[][];

  public constructor(props: Slide5Prop) {
    super(props);
    this.state = {
      selected: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.instruction = [
      ['Static coupons vs dynamic coupons', 'Static coupons are added in YCP creatives', 'Dynamic coupons added through coupon carrier'],
      ['Create a list using YCP site ID followed by the name of the offer, here is the guide'],
      ['Note a list in coupon carrier must have at least 16 coupons otherwise YCP will not trigger campaign'],
      ['For dynamic coupons the list ID is taken from the list number found in the URL from the list page on coupon carrier'],
      ['Auto-apply adds the coupon to the promo code input field and clicks its CTA.' , 'A client must map promo input and CTA.'],
      ['Auto - fill adds the coupon to the poromo code input field.',  'A user must map the promo input only.'],
      ['Checking the console and local storage for the addition of a coupon.','Must check the td.yieldify frames local storage.'],
      ['You can use atob() to decode the value, everything after the colon']
    ]
  }
  
  public render() {
    const { selected } = this.state;
    return (

      <div className="coupons">
        <div className="columns">
          <div className="column is-three-quarters content">
            <h1 className="subtitle is-5 instruct">Coupons</h1>
            <ul>
            { this.instruction[selected].map((inst, i) =>
                <li key={inst} ><p className="instruct">{inst}</p></li>
              )
            }
            </ul>
          </div>
          {selected < this.instruction.length - 1 &&
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
          <iframe style={{ display: `${selected === 0 ?'block' : 'none' }`}} width="100%" height="100vh" src="https://convert.yieldify.com/org/307/site/852/dashboard?page=1&filter=1000" />
          <iframe style={{ display: `${(selected === 1 || selected === 3) ? 'block' : 'none' }`}} width="100%" height="100vh" src="https://docs.google.com/presentation/d/18OUvgrYFK1jFEyiXTObwymUJRf0xeIi_iEiyx6HQvNs/edit#slide=id.g2f1f3c62c3_0_8" />
          <iframe style={{ display: `${selected === 2 ?'block' : 'none' }`}} width="100%" height="100vh" src="https://app.couponcarrier.io/#/code-lists?_k=xyhgb" />
          <iframe style={{ display: `${selected > 3 ?'block' : 'none' }`}} width="100%" height="100vh" src="http://ycp1.yieldifytraining.com" />
        </div>
      </div>
    );
  }

  private next(): void {
    const length: number = this.instruction.length;
    const { selected } = this.state;
    if (selected === (length - 1)) {
      return;
    } else {
      this.setState({
        selected: selected + 1
      });
    }
  }

  private previous(): void {
    const { selected } = this.state;
    if (selected === 0) {
      return;
    } else {
      this.setState({
        selected: selected - 1
      });
    }
  }
}

export default Slide5;