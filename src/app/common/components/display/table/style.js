import { stylesheet } from 'typestyle';

const textAlign = {
    textAlign: 'left'
};

export const tableStyle = stylesheet({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        marginTop: '2rem'
    },
    tr: {
        $nest: {
            '& th': {
                ...textAlign,
                padding: '.8rem',
                backgroundColor: '#fff'
            },
            '& td': {
                ...textAlign,
                padding: '.8rem',
                width: '15%'
            },
            '&:nth-child(odd)': {
                backgroundColor: '#f2f2f2'
            }
        }
    }
});