import React from 'react';
import axios from "axios";

import styles from './Heroes.module.scss';

export class Heroes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        this.getHeroes();
    }

    async getHeroes() {
        // res.data 가 response의 body
        const res = await axios.get('http://eastflag.co.kr:8080/api/heroes')
        console.log(res.data);
        this.setState({heroes: res.data});
    }


    render() {
        return (
            <ul className={styles['img-box']}>
                {
                    this.state.heroes.map(hero => (
                        <li key={hero.hero_id}>
                            <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name}></img>
                            <span>{hero.name}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
