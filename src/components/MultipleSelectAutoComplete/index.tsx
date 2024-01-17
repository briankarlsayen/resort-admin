import React from 'react'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

interface MultiSelectAutocompleteProps {
  name: string
  label?: string
  options: any[]
  value: any
  onChange: (name: string, options: any[]) => void
}

const MultiSelectAutocomplete = ({
  name,
  options,
  onChange,
  value,
  label,
}: MultiSelectAutocompleteProps) => {
  return (
    <Autocomplete
      multiple
      id="multi-select-autocomplete"
      options={options}
      getOptionLabel={(option) => option}
      onChange={(_, newValue) => onChange(name, newValue)}
      value={value}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

export default MultiSelectAutocomplete
