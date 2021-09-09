import React, {Component} from 'react';
import axios from 'axios';
import StatsChart from './Chart';
import '../sass-css/FoundDisplay.scss';
import normal from '../images/type-icons/normal.png';
import fire from '../images/type-icons/fire.png';
import fighting from '../images/type-icons/fighting.png';
import water from '../images/type-icons/water.png';
import flying from '../images/type-icons/flying.png';
import grass from '../images/type-icons/grass.png';
import poison from '../images/type-icons/poison.png';
import electric from '../images/type-icons/electric.png';
import ground from '../images/type-icons/ground.png';
import psychic from '../images/type-icons/psychic.png';
import rock from '../images/type-icons/rock.png';
import ice from '../images/type-icons/ice.png';
import bug from '../images/type-icons/bug.png';
import dragon from '../images/type-icons/dragon.png';
import ghost from '../images/type-icons/ghost.png';
import dark from '../images/type-icons/dark.png';
import steel from '../images/type-icons/steel.png';
import fairy from '../images/type-icons/fairy.png';

export default class FoundDisplay extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            imgIndex: 0
        }
        this.formFetch = this.formFetch.bind(this);
        this.imageChange = this.imageChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            value: this.props.pokemon.name
        })
    }

    prettify(name){
        if(name.includes('-red-meteor')){
            return name.replace('-red-meteor', ' -meteor').split('-').map(function capitalize(part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            })
        } else if(name.includes('minior-red')){
            return name.replace('-red', ' -core').split('-').map(function capitalize(part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            })
        } else if(name.includes('-10')){
            return name.replace('-10', ' -10%').split('-').map(function capitalize(part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            })
        } else {
            return name.split('-').map(function capitalize(part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            }).join(' ');
        }
    }

    megaFetch(mon){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${mon}`).then(response => {
            this.props.onSpriteClick(response.data.name);
        })
    }

    formFetch(e){
        this.setState({
            value: e.target.value
        }, function () {
            this.props.onSpriteClick(this.state.value)
        })
    }

    imageChange(amount) {
        if(this.state.imgIndex+1<amount){
            this.setState({imgIndex: this.state.imgIndex+1})
        } else {
            this.setState({imgIndex: 0})
        }
    }

    render(){

        let mappedEncounters = this.props.encounters.map(
            (encounter) => <div className='encounter' key={encounter.location_area.name} >{this.prettify(encounter.location_area.name)}</div>);
        let encounterDisplay;
        if(this.props.encounters.length === 0){
            encounterDisplay = <div className='no-encounter'>This pokemon cannot be found in the wild.</div>;
        } else {
            encounterDisplay = mappedEncounters;
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This cleans up pokemon names with two words.

        const {pokemon} = this.props;
        let species = pokemon.name;
        if(species.endsWith('-alola')){
            species = 'Alolan ' + species.charAt(0).toUpperCase() + species.slice(1).replace('alola', '');
        } else if(species.endsWith('-standard-galar')){
            species = pokemon.name
        } else if(species.endsWith('-zen-galar')){
            species = pokemon.name
        } else if(species.endsWith('-galar')){
            species = 'Galarian ' + species.charAt(0).toUpperCase() + species.slice(1).replace('galar', '');
        } else if(species.endsWith('-mega')){
            species = 'Mega ' + species.charAt(0).toUpperCase() + species.slice(1).replace('mega', '');
        } else if(species.endsWith('-primal')){
            species = 'Primal ' + species.charAt(0).toUpperCase() + species.slice(1).replace('primal', '');
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This allows users to mega-evolve pokemon with that ability.
        
        let megaSwitcher = false;
        let twoMegas = false;
        let megaStone = '';
        let megaStones = [];
        let tail = '-mega';
        if(species.includes('venusaur')){
            megaSwitcher = true;
            megaStone = 'venusaurite';
        } else if(species.includes('charizard')){
            megaSwitcher = true;
            twoMegas = true;
            megaStones = ['charizardite-x','charizardite-y'];
        } else if(species.includes('blastoise')){
            megaSwitcher = true;
            megaStone = 'blastoisinite';
        } else if(species.includes('beedrill')){
            megaSwitcher = true;
            megaStone = 'beedrillite';
        } else if(species.includes('pidgeot')){
            megaSwitcher = true;
            megaStone = 'pidgeotite';
        } else if(species.includes('alakazam')){
            megaSwitcher = true;
            megaStone = 'alakazite';
        } else if(species.includes('slowbro')){
            megaSwitcher = true;
            megaStone = 'slowbronite';
        } else if(species.includes('gengar')){
            megaSwitcher = true;
            megaStone = 'gengarite';
        } else if(species.includes('kangaskhan')){
            megaSwitcher = true;
            megaStone = 'kangaskhanite';
        } else if(species.includes('pinsir')){
            megaSwitcher = true;
            megaStone = 'pinsirite';
        } else if(species.includes('gyarados')){
            megaSwitcher = true;
            megaStone = 'gyaradosite';
        } else if(species.includes('aerodactyl')){
            megaSwitcher = true;
            megaStone = 'aerodactylite';
        } else if(species.includes('mewtwo')){
            megaSwitcher = true;
            twoMegas = true;
            megaStones = ['mewtwonite-x','mewtwonite-y'];
        } else if(species.includes('ampharos')){
            megaSwitcher = true;
            megaStone = 'ampharosite';
        } else if(species.includes('steelix')){
            megaSwitcher = true;
            megaStone = 'steelixite';
        } else if(species.includes('scizor')){
            megaSwitcher = true;
            megaStone = 'scizorite';
        } else if(species.includes('heracross')){
            megaSwitcher = true;
            megaStone = 'heracronite';
        } else if(species.includes('houndoom')){
            megaSwitcher = true;
            megaStone = 'houndoominite';
        } else if(species.includes('tyranitar')){
            megaSwitcher = true;
            megaStone = 'tyranitarite';
        } else if(species.includes('sceptile')){
            megaSwitcher = true;
            megaStone = 'sceptilite';
        } else if(species.includes('blaziken')){
            megaSwitcher = true;
            megaStone = 'blazikenite';
        } else if(species.includes('swampert')){
            megaSwitcher = true;
            megaStone = 'swampertite';
        } else if(species.includes('gardevoir')){
            megaSwitcher = true;
            megaStone = 'gardevoirite';
        } else if(species.includes('sableye')){
            megaSwitcher = true;
            megaStone = 'sablenite';
        } else if(species.includes('mawile')){
            megaSwitcher = true;
            megaStone = 'mawilite';
        } else if(species.includes('aggron')){
            megaSwitcher = true;
            megaStone = 'aggronite';
        } else if(species.includes('medicham')){
            megaSwitcher = true;
            megaStone = 'medichamite';
        } else if(species.includes('manectric')){
            megaSwitcher = true;
            megaStone = 'manectite';
        } else if(species.includes('sharpedo')){
            megaSwitcher = true;
            megaStone = 'sharpedonite';
        } else if(species.includes('camerupt')){
            megaSwitcher = true;
            megaStone = 'cameruptite';
        } else if(species.includes('altaria')){
            megaSwitcher = true;
            megaStone = 'altarianite';
        } else if(species.includes('banette')){
            megaSwitcher = true;
            megaStone = 'banettite';
        } else if(species.includes('absol')){
            megaSwitcher = true;
            megaStone = 'absolite';
        } else if(species.includes('glalie')){
            megaSwitcher = true;
            megaStone = 'glalitite';
        } else if(species.includes('salamence')){
            megaSwitcher = true;
            megaStone = 'salamencite';
        } else if(species.includes('metagross')){
            megaSwitcher = true;
            megaStone = 'metagrossite';
        } else if(species.includes('latias')){
            megaSwitcher = true;
            megaStone = 'latiasite';
        } else if(species.includes('latios')){
            megaSwitcher = true;
            megaStone = 'latiosite';
        } else if(species.includes('lopunny')){
            megaSwitcher = true;
            megaStone = 'lopunnite';
        } else if(species.includes('garchomp')){
            megaSwitcher = true;
            megaStone = 'garchompite';
        } else if(species.includes('lucario')){
            megaSwitcher = true;
            megaStone = 'lucarionite';
        } else if(species.includes('abomasnow')){
            megaSwitcher = true;
            megaStone = 'abomasite';
        } else if(species.includes('gallade')){
            megaSwitcher = true;
            megaStone = 'galladite';
        } else if(species.includes('audino')){
            megaSwitcher = true;
            megaStone = 'audinite';
        } else if(species.includes('diancie')){
            megaSwitcher = true;
            megaStone = 'diancite';
        } else if(species.includes('kyogre')){
            megaSwitcher = true;
            megaStone = 'mega-bracelet';
            tail = '-primal';
        } else if(species.includes('groudon')){
            megaSwitcher = true;
            megaStone = 'mega-bracelet';
            tail = '-primal';
        } else if(species.includes('rayquaza')){
            megaSwitcher = true;
            megaStone = 'mega-bracelet';
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This allows users to switch forms of pokemon with multiple forms.

        let formSwitcher = false;
        let formsArray = [];
        if(species.includes('deoxys')){
            formSwitcher = true;
            formsArray = ['-normal', '-attack', '-defense', '-speed'];
        } else if(species.includes('wormadam')){
            formSwitcher = true;
            formsArray = ['-plant', '-sandy', '-trash'];
        } else if(species.includes('shaymin')){
            formSwitcher = true;
            formsArray = ['-land', '-sky'];
        } else if(species.includes('giratina')){
            formSwitcher = true;
            formsArray = ['-altered', '-origin'];
        } else if(species.includes('rotom')){
            formSwitcher = true;
            formsArray = ['', '-mow', '-heat', '-wash', '-frost', '-fan'];
        } else if(species.includes('castform')){
            formSwitcher = true;
            formsArray = ['', '-sunny', '-rainy', '-snowy'];
        } else if(species.includes('basculin')){
            formSwitcher = true;
            formsArray = ['-red-striped', '-blue-striped'];
        } else if(species === 'darmanitan-standard'){
            formSwitcher = true;
            formsArray = ['-standard', '-zen'];
        } else if(species === 'darmanitan-zen'){
            formSwitcher = true;
            formsArray = ['-standard', '-zen'];
        } else if(species.includes('meloetta')){
            formSwitcher = true;
            formsArray = ['-aria', '-pirouette'];
        } else if(species.includes('tornadus')){
            formSwitcher = true;
            formsArray = ['-incarnate', '-therian'];
        } else if(species.includes('thundurus')){
            formSwitcher = true;
            formsArray = ['-incarnate', '-therian'];
        } else if(species.includes('landorus')){
            formSwitcher = true;
            formsArray = ['-incarnate', '-therian'];
        } else if(species.includes('kyurem')){
            formSwitcher = true;
            formsArray = ['', '-black', '-white'];
        } else if(species.includes('keldeo')){
            formSwitcher = true;
            formsArray = ['-ordinary', '-resolute'];
        } else if(species.includes('meowstic')){
            formSwitcher = true;
            formsArray = ['-male', '-female'];
        } else if(species.includes('aegislash')){
            formSwitcher = true;
            formsArray = ['-shield', '-blade'];
        } else if(species.includes('hoopa')){
            formSwitcher = true;
            formsArray = ['', '-unbound'];
        } else if(species.includes('zygarde')){
            formSwitcher = true;
            formsArray = ['', '-10', '-complete'];
        } else if(species.includes('oricorio')){
            formSwitcher = true;
            formsArray = ['-baile', '-pom-pom', '-pau', '-sensu'];
        } else if(species.includes('minior')){
            formSwitcher = true;
            formsArray = ['-red-meteor', '-red'];
        } else if(species.includes('lycanroc')){
            formSwitcher = true;
            formsArray = ['-midday', '-midnight', '-dusk'];
        } else if(species.includes('wishiwashi')){
            formSwitcher = true;
            formsArray = ['-solo', '-school'];
        } else if(species.includes('necrozma')){
            formSwitcher = true;
            formsArray = ['', '-dusk', '-dawn', '-ultra'];
        } else if(species.includes('toxtricity')){
            formSwitcher = true;
            formsArray = ['-amped', '-low-key'];
        } else if(species.includes('eiscue')){
            formSwitcher = true;
            formsArray = ['-ice', '-noice'];
        } else if(species.includes('indeedee')){
            formSwitcher = true;
            formsArray = ['-male', '-female'];
        } else if(species.includes('zacian')){
            formSwitcher = true;
            formsArray = ['-hero', '-crowned'];
        } else if(species.includes('zamazenta')){
            formSwitcher = true;
            formsArray = ['-hero', '-crowned'];
        } else if(species.includes('urshifu')){
            formSwitcher = true;
            formsArray = ['-single-strike', '-rapid-strike'];
        } else if(species.includes('calyrex')){
            formSwitcher = true;
            formsArray = ['', '-ice-rider', '-shadow-rider'];
        } else if(species.includes('-standard-galar')){
            formSwitcher = true;
            formsArray = ['-standard-galar', '-zen-galar'];
        } else if(species.includes('-zen-galar')){
            formSwitcher = true;
            formsArray = ['-standard-galar', '-zen-galar'];
        }

        let options = formsArray.map((form, index) => 
            pokemon.species.name+form !== species 
                ? <option key={index} value={pokemon.species.name+form}>{this.prettify(pokemon.species.name+form)}</option> 
                : <option key={index} value={pokemon.species.name+form}>Selected</option>
        )

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This sets the extra images of pokemon that have purely aesthetic form differences.

        let imageSwitcher = false;
        let images = [];
        if (species.includes('cherrim')){
            imageSwitcher = true;
            images = ['-overcast', '-sunny'];
        } else if (species.includes('gastrodon')){
            imageSwitcher = true;
            images = ['-west', '-east'];
        } else if (species.includes('deerling')){
            imageSwitcher = true;
            images = ['-spring', '-summer', '-autumn', '-winter'];
        } else if (species.includes('sawsbuck')){
            imageSwitcher = true;
            images = ['-spring', '-summer', '-autumn', '-winter'];
        } else if (species.includes('morpeko')){
            imageSwitcher = true;
            images = ['-full-belly', '-hangry'];
        }

        let isTooHigh = false;
        let imgNum = this.state.imgIndex+1;
        if (imgNum>images.length){
            isTooHigh = true;
        }

        console.log(imgNum)
        console.log(images.length)

//---------------------------------------------------------------------------------------------------------------------------------------------------
// This changes the names from PokeAPI into ones readable by Pokemon DB to get the official art for the found display.

        let forPMDB = pokemon.name;
        if(forPMDB === 'minior-red-meteor'){
            forPMDB = 'minior-meteor'
        } else if(forPMDB === 'minior-red'){
            forPMDB = 'minior-core'
        } else if(forPMDB === 'mimikyu-disguised'){
            forPMDB = 'mimikyu'
        } else if(forPMDB === 'necrozma-dusk'){
            forPMDB = 'necrozma-dusk-mane'
        } else if(forPMDB === 'necrozma-dawn'){
            forPMDB = 'necrozma-dawn-wings'
        } else if(forPMDB === 'morpeko'){
            forPMDB = 'morpeko-full-belly'
        } else if(forPMDB.includes('-standard-galar')){
            forPMDB = 'darmanitan-galarian-standard'
        } else if(forPMDB.includes('-zen-galar')){
            forPMDB = 'darmanitan-galarian-zen'
        } else if(forPMDB.endsWith('-alola')){
            forPMDB = forPMDB.replace('-alola', '-alolan')
        } else if(forPMDB.includes('-galar')){
            forPMDB = forPMDB.replace('-galar', '-galarian')
        };

//---------------------------------------------------------------------------------------------------------------------------------------------------
// These are being accessed by the wall of if statements.
        let url; // Used as url if the pokemon has only one type.
        let url1; // Used as url for second type. It is first because the pokeapi has the second type first in their data.
        let url2; // Used as url for first type.
        let types; // Used for what will be rendered conditionally based on amount of types.
        let primary; // Used for conditional color scheme based on type.
        let secondary; // Used for conditional color scheme based on type.
    // If the pokemon has 2 types this will render the second type. -------------------------------------------------------------------------------------
        if(pokemon.types.length > 1){
            if(pokemon.types[0].type.name === 'normal'){
                url1 = `${normal}`;
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url1 = `${fire}`;
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url1 = `${fighting}`;
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url1 = `${water}`;
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url1 = `${flying}`;
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url1 = `${grass}`;
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url1 = `${poison}`;
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url1 = `${electric}`;
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url1 = `${ground}`;
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url1 = `${psychic}`;
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url1 = `${rock}`;
                secondary = '#dfbf9f';
            } else if(pokemon.types[0].type.name === 'ice'){
                url1 = `${ice}`;
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url1 = `${bug}`;
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url1 = `${dragon}`;
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url1 = `${ghost}`;
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url1 = `${dark}`;
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url1 = `${steel}`;
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url1 = `${fairy}`;
                secondary = '#cc0066';
            }
    // If the pokemon has 2 types this will render the first type. ------------------------------------------------------------------------------------
            if(pokemon.types[1].type.name === 'normal'){
                url2 = `${normal}`;
                primary = '#ffffe6';
            } else if(pokemon.types[1].type.name === 'fire'){
                url2 = `${fire}`;
                primary = '#ffc299';
            } else if(pokemon.types[1].type.name === 'fighting'){
                url2 = `${fighting}`;
                primary = '#ffdab3';
            } else if(pokemon.types[1].type.name === 'water'){
                url2 = `${water}`;
                primary = '#86d3fb';
            } else if(pokemon.types[1].type.name === 'flying'){
                url2 = `${flying}`;
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'grass'){
                url2 = `${grass}`;
                primary = '#84e184';
            } else if(pokemon.types[1].type.name === 'poison'){
                url2 = `${poison}`;
                primary = '#ecc6ec';
            } else if(pokemon.types[1].type.name === 'electric'){
                url2 = `${electric}`;
                primary = '#ffff33';
            } else if(pokemon.types[1].type.name === 'ground'){
                url2 = `${ground}`;
                primary = '#e6ccb3';
            } else if(pokemon.types[1].type.name === 'psychic'){
                url2 = `${psychic}`;
                primary = '#ff80df';
            } else if(pokemon.types[1].type.name === 'rock'){
                url2 = `${rock}`;
                primary = '#dfbf9f';
            } else if(pokemon.types[1].type.name === 'ice'){
                url2 = `${ice}`;
                primary = '#e6ffff';
            } else if(pokemon.types[1].type.name === 'bug'){
                url2 = `${bug}`;
                primary = '#dfff80';
            } else if(pokemon.types[1].type.name === 'dragon'){
                url2 = `${dragon}`;
                primary = '#ffe6e6';
            } else if(pokemon.types[1].type.name === 'ghost'){
                url2 = `${ghost}`;
                primary = '#ccaad5';
            } else if(pokemon.types[1].type.name === 'dark'){
                url2 = `${dark}`;
                primary = '#bdaea8';
            } else if(pokemon.types[1].type.name === 'steel'){
                url2 = `${steel}`;
                primary = '#d9d9d9';
            } else if(pokemon.types[1].type.name === 'fairy'){
                url2 = `${fairy}`;
                primary = '#ffcce6';
            }
            types =  <div className='type'>
                        <img className='type-img' src={url2} alt={`sprite of ${pokemon.types[1].type.name} type logo`}/>
                        <img className='type-img' src={url1} alt={`sprite of ${pokemon.types[0].type.name} type logo`}/>
                    </div>
        } 
    // If the pokemon has 1 type this will render that type. ------------------------------------------------------------------------------------------
        else {
            if(pokemon.types[0].type.name === 'normal'){
                url = `${normal}`;
                primary = '#ffffe6';
                secondary = '#5c5c3d';
            } else if(pokemon.types[0].type.name === 'fire'){
                url = `${fire}`;
                primary = '#ffc299';
                secondary = '#cc5200';
            } else if(pokemon.types[0].type.name === 'fighting'){
                url = `${fighting}`;
                primary = '#ffdab3';
                secondary = '#990000';
            } else if(pokemon.types[0].type.name === 'water'){
                url = `${water}`;
                primary = '#86d3fb';
                secondary = '#003b72';
            } else if(pokemon.types[0].type.name === 'flying'){
                url = `${flying}`;
                primary = '#e6ffff';
                secondary = '#86d3fb';
            } else if(pokemon.types[0].type.name === 'grass'){
                url = `${grass}`;
                primary = '#84e184';
                secondary = '#28a428';
            } else if(pokemon.types[0].type.name === 'poison'){
                url = `${poison}`;
                primary = '#ecc6ec';
                secondary = '#732673';
            } else if(pokemon.types[0].type.name === 'electric'){
                url = `${electric}`;
                primary = '#ffff33';
                secondary = '#cccc00';
            } else if(pokemon.types[0].type.name === 'ground'){
                url = `${ground}`;
                primary = '#e6ccb3';
                secondary = '#b38600';
            } else if(pokemon.types[0].type.name === 'psychic'){
                url = `${psychic}`;
                primary = '#ff80df';
                secondary = '#800080';
            } else if(pokemon.types[0].type.name === 'rock'){
                url = `${rock}`;
                primary = '#dfbf9f';
                secondary = '#6a5048';
            } else if(pokemon.types[0].type.name === 'ice'){
                url = `${ice}`;
                primary = '#e6ffff';
                secondary = '#00cccc';
            } else if(pokemon.types[0].type.name === 'bug'){
                url = `${bug}`;
                primary = '#dfff80';
                secondary = '#808000';
            } else if(pokemon.types[0].type.name === 'dragon'){
                url = `${dragon}`;
                primary = '#ffe6e6';
                secondary = '#9933ff';
            } else if(pokemon.types[0].type.name === 'ghost'){
                url = `${ghost}`;
                primary = '#ccaad5';
                secondary = '#4d374b';
            } else if(pokemon.types[0].type.name === 'dark'){
                url = `${dark}`;
                primary = '#bdaea8';
                secondary = '#28283e';
            } else if(pokemon.types[0].type.name === 'steel'){
                url = `${steel}`;
                primary = '#d9d9d9';
                secondary = '#404040';
            } else if(pokemon.types[0].type.name === 'fairy'){
                url = `${fairy}`;
                primary = '#ffcce6';
                secondary = '#cc0066';
            }
            types = <div className='type'>
                        <img className='type-img' src={url} alt={`sprite of ${pokemon.types[0].type.name} type logo`}/>
                    </div>
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
        
        let abilities;
        if(pokemon.abilities.length === 1){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                        </span>
        } else if(pokemon.abilities.length === 2){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[1].ability.name)}</h1>
                            <div>
                                <h2>Hidden Ability:</h2>
                                <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                            </div>
                        </span>
        } else if(pokemon.abilities.length === 3){
            abilities = <span>
                            <h1>{this.prettify(pokemon.abilities[2].ability.name)}</h1>
                            <h1>{this.prettify(pokemon.abilities[1].ability.name)}</h1>
                            <div>
                                <h2>Hidden Ability:</h2>
                                <h1>{this.prettify(pokemon.abilities[0].ability.name)}</h1>
                            </div>
                        </span>
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// To keep things mostly dyanmic, any differing urls are hard coded in here to display images properly.

        let src;
        if(forPMDB === 'floette-eternal'){
            src = 'https://cdn.bulbagarden.net/upload/2/29/AZ%27s_Floette.png'
        } else if(pokemon.name === 'castform-sunny'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-sunny.png'
        } else if(pokemon.name === 'castform-snowy'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-snowy.png'
        } else if(pokemon.name === 'castform-rainy'){
            src = 'https://img.pokemondb.net/artwork/vector/castform-rainy.png'
        } else if(pokemon.name === 'pikachu-cosplay'){
            src = 'https://cdn.bulbagarden.net/upload/2/28/Spr_6o_025_C.png'
        } else {
            src = `https://img.pokemondb.net/artwork/${forPMDB}.jpg`
        }

//---------------------------------------------------------------------------------------------------------------------------------------------------
// Other forms of pokemon have high dex numbers in the PokeAPI, so this replaces the dex number based on certain conditions.

        let dexNum;
        if (pokemon.name.includes('-mega')){
            dexNum = <div className='dex-num'>
                        <button className='mega-back' onClick={() => {this.props.onSpriteClick(pokemon.species.name)}}>Back</button>
                     </div>
        } else if(pokemon.name.includes('-primal')){
            dexNum = <div className='dex-num'>
                        <button className='mega-back' onClick={() => {this.props.onSpriteClick(pokemon.species.name)}}>Back</button>
                     </div>
        } else if(pokemon.id>899){
            dexNum = <div></div>
        } else {
            dexNum = <div className='dex-num'>Dex #: {pokemon.id}</div>
        }
        
//---------------------------------------------------------------------------------------------------------------------------------------------------

        return(
            <div className='base-display' style={{backgroundColor: secondary}} >
                <div className='display' style={{backgroundColor: primary}} >
                    <div className='col1'>

                        <div className='top'>
                            <img className='mon-img' src={imageSwitcher ? !isTooHigh ? `https://img.pokemondb.net/artwork/${pokemon.species.name+images[this.state.imgIndex]}.jpg` : `https://img.pokemondb.net/artwork/${pokemon.species.name+images[0]}.jpg` : src} alt={`${pokemon.name}`} />
                            {imageSwitcher && <button onClick={() => this.imageChange(images.length)}></button>}
                            <div className='name-num'>
                                {megaSwitcher && (
                                    !twoMegas 
                                    ? <button className='mega-switch' onClick={() => this.megaFetch(species+tail)}>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${megaStone}.png`} alt={`sprite of ${megaStone}`} />
                                      </button>
                                    : <div style={{display: species.includes('-mega') ? 'none' : 'flex'}}>
                                        <button className='mega-switch' onClick={() => this.megaFetch(species+'-mega-x')}>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${megaStones[0]}.png`} alt={`sprite of ${megaStones[0]}`} />
                                        </button>
                                        <button className='mega-switch' onClick={() => this.megaFetch(species+'-mega-y')}>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${megaStones[1]}.png`} alt={`sprite of ${megaStones[1]}`} />
                                        </button>
                                      </div>
                                )}
                                <h1>{this.prettify(species)}</h1>
                                {dexNum}
                            </div>
                            {formSwitcher && (
                                <select name='Forms' id='form-select' value={this.state.value} onChange={this.formFetch}>
                                    {options}
                                </select>
                            )}
                        </div>

                        <div className='hold-it'>
                            <div className='type'>
                                {types}
                            </div>

                            <div className='abilities'>
                                {abilities}
                            </div>
                            
                            <div className='height-weight'>
                                <div className='height-box'>
                                    <h2>Height</h2>
                                    <span className='height'>
                                        <div>{Math.ceil(pokemon.height/10 * 3.281)} ft</div>
                                        <div>{pokemon.height/10} m</div>
                                    </span>
                                </div>

                                <div className='weight-box'>
                                    <h2>Weight</h2>
                                    <span className='weight'>
                                        <div>{Math.floor(pokemon.weight * 2.205) /10} lbs</div>
                                        <div>{pokemon.weight/10} kg</div>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col2'>
                        <StatsChart 
                            speed={pokemon.stats[0].base_stat} 
                            sped={pokemon.stats[1].base_stat} 
                            spea={pokemon.stats[2].base_stat} 
                            def={pokemon.stats[3].base_stat} 
                            att={pokemon.stats[4].base_stat} 
                            hp={pokemon.stats[5].base_stat} 
                        />
                        <div className='encounters'>
                            <div className='encounter-holder'>{encounterDisplay}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}