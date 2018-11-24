import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export default styled(Form)`
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
