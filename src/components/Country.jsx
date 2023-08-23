import { Avatar, Button, Container, Divider, Paper } from '@mui/material';
import React, { Component } from 'react';
import PlusOneRoundedIcon from '@mui/icons-material/PlusOneRounded';

class Country extends Component {
    state = {
        name: 'United States',
        gold: 0,
    }

    handleIncrement = () => {
        this.setState({ gold: this.state.gold + 1 })
    }

    render() {
        return (
            // contains the other div elements
            <Container maxWidth="lg">
                <Paper elevation={3} className='paperBounds'>
                    {/* div element used to display the country's name */}
                    <div className='countryName'>
                        { this.state.name }
                    </div>

                    <Divider className='dividerScale'/>

                    {/* div element used to display the gold medal count */}
                    <div className='medalCountDiv'>
                        <Avatar className='countDiv'>{ this.state.gold }</Avatar>
                        <span className='goldMedalText'>Gold Medals</span>

                        {/* button element used to increment the gold medal count */}
                        <Button onClick={ this.handleIncrement }
                                className='incrementButtonClass' 
                                variant='outlined'>
                            <PlusOneRoundedIcon/>
                        </Button>
                    </div>
                </Paper>
            </Container>
        );
    }
    
}

export default Country