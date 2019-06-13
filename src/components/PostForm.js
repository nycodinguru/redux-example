import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
    
        this.setState({ [name]: value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Title: </label>
                    <input name="title" type="text" value={this.state.title} onChange={this.onChange}></input>
                    <br />
                    <label>Body: </label>
                    <textarea name="body" onChange={this.onChange}></textarea>
                    <br />
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);