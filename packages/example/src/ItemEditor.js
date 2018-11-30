import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DataItemShape } from 'config-list/lib/utils/shapes';
import styled from 'styled-components';

const StyledContainer = styled.div`
    border: 1px solid #eee;
    padding: 10px;
    footer {
        text-align: right;
    }
`;
export default class ItemEditor extends PureComponent {
    static propTypes = {
        item: DataItemShape,
        onEditCancel: PropTypes.func,
        onEditConfirm: PropTypes.func,
        modalParent: PropTypes.shape({
            registerChildData: PropTypes.func
        })
    };

    state = {
        changes: {}
    };

    componentDidMount() {
        if (this.props.modalParent) {
            this.props.modalParent.registerChildData(() => ({
                data: this.state.changes
            }));
        }
    }

    getCurrentValue(key) {
        const stateValue = this.state.changes[key];
        const itemValue = this.props.item[key];
        if (stateValue === undefined) {
            return itemValue;
        }
        return stateValue;
    }
    render() {
        return (
            <StyledContainer>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label>value</label>
                        <input
                            name="value"
                            value={this.getCurrentValue('value') || ''}
                            onChange={event => this.handleChange(event)}
                        />
                    </div>
                    {!this.props.modalParent && (
                        <footer>
                            <button type="button" onClick={event => this.handleCancel(event)} children="✕" />
                            <button type="submit" children="✔" />
                        </footer>
                    )}
                </form>
            </StyledContainer>
        );
    }
    handleChange(event) {
        this.setState({
            changes: {
                ...this.state.changes,
                [event.target.name]: event.target.value
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onEditConfirm({ item: this.props.item, event, data: this.state.changes });
    }
    handleCancel(event) {
        this.props.onEditCancel({ item: this.props.item, event });
    }
}
