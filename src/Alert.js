import './App.css';
import React from 'react'

/**
 * Armando Garía Paniagua
 * Joel Gómez Castro
 */

export default class Alert extends React.Component {
    render() {
        return (
            <div>{this.props.count > 60 ? "Peligro! la cantidad de segundos ha excedido el límte!!!" :
                ""}</div>
        );
    }
}