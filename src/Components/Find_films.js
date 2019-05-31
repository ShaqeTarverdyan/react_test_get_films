import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../State_management/Actions/actions';

import { Menu, Input, Button, Form } from 'semantic-ui-react'


class Films extends React.Component {

    getFilm = (e) => {
        e.preventDefault();
        this.props.makeRequest(this.props.serachFilm)
    }
    render() {
        return (
            <div>
                <Menu>
                    <Form onSubmit={this.getFilm}>
                        <span>                             <Input
                                icon='search'
                                type='text'
                                name='serachFilm'
                                placeholder='Search...'
                                onChange={this.props.getInput}

                            />
                            <Button positive>Search</Button></span>


                    </Form>
                </Menu>

                {
                    this.props.films === "" ? <h2>Search your favorite film</h2> :

                        this.props.loading ? <p>Loading ...</p> :
                            this.props.films === "" ? <p>not found</p> :
                                <>
                                    <h1>Title: {this.props.films.Title}</h1>
                                    <p>
                                        Year: {this.props.films.Year} <br />
                                        RunTime: {this.props.films.Runtime} <br />
                                        Language: {this.props.films.Language}<br />
                                        Actors: {this.props.films.Actors} <br />
                                        Director: {this.props.films.Director}
                                    </p>
                                </>

                }
                <div>

                </div>
            </div>
        );
    }
}
const mapStateToDispatch = state => {
    return {
        films: state.films,
        loading: state.loading,
        serachFilm: state.serachFilm
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFilm: () => dispatch(actionCreator.getFilm()),
        getInput: (event) => dispatch(actionCreator.getInput(event)),
        makeRequest: (val) => dispatch(actionCreator.makeRequest(val))
    }
}
export default connect(mapStateToDispatch, mapDispatchToProps)(Films);