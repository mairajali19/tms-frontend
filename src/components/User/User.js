import React, { Component } from 'react';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs'
import Dropdowns from '../Dropdown/Dropdown'
import Paginations from '../Pagination/Pagination'
import Tables from '../TableComponent/table'
// import Header from './Components/Header/Header'
import Tabs from '../Tab/Tab'
// import ListHeader from '../ListHeader
import Navigation from '../Navigation'
import { Container } from 'reactstrap'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          loginid: 1,
          firstname: 'Ahmed',
          lastname: 'Raza',
          email: 'ahmedraza@gmail.com'
        },
        {
          loginid: 2,
          firstname: 'Ahmed0',
          lastname: 'Raza0',
          email: 'ahmedraza0@gmail.com'
        },
        {
          loginid: 3,
          firstname: 'Ahmed1',
          lastname: 'Raza1',
          email: 'ahmedraza1@gmail.com'
        }, {
          loginid: 4,
          firstname: 'Ahmed2',
          lastname: 'Raza2',
          email: 'ahmedraza2@gmail.com'
        }, {
          loginid: 5,
          firstname: 'Ahmed3',
          lastname: 'Raza3',
          email: 'ahmedraza3@gmail.com'
        }, {
          loginid: 6,
          firstname: 'Ahmed4',
          lastname: 'Raza4',
          email: 'ahmedraza4@gmail.com'
        }, {
          loginid: 7,
          firstname: 'Ahmed5',
          lastname: 'Raza5',
          email: 'ahmedraza5@gmail.com'
        }, {
          loginid: 8,
          firstname: 'Ahmed6',
          lastname: 'Raza6',
          email: 'ahmedraza6@gmail.com'
        }, {
          loginid: 9,
          firstname: 'Ahmed7',
          lastname: 'Raza7',
          email: 'ahmedraza7@gmail.com'
        }, {
          loginid: 10,
          firstname: 'Ahmed8',
          lastname: 'Raza8',
          email: 'ahmedraza8@gmail.com'
        }, {
          loginid: 11,
          firstname: 'Ahmed9',
          lastname: 'Raza9',
          email: 'ahmedraza9@gmail.com'
        }, {
          loginid: 12,
          firstname: 'Ahmed10',
          lastname: 'Raza10',
          email: 'ahmedraza10@gmail.com'
        }, {
          loginid: 13,
          firstname: 'Ahmed11',
          lastname: 'Raza11',
          email: 'ahmedraza11@gmail.com'
        }, {
          loginid: 14,
          firstname: 'Ahmed12',
          lastname: 'Raza12',
          email: 'ahmedraza12@gmail.com'
        }, {
          loginid: 15,
          firstname: 'Ahmed13',
          lastname: 'Raza13',
          email: 'ahmedraza13@gmail.com'
        }, {
          loginid: 16,
          firstname: 'Ahmed14',
          lastname: 'Raza14',
          email: 'ahmedraza14@gmail.com'
        }, {
          loginid: 17,
          firstname: 'Ahmed15',
          lastname: 'Raza15',
          email: 'ahmedraza15@gmail.com'
        }, {
          loginid: 18,
          firstname: 'Ahmed16',
          lastname: 'Raza16',
          email: 'ahmedraza16@gmail.com'
        }, {
          loginid: 19,
          firstname: 'Ahmed17',
          lastname: 'Raza17',
          email: 'ahmedraza17@gmail.com'
        }, {
          loginid: 20,
          firstname: 'Ahmed18',
          lastname: 'Raza18',
          email: 'ahmedraza18@gmail.com'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Navigation /><br/>
        <Breadcrumbs item='Users' />

        <Dropdowns />




        <Container fluid>
          <Tabs />
        </Container>

        <br />
        <Container fluid >
          {/* {/* <ListHeader /><br /> */}
          <Tables users={this.state.users} />
        </Container>

      </div>
    );
  }
}

export default App;
