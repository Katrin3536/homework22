import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 150,
                color: '#00CC22',
                height: 4,
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                },
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    border: '1px solid #00CC22',

                    background: 'radial-gradient(circle, #01CB22 0%, #01CB22 3px, #fff 4px, #fff 100%)',

                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'none',
                    },
                    '&::before': {
                        display: 'none',
                    },
                    '&::after': {
                        display: 'none',
                    }
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
