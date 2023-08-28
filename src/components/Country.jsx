import { Avatar, Button, Divider, Paper } from '@mui/material';
import React, { Component } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

class Country extends Component {
    renderDisabled(gold){
        return (gold <= 0 ? true : false);
    }

    render() {
        const { onIncrement, onDecrement, country } = this.props;
        return (
            // contains each div elements
            <Paper elevation={3} className='paperBounds'>
                {/* div element used to display the country's name */}
                <div className='countryName'>
                    { country.name }
                </div>

                <Divider className='dividerScale'/>

                {/* div element used to display the gold medal count */}
                <div className='medalCountDiv'>
                    <Avatar className='countDiv'>{ country.gold }</Avatar>
                    <span className='goldMedalText'>Gold Medals</span>

                    {/* button element used to increment the gold medal count */}
                    <Button onClick={ () => onIncrement(country.id) }
                            className='incdecButtonClass' 
                            variant='outlined'>
                        <AddRoundedIcon fontSize='large'/>
                    </Button>

                    {/* button element used to decrement the gold medal count */}
                    <Button onClick={ () => onDecrement(country.id) }
                            className='incdecButtonClass' 
                            variant='outlined'
                            color='error'
                            disabled={this.renderDisabled(country.gold)}>
                        <RemoveRoundedIcon fontSize='large'/>
                    </Button>
                </div>
            </Paper>
        );
    }
    
}

export default Country