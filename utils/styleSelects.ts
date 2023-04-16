import { StylesConfig } from 'react-select';

export const stylesSelect: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    position: 'relative',
    backgroundColor: '#D1D5DB',
    color: '#000',
    paddingTop: '.5rem',
    paddingLeft: '.5rem',
    border: 'none',
    borderBottom: state.isFocused ? '.15rem solid #5FA7F0' : '.15rem solid #9CA3AF',
    borderRadius: '.375rem .375rem 0 0',
    boxShadow: 'none',
    ':hover': {
      borderColor: state.isFocused ? '' : '#4b5563',
      cursor: 'text',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#D1D5DB',
    borderRadius: '.25rem'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#64B5F6' : '',
    color: state.isSelected ? '#000' : '#4B5563',
    fontWeight: state.isSelected ? '600' : '500',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: state.isSelected ? '' : '#2563eb',
      color: state.isSelected ? '' : '#fff',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
    fontWeight: '500',
    padding: '.5rem 0',
    margin: '0',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#4B5563',
    fontWeight: '600',
    padding: '.5rem 0',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#4B5563',
    padding: '.5rem',
    cursor: 'pointer',
    ":hover": {
      color: '#5FA7F0',
    }
  }),
  valueContainer: (provider, props) => ({
    ...provider,
    padding: '0',
    margin: '0',
  }),
  input: (provider) => ({
    ...provider,
    margin: '0',
  }),
};