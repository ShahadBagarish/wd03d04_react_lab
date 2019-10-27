import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
    constructor() {
        super()
        this.state = {
            filter: null
        }
    }
    handleFilterClick = (faves) => {
        console.log("Setting filter to " + faves);
        this.setState(
            { filter: faves }
        )
    }
    render() {
        let allFilms = this.props.TMDB;
        let row = allFilms.films.map(item => <FilmRow title={item.title} id={item.id} date={item.release_date} path={item.poster_path} />)
        
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')} >
                        ALL
            <span className="section-count">{allFilms.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
            <span className="section-count">0</span>
                    </div>
                </div>
                <div>{row}</div>
            </div>
        )
    }
}