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

        const {
            dataList,
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
                <div className={this.state.toggle ? "react-select-animate__list show-elem" : "react-select-animate__list hide-elem"}>
                    <ul>
                        {
                            dataList ? dataList.map((item, i) => <li onClick={(e) => this.handleClick(e, item)} key={i}>
                                <span>{item.title}</span></li>) : false
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports.ReactSelectAnimate = ReactSelectAnimate;