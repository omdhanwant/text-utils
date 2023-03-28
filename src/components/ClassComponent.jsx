import React from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    getAmPm() {
        const hr = this.state.date.toLocaleTimeString().split(':')[0];
        return +hr > 12 ? 'pm' : 'am';
    }

    render() { 
        return (
            <div className='text-center'>
                <pre>
                <h1>Text<span className='App-link'>{this.props.componentType}</span></h1>
                time - {this.state.date.toLocaleTimeString()} {this.getAmPm()}
                </pre>
            </div>
        );
    }
}

ClassComponent.propTypes = {
    componentType: PropTypes.string
  };
 
export default ClassComponent;