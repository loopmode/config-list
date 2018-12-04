import styled from 'styled-components';

export default styled.div`
    > ul {
        padding: 0;
        width: 100%;
    }
    > ul > li {
        display: flex;
        flex-wrap: wrap;
        .item-label {
            flex: 1;
        }
        > button {
            &.active {
                color: deepskyblue;
            }
            &.btn-remove-confirm {
                color: red;
            }
            & + button {
                margin-left: 5px;
            }
            // target the editor without making assumptions about its tag or class
            & + *:last-child:not(button) {
                margin-top: 5px;
                flex-basis: 100%;
            }
        }
    }
`;
