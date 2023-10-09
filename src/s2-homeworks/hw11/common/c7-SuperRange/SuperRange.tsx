import React from 'react'
import {Slider, SliderProps, SliderThumb} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider components={{Thumb: SliderCustomizedThumbComponent}}
                sx={{ // стили для слайдера // пишет студент
                    width: 147,
                    color: '#00CC22',
                    marginRight: '9px',
                    '& .MuiSlider-rail': {
                        backgroundColor: '#8B8B8B'
                    },
                    '& .MuiSlider-thumb': {
                        height: 18,
                        width: 18,
                        backgroundColor: '#fff',
                        border: '2px solid currentColor',

                    },
                }}
                {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

interface SliderCustomizedThumbComponentProps extends React.HTMLAttributes<unknown> {
}

function SliderCustomizedThumbComponent(props: SliderCustomizedThumbComponentProps) {
    const {children, ...other} = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span style={{backgroundColor: '#00CC22', borderRadius: 50, width: 6, height: 6}}/>
        </SliderThumb>
    );
}


export default SuperRange
