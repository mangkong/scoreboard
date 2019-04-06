import React from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';

import styles from './Heroes.module.scss';
import 'rc-pagination/dist/rc-pagination.css'

export class Heroes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1, // 페이지 인덱스, 1부터 시작
            totalCount: 115, // 전체 갯수
            pageSize: 10, // 한페이지에 보여주는 갯수
            heroes: []
        }
    }

    handlePageChange = (current, pageSize) => {
        console.log(current, pageSize);
        this.setState({currentPage: current});
        // 페이지 호출
        this.getHeroes();
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.heroes.map(hero => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1 p-sm-2 p-md-3"
                                 key={hero.hero_id}>
                                <div className="card">
                                    <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                                         className="card-img-top" alt={hero.name}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{hero.name}</h5>
                                        <p className="card-text">email: {hero.email}</p>
                                        <p className="card-text">sex: {hero.sex}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Pagination current={this.state.currentPage} total={this.state.totalCount}
                            pageSize={this.state.pageSize} onChange={this.handlePageChange}
                            className="d-flex justify-content-center" />
            </div>
        );
    }

    componentDidMount() {
        this.getHeroes();
    }

    async getHeroes() {
        let start_index = (this.state.currentPage - 1) * this.state.pageSize;
        // res.data 가 response의 body
        const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?` +
            `start_index=${start_index}&page_size=${this.state.pageSize}`);

        console.log(res.data);
        this.setState({
            heroes: res.data.data,
            totalCount: res.data.total
        });
    }
}
