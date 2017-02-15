import React, {Component} from 'react';

export default class Typer extends Component {
    constructor(props) {
        super(props);
        let {words}= this.props;
        this._actualWord = words[0].split('').reverse();
        this.state = {
            text: ''
        };
        words.shift();
        this.state.words = words;
    }

    type(letter) {
        setTimeout(() => {
            this.setState({text: this.state.text + letter});
            if (this._actualWord.length) {
                this.type(this._actualWord.pop());
            } else if (this.state.words.length) {
                this._actualWord = this.state.words[0].split('').reverse();
                this.setState({words: this.state.words.slice(1, this.state.words.length)});
                setTimeout(() => {

                    this.setState({text: ''});
                    this.type(this._actualWord.pop())
                }, 1000);
            }
        }, this.props.speed);
    }

    componentDidMount() {
        this.type(this._actualWord.pop());
    }

    render() {
        const Tag = this.props.tag;
        return <Tag className={this.props.classes}>
            {this.state.text}
        </Tag>;
    }
}

Typer.defaultProps = {
    tag: 'h1',
    classes: '',
    speed: 100
};