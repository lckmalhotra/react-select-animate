import React, { Component } from "react";

class ReactSelectAnimate extends Component {

    constructor(props) {
        super(props);

        this.handleClick = (e, value) => {
            this.props.onSelection(value);
        };

        this.toggleButtonClick = () => {
            if (!this.state.toggle) {
                // attach/remove event handler
                document.addEventListener('click', this.handleOutsideClick, false);
            } else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
            this.setState({ toggle: !this.state.toggle });
        };

        this.handleOutsideClick = e => {
            if (this.node.contains(e.target)) {
                return;
            }
            this.toggleButtonClick();
        };

        this.state = {
            toggle: false
        };
    }

    render() {

        const {
            dataList,
            placeholder,
            value,
            effect
        } = this.props;
        const { title } = value;

        return React.createElement(
            'div',
            { className: `react-select-animate ${effect}`, ref: node => {
                    this.node = node;
                }, onClick: this.toggleButtonClick },
            React.createElement('input', {
                type: 'text',
                className: 'react-select-animate__input',
                placeholder: placeholder,
                value: title,
                readOnly: true,
                onChange: () => {},
                autoComplete: 'off' }),
            React.createElement(
                'div',
                {
                    className: this.state.toggle ? "react-select-animate__list show-elem" : "react-select-animate__list hide-elem" },
                React.createElement(
                    'ul',
                    null,
                    dataList ? dataList.map((item, i) => React.createElement(
                        'li',
                        { onClick: e => this.handleClick(e, item), key: i },
                        React.createElement(
                            'span',
                            null,
                            item.title
                        )
                    )) : false
                )
            )
        );
    }
}

export default ReactSelectAnimate;