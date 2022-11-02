import React, { useState } from "react";
import { Addcategory } from "./components/addCategory";
import { GifGrid } from "./components/gifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);
    const onAddcategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <Addcategory 
                onNewCategory={onAddcategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    );
}