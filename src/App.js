import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import { Container, Grid } from '@mui/material';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }
  handleIncrement = (countryId) => {
    const countries = this.state.countries;
    const countryInc = countries.find(c => c.id === countryId);
    countries[countries.indexOf(countryInc)].gold++;
    this.setState({ countries:countries });
  }
  handleDecrement = (countryId) => {
    const countries = this.state.countries;
    const countryInc = countries.find(c => c.id === countryId);
    const countryGold = countries[countries.indexOf(countryInc)].gold;

    if(countryGold >= 1){
      countries[countries.indexOf(countryInc)].gold--;
      this.setState({ countries:countries });
    }
  }
  render() { 
    return ( 
      <div className="App">
        <Container fixed maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            { this.state.countries.map(country => 
              <Grid item key={country.id}>
                  <Country 
                    key={ country.id } 
                    country={ country }
                    onIncrement={ this.handleIncrement }
                    onDecrement={ this.handleDecrement } />
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
     );
  }
}

export default App;
