import React, { Component } from 'react';
import Button from 'rs-button';
import Sweet from '../src/index.js';
import '../assets/index.less';

export default class Example extends Component {
    onAlert() {
        Sweet.alert('你说啥');
    }
    onAlertSuccess() {
        Sweet.alert('你说啥', '好吧', 'success');
    }
    onAlertWarning() {
        Sweet.alert('别乱动手', 'warning');
    }
    onAlertDanger() {
        Sweet.alert('你说啥', '好吧', '好吧', 'danger');
    }
    
    render() {
        return (
            <div>
                <Button onClick={this::this.onAlert}>alert</Button>
                <Button onClick={this::this.onAlertSuccess} myStyle="success">alert</Button>
                <Button onClick={this::this.onAlertWarning} myStyle="warning">alert</Button>
                <Button onClick={this::this.onAlertDanger} myStyle="danger">alert</Button>
            </div>
        );
    }
}; 
