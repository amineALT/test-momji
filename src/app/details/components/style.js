import { stylesheet } from 'typestyle';

export const detailPageStyle = stylesheet({
    wrapper: {
        fontFamily: 'arial',
        fontSize: '.9rem',
        maxWidth: '20%',
        margin: '2rem auto 0',
        border: '1px solid grey',
        borderRadius: '2px',
        padding: '2rem 5rem',
        boxShadow: '1px 1px 3px #555'
    },
    goBackLink: {
        backgroundColor: '#008CBA',
        color: '#fff',
        padding: '.4rem .8rem',
        marginBottom: '2rem',
        display: 'inline-block',
        border: '2px',
        textDecoration: 'none'
    },
    form: {
        $nest: {
            '& label': {
                display: 'block',
                marginBottom: '1rem'
            },
            '& input:not([type="checkbox"])': {
                display: 'block',
                width: '100%',
                margin: '.3rem 0'
            },
            '& button': {
                display: 'block',
                width: '100%',
                marginTop: '2rem'
            }
        }
    }
});