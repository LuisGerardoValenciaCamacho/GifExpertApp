import { useState } from "react";
import PropTypes from "prop-types";

export const Addcategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if(newInputValue.length <= 1) return;
        onNewCategory(newInputValue)
        setInputValue("");
    }
    
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar en Gifs" 
                value={inputValue} 
                onChange={onInputChange}
            />
        </form>
    )
}

Addcategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}