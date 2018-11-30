import React, { PureComponent } from 'react';

import { Table, Segment } from 'semantic-ui-react';

import PropTypes from 'prop-types';

import cx from 'classnames';
import styled from 'styled-components';

const StyledSegment = styled(Segment)`
    .ui.table thead,
    .ui.table tbody {
        td:last-child,
        th:last-child {
            text-align: right;
        }
    }
`;

export default class TableListRenderer extends PureComponent {
    static propTypes = {
        //
        className: PropTypes.string,
        children: PropTypes.node,
        //
        parentProps: PropTypes.shape({
            columns: PropTypes.arrayOf(
                PropTypes.shape({
                    field: PropTypes.string,
                    label: PropTypes.string
                })
            )
        })
    };

    render() {
        const { className } = this.props;
        const { columns } = this.props.parentProps;

        return (
            <StyledSegment vertical className={cx(className, 'TableListRenderer ListRenderer')}>
                <Table>
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th
                                    key={`${column.field}--${column.label}`}
                                    children={column.label}
                                    className={`column-${column.field}`}
                                />
                            ))}
                            <th children={'Actions'} className="column-actions" />
                        </tr>
                    </thead>
                    <tbody>{this.props.children}</tbody>
                </Table>
            </StyledSegment>
        );
    }
}
