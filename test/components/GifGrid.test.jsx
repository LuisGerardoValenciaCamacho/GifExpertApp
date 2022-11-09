import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/gifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs")

describe("Pruebas en <GifGrid/>", () => {

    const category = "Kimetsu";

    test("Debe de mostrar el loading inicialmente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));

    })

    test("Debemos mostrar items cuando se carga las imagnes usando useFetchGifs", () => {
        
        const gifs = [
            {
                id: "ABC",
                title: "Kimetsu",
                url: "https://localhost/kimetsu.jpg"
            },
            {
                id: "DEF",
                title: "Dragon Ball",
                url: "https://localhost/Goku.jpg"
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })        
        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole("img").length).toBe(2);
    })
})