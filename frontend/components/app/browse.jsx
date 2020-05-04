import React from "react";
import MovieRow from "./movie_row";

class Browse extends React.Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     genres: this.props.genres
        // };
    }

    componentDidMount() {
        this.props.getGenres()
    }

    render() {

        // debugger

        let { genres } = this.props
        let movieRows = [];

        // if (this.props.genres) {
        //     movieRows = this.props.genres.map(genre => {
        //         return (
        //             <MovieRow genre={genre} />
        //         )
        //     })
        // }

        if (genres) {
            for (let [key, value] of Object.entries(genres)) {
                let movieRow = (
                    <MovieRow name={key} movies={value} />
                )
                movieRows.push(movieRow);
            }
        }

        return (
            <main className="browse-main">
                <section className="browse-hero-container">
                    <div className="hero-info-container">
                        
                    </div>
                    <div className="hero-video"></div>
                </section>

                <section className="browse-rows-container">
                    {movieRows}
                </section>
            </main>
        )
    }

}

export default Browse;