const React = require('react');
const {Component} = require('react');


class ReactSelectAnimate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };

        this.handleClick.bind(this);
        this.toggleButtonClick.bind(this);
        this.handleOutsideClick.bind(this);
    }

    handleClick(e, value) {
        this.props.onSelection(value);
    };

    toggleButtonClick() {
        if (!this.state.toggle) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState({toggle: !this.state.toggle});
    };

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }
        this.toggleButtonClick();
    };

    render() {

        const {dataList, placeholder, value} = this.props;
        const {title} = value;

        return (
            React.createElement("div", {className: "", ref: node => {
                this.node = node;
            }, onClick: this.toggleButtonClick}, 
                React.createElement("input", {
                    type: "text", 
                    placeholder: placeholder, 
                    value: title, 
                    readOnly: true, 
                    onChange: () => {
                    }, 
                    autoComplete: "off"}), 
                React.createElement("div", {className: this.state.toggle ? "show-elem" : "hide-elem"}, 
                    React.createElement("ul", null, 
                        
                            dataList ? dataList.map((item, i) => React.createElement("li", {onClick: (e) => this.handleClick(e, item), key: i}, 
                                React.createElement("span", null, item.title))) : false
                        
                    )
                )
            )
        );
    }
}

module.exports.ReactSelectAnimate = ReactSelectAnimate;
