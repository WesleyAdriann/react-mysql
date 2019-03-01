import React, { Component } from 'react';

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render () {
        
        return (
            <div className="column">
                    <div className="columns">
                    <table className="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.data.map(info => {
                                return(
                                    <tr>
                                        <th>{info.userId}</th>
                                        <td>{info.userName}</td>
                                        <td>{info.userEmail}</td>
                                    </tr> 
                                );
                            })}
                        
                        </tbody>
                    </table>
                </div>
            </div>
            );
    }
}
export default Usuarios;