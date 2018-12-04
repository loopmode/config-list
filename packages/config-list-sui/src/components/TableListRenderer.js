import React, { PureComponent } from 'react';

import { Table, Segment } from 'semantic-ui-react';

import PropTypes from 'prop-types';

import cx from 'classnames';
import styled from 'styled-components';

import { settingsShape } from '../shapes';

import { defaultListSettings } from '../defaults';
import memoize from 'memoize-one';

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
        settings: settingsShape,
        //
        className: PropTypes.string,
        children: PropTypes.node
    };

    getSettings = memoize((defaults, settings) => ({ ...defaults, ...settings }));
    get settings() {
        return this.getSettings(defaultListSettings, this.props.settings);
    }

    render() {
        const { className } = this.props;
        const { columns } = this.settings;

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
                        </tr>
                    </thead>
                    <tbody>{this.props.children}</tbody>
                </Table>
            </StyledSegment>
        );
    }
}
