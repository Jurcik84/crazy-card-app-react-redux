import React, { Component } from 'react';
import { connect } from 'react-redux';

// Ant React UI Lib
import { Form, Icon, Input, Button, Select } from 'antd';

// ACTIONS
import { getAvailableCardsHandler } from './actions';


const FormItem = Form.Item;

const Option = Select.Option;

class App extends Component {

  state = {
    income: 0,
    employment_status: ''
  }

  onSelectCredintials = (name, value) => {

    if (name && name === 'income') {
      console.log('income', value.target.value)
      this.setState({
        income: value.target.value
      })
    }

    else if (name && name === "employment") {
      this.setState({
        employment_status: value
      })
    }
  }


  onSubmitForm = event => {
    event.preventDefault();
    this.props.getAvailableCardsHandler(this.state);

  }

  render() {

    const { cards, arr_available_cards } = this.props;

    console.log(this.state)
    return (
      <div className="App">
        <header>
          <Form layout="inline" onSubmit={(e) => this.onSubmitForm(e)}>

            <FormItem>
              <Input
                type="number"
                name="annual_incomming"
                id="annual_incomming"
                min={0}
                onChange={(e) => this.onSelectCredintials('income', e)} />
            </FormItem>

            <FormItem>
              <Select
                style={{ width: "300px" }}
                defaultValue={this.state.employment_status}
                onChange={(e) => this.onSelectCredintials('employment', e)}
              >
                <Option value="employed">Part Time / Full Time Employed</Option >
                <Option value="student">Student</Option >
                {/* <option value="anyone">Not Provided</option> */}
                {/* <option value="part-time employed">Full Time Employed</option> */}
              </Select >
            </FormItem>

            <input type="submit" value="submit" />
          </Form>
        </header>
        <hr />
        <ul>
          {/* {
            cards.map((cardItem, cardIndex) => (
              <li key={cardIndex}>
                {
                  cardItem.Card_Type
                }
              </li>
            ))
          } */}
        </ul>
        <div>
          {
            arr_available_cards.map((cardItem, cardIndex) => (
              <li key={cardIndex}>
                {
                  cardItem.Card_Type
                }
              </li>
            ))
          }
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({

  cards: state.arr_offered_cards,
  arr_available_cards: state.arr_available_cards
});




const mapDispatchToProps = (dispatch) => {

  return {
    getAvailableCardsHandler: (filteringCriterias) => {
      dispatch(getAvailableCardsHandler(filteringCriterias))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
