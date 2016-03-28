import React from 'react';
import Button from 'rs-button';

let Alert = function(props) {
    let config =  Array.prototype.slice.call(props.config),
        title = config ? config.shift() : '',
        style = '',
        icon = '';

    if (config) {
        style = config.pop();
        switch (style) {
            case 'success':
                icon = 'ok-sign';
                break;
            case 'info':
                icon = 'info-sign';
                break;
            case 'warning':
                icon = 'bell';
                break;
            case 'danger':
                icon = 'alert';
                break;
            default:
                config.push(style);
                style = 'info';
                icon = 'info-sign';
        }
    }

    return (
        <div className={`alert alert-${style} salt-sweetalert clearfix`}>
            <div className="row salt-alert-container">
                <i className={`glyphicon glyphicon-${icon}`} />
                <div>
                    <h2>{title}</h2>
                    <p>{config}</p>
                </div>
            </div>
            <Button
                onClick={props.close}
                myStyle={style}
            >
                确定
            </Button>
        </div>
    );
}

export default Alert;
