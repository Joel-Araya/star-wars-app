import  React from 'react';

/**
 * Armando Garía Paniagua
 * Joel Gómez Castro
 */

export default class StarWarWarsPeople extends React.Component {
    constructor(props){    
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }
    
    componentDidMount(){
        this.loadData();
    }

    render(){
        return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Altura</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(starwarscharacter => {
                    return (
                        <tr>
                            <td> {starwarscharacter.name}</td>
                            <td> {starwarscharacter.height}</td>
                        </tr>
                    )
                })

                }
            </tbody>
        </table>
        )
    }

    async loadData(){
        let response = await fetch("https://swapi.dev/api/people/");
        let parsedResponse = await response.json();
        this.setState({data: parsedResponse.results})
    }

}