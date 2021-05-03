import { style } from 'typestyle';

export const filterTableStyle = style({
    $nest: {
        '& input, select': {
            width: '13%'
        }
    }
});