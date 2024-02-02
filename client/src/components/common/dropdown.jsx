import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const Dropdown = ({
  title,
  items,
  textProperty,
  valueProperty,
  onItemSelect,
}) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {title}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
          >
            {item[textProperty]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

Dropdown.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default Dropdown;
