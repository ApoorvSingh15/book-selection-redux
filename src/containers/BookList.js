import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { 
    ListGroup,
    ListGroupItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
class BookList extends Component {
    renderList(){
        return( 
            this.props.books.map((book) =>{
                return(
                    <ListGroupItem 
                        key={book.title}
                        onClick = { () => this.props.selectBook( book ) }
                    >
                        {book.title}
                    </ListGroupItem>
                );
            })
        );
    }
    render(){
        return(
            <Col md={4} xs={6} lg={4} sm={6}>
                <ListGroup>
                    {this.renderList()}
                </ListGroup>
            </Col>               
        )
    }
}   
function mapStateToProps(state){
    return{
      books : state.books
    }
}
// Anything returned from this function will appear as props
// in the BookList Container

function mapDispatchToProps(dispatch)  {

    
    // Whever selectBook is called the result should be passed
    // to all the reducers
    return bindActionCreators({ selectBook : selectBook }, dispatch)
    //                          key        : value
}


// Promote BookList from a component to a container
// it needs to know about this new dispatch function, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);