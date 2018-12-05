import defaults from '@loopmode/config-list/lib/defaults';

export const COLUMN_FIELD_ITEM = '$item';
export const COLUMN_FIELD_ACTIONS = '$actions';

export const defaultListSettings = {
    ...defaults,
    displayHeaders: true,
    columns: [{ label: 'Name', field: COLUMN_FIELD_ITEM }, { label: 'Actions', field: COLUMN_FIELD_ACTIONS }]
};

export const defaultSelectSettings = {
    ...defaults,
    dropdownIcon: 'add circle',
    dropdownText: 'select item',
    dropdownEmptyText: 'No selectable items available'
};
