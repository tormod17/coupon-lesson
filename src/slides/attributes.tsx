// src/components/Hello.tsx
import * as React from 'react';

export interface AttrState {
    selected?: number;
}

export interface AttrProp {
    show: boolean;
}


class Attr extends React.Component<AttrProp, AttrState> {
    public constructor(props: AttrProp) {
        super(props);
        this.state = {
            selected: 1,
        };
    }

    public render() {
        return (
            <div className="card attr">
                <h1 className="title is-1">Lets look at attributes?</h1>
                <ul className="list">
                    <li className="title is-4">class, style, id, src, data-field, href... anything within a tag is an attribute</li>
                    <li>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6CZHfNqoEE7_gIMqHVESDH-ZMEDaXmJqo6u_fwtReN-sBsP9" />
                    </li>
                    <li className="title is-4">how can we use this for mapping.</li>
                    <li className="team">
                        <img src="https://files.slack.com/files-pri/T02B49BP2-FBEUN1D37/image_from_ios.jpg" />
                        <img src="https://files.slack.com/files-pri/T02B49BP2-FBE8EAD25/image_from_ios.jpg" />
                        <img src="https://files.slack.com/files-pri/T02B49BP2-FBE408XJL/image_from_ios.jpg" />
                  
                    </li>
                    <li >
                        <code>
                            document.querySelectorAll('[src*="src"]')[0].getAttribute("src");
                        </code>
                    </li>
                    <li className="ycp-image">
                        <img src="https://files.slack.com/files-pri/T02B49BP2-FBENPFQ6Q/ycp-att.png" alt="" />
                    </li>
                    <li className="title is-4">lets see how we can use them [attribute=something]</li>
                    <li className="title is-4">Open your console select all the team images sources from this page.</li>
                </ul>
            </div>
        );
    }
}

export default Attr;
