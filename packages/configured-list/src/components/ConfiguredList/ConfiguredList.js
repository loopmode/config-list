import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

import StyledForm from './ConfiguredList.styled';
import AssignedItems from '../AssignedItems';
import DropdownSelect from '../DropdownSelect';

export default class ConfiguredList extends PureComponent {
    static propTypes = {
        items: PropTypes.array,
        selectedItems: PropTypes.array,
        className: PropTypes.string,
        conceptID: PropTypes.string,
        onChange: PropTypes.func,
        onRemove: PropTypes.func,
        nothingAvailableText: PropTypes.string,
        nothingSelectedText: PropTypes.string
    };
    static defaultProps = {
        nothingAvailableText: 'No items available',
        nothingSelectedText: 'No items selected'
    };

    offsetSliderSettings = {
        min: 0,
        max: 100,
        step: 1
    };

    state = {
        confirmDelete: undefined
    };
    constructor(props, context) {
        super(props, context);
        Object.keys(this).forEach(key => key.startsWith('handle') && (this[key] = this[key].bind(this)));
    }

    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    setState(nextState) {
        this._isMounted && super.setState(nextState);
    }

    render() {
        const { nothingAvailableText, nothingSelectedText, items, selectedItems, className } = this.props;

        const hasItems = items && items.length > 0;
        const hasSelectedItems = selectedItems && selectedItems.length > 0;
        return (
            <StyledForm className={className}>
                {hasItems ? (
                    <Form.Field>
                        <DropdownSelect onAdd={this.handleAdd} items={items} selectedItems={selectedItems} />
                    </Form.Field>
                ) : (
                    <Form.Field>{nothingAvailableText}</Form.Field>
                )}

                {hasSelectedItems ? (
                    <Form.Field>
                        <AssignedItems items={selectedItems} onEdit={this.handleEdit} onRemove={this.handleRemove} />
                    </Form.Field>
                ) : (
                    <Form.Field>{nothingSelectedText}</Form.Field>
                )}
            </StyledForm>
        );
    }

    handleRemove(query) {
        this.setState({ confirmDelete: query });
    }
    handleRemoveCancel() {
        this.setState({ confirmDelete: undefined });
    }
    handleRemoveConfirm({ item, id }) {
        this.props.onRemove({ item, id });
    }
    handleAdd(item) {
        console.log('add', item);
    }
}
