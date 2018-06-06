import React, { Component } from 'react';
import { connect } from 'react-redux';
import Currency from 'react-currency-formatter';


// Ant React UI Lib
import { Form, Icon, Input, Button, Select, List, Avatar, Row, Col, Card, Collapse, Layout } from 'antd';

// ACTIONS
import {
  getAvailableCardsHandler,
  loadCartsDefinitionsHandler,
  selectCardsHandler,

} from './actions';


// DESTRUCT ANT LIB COMPONENT
const FormItem = Form.Item;

const Option = Select.Option;

const Panel = Collapse.Panel;

const { Header, Content, Footer } = Layout;


// MAIN REACT COMPONENT
class App extends Component {

  state = {
    income: 0,
    employment_status: ''
  }

  componentDidMount() {
    this.props.loadCartsDefinitionsHandler();
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

    const { cards, arr_available_cards, selectedCards, num_total_balance } = this.props;

    // console.log('selectedCards', num_total_balance)
    return (
      <Layout
        className="layout"
        style={{ maxWidth: "940px", margin: "auto" }}
      >

        <Header>
          <Form style={{ padding: 12 }} layout="inline">

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

              </Select >
            </FormItem>
            <FormItem>
              <Button onClick={(e) => this.onSubmitForm(e)} >
                Search your options
              </Button>
            </FormItem>
          </Form>
        </Header>
        
        <Content style={{ padding: 6 }}>
          Total Credit from Cards you choose :
          <Currency
            quantity={num_total_balance}
            currency="GBP"
          />

        </Content>
       <Content style={{ background: '#fff', padding: 0, minHeight: 280 }}>
          <Collapse>
            {
              arr_available_cards.map((cardItem, cardIndex) => (

                <Panel header={cardItem.Card_Type} key={cardIndex.toString()}>

                  {
                    Object.entries(cardItem).map((cardItemEntry, cardIndexEntry)=>(
                        <p>{cardItemEntry[0].replace(/_/g, ' ')} : {cardItemEntry[1]}</p>
                    ))
                  }
                  <Button
                    type="primary"
                    onClick={() => this.props.selectCardsHandler(cardItem)}>
                    <Icon type="select" />
                  </Button>
                </Panel>
              ))
            }
          </Collapse>
        </Content>
      </Layout>
    );
  }
}



const mapStateToProps = (state) => ({

  cards: state.arr_offered_cards,
  arr_available_cards: state.arr_available_cards,
  income: state.income,
  employment_status: state.employment_status,
  selectedCards: state.selectedCards,
  num_total_balance: state.num_total_balance
});




const mapDispatchToProps = (dispatch) => {

  return {
    getAvailableCardsHandler: (filteringCriterias) => {
      dispatch(getAvailableCardsHandler(filteringCriterias))
    },
    loadCartsDefinitionsHandler: () => {
      dispatch(loadCartsDefinitionsHandler())
    },
    selectCardsHandler: (selectedCard) => {
      dispatch(selectCardsHandler(selectedCard))
    },

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


