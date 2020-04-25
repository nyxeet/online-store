import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

export default ({
  pad,
  width,
  value,
  onClick,
  onChange,
  MenuItemData,
  name,
}) => (
  <FormControl style={pad}>
    <InputLabel>{name}</InputLabel>
    <Select value={value} style={width} onClick={onClick} onChange={onChange}>
      <MenuItem>
        <em>None</em>
      </MenuItem>
      {MenuItemData.map((i) => (
        <MenuItem value={i.value}>{i.name}</MenuItem>
      ))}
    </Select>
  </FormControl>
)
