import React, { Component } from 'react';
import { connect } from 'react-redux';

// Ant React UI Lib
import { Form, Icon, Input, Button, Select, List, Avatar, Row, Col, Card, Collapse, Layout } from 'antd';

// ACTIONS
import {
  getAvailableCardsHandler, loadCartsDefinitionsHandler, selectCardsHandler,
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
      <Layout className="layout" style={{ maxWidth: "940px", margin: "auto" }} className="App">

        <Header>
          <Form  style={{  padding: 24}} layout="inline" onSubmit={(e) => this.onSubmitForm(e)}>

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
            <FormItem>
            <Input type="submit" value="submit" />
            </FormItem>
          </Form>
        </Header>
        <hr />
        <Content style={{  padding: 24}}>
          Selected Card will give you :  {num_total_balance}
        </Content>
        <hr />
        <Content style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Row>
            <Col span={24}>
              <List
                className="demo-loadmore-list"
                // loading={loading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={arr_available_cards}
                renderItem={card => (
                  <List.Item actions={[<div >Show Card Detail</div>, <div>more</div>]}>
                    <List.Item.Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={card.Card_Type}
                      description=""
                    />
                    <div onClick={() => this.props.selectCardsHandler(card)}>Select Card</div>
                  </List.Item>
                )}
              />

              {/* <Collapse defaultActiveKey={null} onChange={(key)=>this.props.selectCardsHandler(key)}>
              {
                arr_available_cards.map((card, cardIndex) => (

                  <Panel
              
                  header={card.Card_Type} 
                  key={cardIndex.toString()}>
                    <p>{card.Apr}</p>
                    <p>{card.Balance_Transfer_Offer_Duration}</p>
                    <p>{card.Purchase_Offer_Duration}</p>
                    <p>{card.Credit_Available}</p>
                    <p>{card.min_required_income}</p>
                  </Panel>
                ))
              }
            </Collapse> */}
            </Col>
          </Row>
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


