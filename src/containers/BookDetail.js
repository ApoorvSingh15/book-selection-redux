
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Grid,
    Row,
    Col,
    Jumbotron
} from 'react-bootstrap';

class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return(
                <Grid>
                    <Row>
                        <Col Col mdOffset={5} lgOffset={5} xsOffset={6} smOffset={6}>
                            <Jumbotron>
                                Select a Book To get Started
                            </Jumbotron>
                        </Col>
                        <Col mdOffset={7} lgOffset={7} xsOffset={7} smOffset={7} className="loader">
                        </Col>    
                    </Row>
                </Grid>
            );
        }
        return(
            <div>
               <h3> Details For : </h3>
                <Grid>
                    <Row>
                        <Col mdOffset={4} lgOffset={4} xsOffset={6} smOffset={6}>
                            <Jumbotron>
                                <label>
                                    <strong>
                                        Title :&nbsp; 
                                    </strong>
                                </label>
                                    {this.props.book.title}
                                <br />
                                <label><strong> Pages :&nbsp;</strong></label>
                                {this.props.book.pages}
                            </Jumbotron>    
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps( state ){
    return{
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);