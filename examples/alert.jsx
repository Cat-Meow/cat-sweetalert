import React, { Component } from 'react';
import Button from 'cat-btn';
import Sweet from '../src/index.js';
import '../assets/index.less';

export default class Example extends Component {
    onAlert = () => {
        Sweet.alert('你说啥');
    }
    onAlert1 = () => {
        Sweet.alert('你说啥', '好吧', 'success');
    }
    onAlert2 = () => {
        Sweet.alert('别乱动手', 'warning');
    }
    onAlert3 = () => {
        Sweet.alert('你说啥', '好吧', '好吧', 'danger');
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.onAlert}>
                    alert
                </Button>
                <Button myStyle="success"
                    onClick={this.onAlert1}
                >
                    alert
                </Button>
                <Button myStyle="warning"
                    onClick={this.onAlert2}
                >
                    alert
                </Button>
                <Button myStyle="danger"
                    onClick={this.onAlert3}
                >
                    alert
                </Button>
            </div>
        );
    }
}; 
