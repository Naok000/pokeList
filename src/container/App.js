import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import './App.css';
class App extends Component {
  constructor() {
        super();
        this.state = {
            pokemons: [],
            pokemonInfo: [],
            searchfield: ''  
        }
    }

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({pokemons: data.results},() =>{
                this.state.pokemons.map(pokeData => {
                    fetch(pokeData.url)
                    .then(response => response.json())
                    .then(data => {
                        this.setState(rest => ({pokemonInfo: [...rest.pokemonInfo,data]}))
                    })
                    return this.state.pokemonInfo
                })
            })
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {pokemons,pokemonInfo, searchfield} = this.state;
        const filteredPokemons = pokemonInfo.filter( pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
        }).sort((a,b) => a.id - b.id);

        return !pokemons.length ?
        <h1>Loding....</h1> :
        (
            <div className="tc">
                <h1 className='f2'>PokeDex</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList pokemonData = {filteredPokemons}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;
