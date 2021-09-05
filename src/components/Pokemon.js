import React, {Component} from 'react';
import '../sass-css/Pokemon.scss';

export default class Pokemon extends Component {
    prettify(name){
        if (name.includes('deoxys')){
            return name.split('-normal').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('minior')){
            return name.split('-red-meteor').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('wormadam')){
            return name.split('-plant').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('giratina')){
            return name.split('-altered').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('shaymin')){
            return name.split('-land').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('basculin')){
            return name.split('-red-striped').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('darmanitan')){
            return name.split('-standard').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('tornadus')){
            return name.split('-incarnate').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('thundurus')){
            return name.split('-incarnate').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('landorus')){
            return name.split('-incarnate').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('keldeo')){
            return name.split('-ordinary').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('meloetta')){
            return name.split('-aria').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('meowstic')){
            return name.split('-male').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('aegislash')){
            return name.split('-shield').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('pumpkaboo')){
            return name.split('-average').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('gourgeist')){
            return name.split('-average').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('oricorio')){
            return name.split('-baile').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('lycanroc')){
            return name.split('-midday').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('wishiwashi')){
            return name.split('-solo').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('mimikyu')){
            return name.split('-disguised').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('o-o')){
            return name.charAt(0).toUpperCase() + name.slice(1)
        }  else if (name.includes('toxtricity')){
            return name.split('-amped').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('eiscue')){
            return name.split('-ice').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('indeedee')){
            return name.split('-male').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('zacian')){
            return name.split('-hero').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('zamazenta')){
            return name.split('-hero').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else if (name.includes('urshifu')){
            return name.split('-single-strike').map(function capitalize(part){
                return part.charAt(0).toUpperCase() + part.slice(1)})
        } else {
            return name.split('-').map(function capitalize(part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            }).join(' ');
        }
    }
    render(){
        const {pokemon} = this.props;
        let species = pokemon.name;
        if(species.endsWith('-alola')){
            species = 'Alolan ' + species.charAt(0).toUpperCase() + species.slice(1).replace('alola', '');
        } else if(species.endsWith('-galar')){
            species = 'Galar ' + species.charAt(0).toUpperCase() + species.slice(1).replace('galar', '');
        }
//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from pokeapi into ones readable by the pokemon db to get the sprites for the pokedex display.
        let forPMDB = pokemon.name;
        if(forPMDB === 'minior-red-meteor'){
            forPMDB = 'minior-meteor'
        } else if(forPMDB === 'mimikyu-disguised'){
            forPMDB = 'mimikyu'
        } else if(forPMDB.startsWith('pikachu')){
            forPMDB = 'pikachu'
        } else if(forPMDB.startsWith('castform')){
            forPMDB = 'castform'
        } else if(forPMDB.endsWith('-alola')){
            forPMDB = forPMDB.replace('-alola', '-alolan')
        } else if(forPMDB.split('-').includes('galar')){
            forPMDB = forPMDB.replace('-galar', 'galarian')
        };
//---------------------------------------------------------------------------------------------------------------------------------------------------
        return (
            <div className='pokemon-box'>
                <div className='pokemon'>
                    <button className='sprite' onClick={() => {this.props.action(pokemon.name)}}>
                        <img src={forPMDB === 'floette-eternal' ? 'https://img.pokemondb.net/sprites/sun-moon/icon/floette.png' : `https://img.pokemondb.net/sprites/sword-shield/icon/${forPMDB}.png`} alt={`sprite of ${forPMDB}`} />
                    </button>
                    <div className='name'> {this.prettify(species)} </div>
                </div>
            </div>
        );
    }
}