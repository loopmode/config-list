import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

export default styled(Segment)`
    > .ui.segment:first-child {
        padding-top: 0;
    }
    > .ui.segment:last-child {
        padding-bottom: 0;
    }
    table.ui {
        thead,
        tbody {
            td,
            th {
                &:last-child {
                    text-align: right;
                }
            }
        }
    }
`;
