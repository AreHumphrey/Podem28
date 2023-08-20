import React, {useState} from "react";
import "./Header.css"
import { Dropdown, NavDropdown } from "react-bootstrap";

function MyDropdownMenu() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Dropdown>
            <NavDropdown
                title="Наша продукция"
                id="dropdownMenu"
                className={isFocused ? "my-dropdown-menu focused" : "my-dropdown-menu"}
                onMouseEnter={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
            >
                <Dropdown.Item href="/products/gruzopodemnoe-oborudovanie/">
                    Грузоподъемное оборудование
                </Dropdown.Item>
                <Dropdown.Item href="/products/skladskoe-oborudovanie/">
                    Складское оборудование
                </Dropdown.Item>
                <Dropdown.Item href="/products/stroitelnoe-oborudovanie/">
                    Строительное оборудование
                </Dropdown.Item>
                <Dropdown.Item href="/products/gazosvarochnoe-oborudovanie/">
                    Газосварочное оборудование
                </Dropdown.Item>
            </NavDropdown>
        </Dropdown>
    );
}

export default MyDropdownMenu;
