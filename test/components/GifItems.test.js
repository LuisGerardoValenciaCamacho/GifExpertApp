import React from "react";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/gifItem";

describe("Pruebas hacia <GifItems/>", () => {

    const title = "Kimetsu";
    const url = "https://kimetsu.com/tanjiro.jpg"

    test("Debe hacer match con el snapshot", () => {
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })
    
    test("Debe mostrar la imagen con el url y el alt indicado", () => {
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    
    test("Debe de mostrar el titulo en el componente", () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})