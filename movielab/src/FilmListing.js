import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {

    state = {
        filter: null
    }
    handleFilterClick = (faves) => {
        console.log("Setting filter to " + faves);
        this.setState(
            { filter: faves }
        )
    }
    render() {
        let allFilms = this.props.films.map(item => <FilmRow title={item.title} id={item.id} date={item.release_date} path={item.poster_path}
            onFaveToggle = {() => this.props.onFaveToggle(item)}
            onDetailsClick = {() => this.props.onDetailsClick(item)}
            film = {item}
            key = {item.id}
            isFave = {this.props.faves.includes(item)}
            handleDetailsClick = {() => this.props.handleDetailsClick(item)}/>
            )
            
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')} >
                        ALL
            <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
            <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>
                <div>{allFilms}</div>
            </div>
        )
    }
}

