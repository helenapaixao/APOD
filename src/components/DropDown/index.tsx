import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


export function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Original size', value: 'Original size'},
    {label: 'Share app', value: 'Share app'},
    {label: 'Settings', value: 'Settings'},
    {label: 'About', value: 'About'},
  ]);

  return (
    <DropDownPicker
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
  />
  )
}