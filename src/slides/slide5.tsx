// src/components/Hello.tsx
import * as React from 'react';

export interface Slide5State {
    selected?: number;
}

export interface Slide5Prop {
  show: boolean;
}


class Slide5 extends React.Component<Slide5Prop, Slide5State> {
  public constructor(props: Slide5Prop) {
    super(props);
    this.state ={
      selected: 1,
    };
  }

  public render() {
     return (
       <div>
         <h2>Auto-apply, Auto-fill</h2>
         <ul>
           <li>Static coupons vs dynamic coupons</li>
           <li>Coupon carrier linking list ID to campaign</li>
           <li>Auto-apply adds the coupon to the promo code input field and clicks its CTA</li>
           <li>Auto-fill adds the coupon to the poromo code input field</li>
           <li>Checking the console and local storage for the addition of a coupon</li>
         </ul>
       </div>
     );   
  }
}

export default Slide5;
