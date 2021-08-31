import React, {Component} from 'react';
import '../sass-css/Types.scss';
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

export default class AuthComponent extends Component {

    componentDidMount(){
        this.props.setButton(false);
        this.props.setFooter(false);
        this.props.changeTitle('Login');
    }

    render(){
        return (
            <div className='main'>
                <div className='backdrop'>
                <div className='column1'>
                <div className='normal'>
                    <img className='main-img' src={normal} alt='normal'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='fire'>
                    <img className='main-img' src={fire} alt='fire'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={ground} alt='ground'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='fighting'>
                    <img className='main-img' src={fighting} alt='fighting' />
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={dark} alt='dark'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={normal} alt='normal'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='water'>
                    <img className='main-img' src={water} alt='water'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={steel} alt='steel'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={ground} alt='ground'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flying'>
                    <img className='main-img' src={flying} alt='flying'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                <img src={ground} alt='ground'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='grass'>
                    <img className='main-img' src={grass} alt='grass'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={poison} alt='poison'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ground} alt='ground'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={ground} alt='ground'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='poison'>
                    <img className='main-img' src={poison} alt='poison'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={ground} alt='ground'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={bug} alt='bug'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={fairy} alt='fairy'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={poison} alt='poison'/>
                                    <img src={ground} alt='ground'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='electric'>
                    <img className='main-img' src={electric} alt='electric'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={ground} alt='ground'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={flying} alt='flying'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={electric} alt='electric'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={ground} alt='ground'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='ground'>
                    <img className='main-img' src={ground} alt='ground'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={grass} alt='grass'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={poison} alt='poison'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={grass} alt='grass'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={flying} alt='flying'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>

                <div className='column2'>
                <div className='psychic'>
                    <img className='main-img' src={psychic} alt='psychic'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={dark} alt='dark'/>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={poison} alt='poison'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={psychic} alt='psychic'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='rock'>
                    <img className='main-img' src={rock} alt='rock'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ground} alt='ground'/>
                                    <img src={steel} alt='steel'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={normal} alt='normal'/>
                                    <img src={poison} alt='poison'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={ice} alt='ice'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={ground} alt='ground'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='ice'>
                    <img className='main-img' src={ice} alt='ice'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={ice} alt='ice'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ground} alt='ground'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={steel} alt='steel'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bug'>
                    <img className='main-img' src={bug} alt='bug'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ground} alt='ground'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={ghost} alt='ghost'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='dragon'>
                    <img className='main-img' src={dragon} alt='dragon'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={ice} alt='ice'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={fairy} alt='fairy'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='ghost'>
                    <img className='main-img' src={ghost} alt='ghost'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={poison} alt='poison'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={normal} alt='normal'/>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={ghost} alt='ghost'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={normal} alt='normal'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='dark'>
                    <img className='main-img' src={dark} alt='dark'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={ghost} alt='ghost'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={ghost} alt='ghost'/>
                                    <img src={psychic} alt='psychic'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='steel'>
                    <img className='main-img' src={steel} alt='steel'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={fighting} alt='fighting'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={ground} alt='ground'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={flying} alt='flying'/>
                                    <img src={grass} alt='grass'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={normal} alt='normal'/>
                                    <img src={psychic} alt='psychic'/>
                                    <img src={rock} alt='rock'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={poison} alt='poison'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off-spec'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={fairy} alt='fairy'/>
                                    <img src={ice} alt='ice'/>
                                    <img src={rock} alt='rock'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={electric} alt='electric'/>
                                    <img src={fire} alt='fire'/>
                                    <img src={steel} alt='steel'/>
                                    <img src={water} alt='water'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='fairy'>
                    <img className='main-img' src={fairy} alt='fairy'/>
                    <div className='weak-strong'>
                        <div className='def-off'>
                            <h1>Defensive</h1>

                            <div className='bad'>
                                <h2>Weak To (2x)</h2>
                                <div>
                                    <img src={poison} alt='poison'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='good'>
                                <h2>Resistant To (.5x)</h2>
                                <div>
                                    <img src={bug} alt='bug'/>
                                    <img src={dark} alt='dark'/>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    <img src={dragon} alt='dragon'/>
                                </div>
                            </div>

                        </div>
                        <div className='def-off'>
                            <h1>Offensive</h1>

                            <div className='good'>
                                <h2>Super Effective (2x)</h2>
                                <div>
                                    <img src={dark} alt='dark'/>
                                    <img src={dragon} alt='dragon'/>
                                    <img src={fighting} alt='fighting'/>
                                </div>
                            </div>

                            <div className='bad'>
                                <h2>Not Effective (.5x)</h2>
                                <div>
                                    <img src={fire} alt='fire'/>
                                    <img src={poison} alt='poison'/>
                                    <img src={steel} alt='steel'/>
                                </div>
                            </div>

                            <div className='neutral'>
                                <h2>No Effect (0x)</h2>
                                <div>
                                    None
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
                </div>

            </div>
        )
    }
};