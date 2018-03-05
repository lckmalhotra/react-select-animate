import React, {Component} from "react";

class ReactSelectAnimate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    handleClick = (e, value) => {
        this.props.onChange(value);
    };

    toggleButtonClick = () => {
        if (!this.state.toggle) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState({toggle: !this.state.toggle});
    };

    handleOutsideClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.toggleButtonClick();
    };

    render() {

        const {
            options,
            placeholder,
            value,
            effect
        } = this.props;
        const {title} = value;

        return (
            <div className={`react-select-animate ${effect}`} ref={node => {
                this.node = node;
            }} onClick={this.toggleButtonClick}>

                <input
                    type="text"
                    className="react-select-animate__input"
                    placeholder={placeholder}
                    value={title}
                    readOnly={true}
                    onChange={() => {
                    }}
                    autoComplete="off"/>

                <div
                    className={this.state.toggle ? "react-select-animate__list show-list" : "react-select-animate__list hide-list"}>
                    <ul>
                        {
                            options ? options.map((item, i) => <li onClick={(e) => this.handleClick(e, item)} key={i}>
                                <span>{item.title}</span></li>) : false
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ReactSelectAnimate;
