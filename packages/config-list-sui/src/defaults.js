import defaults from '@loopmode/config-list/lib/defaults';

export const COLUMN_FIELD_ITEM = '$item';
export const COLUMN_FIELD_ACTIONS = '$actions';

export const defaultListSettings = {
    ...defaults,
    columns: [{ label: 'Name', field: COLUMN_FIELD_ITEM }, { label: 'Actions', field: COLUMN_FIELD_ACTIONS }]
};
