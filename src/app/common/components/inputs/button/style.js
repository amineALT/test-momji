import { style } from 'typestyle';

export const buttonStyle = style({
    fontSize: '1.2rem',
    textTransform: 'Uppercase',
    backgroundColor: '#F59100',
    color: '#fff',
    padding: '.4rem .8rem',
    border: 'none',
    cursor: 'pointer',
    $nest: {
        '&:hover': {
            backgroundColor: '#008CBA',
        }
    }
});