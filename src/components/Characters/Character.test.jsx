import Character from "./Character";
import { screen, render } from '@testing-library/react'

describe('character test', () => {
    it('should render character component', () => {
        const fakeCharacter = {
            image: 'www.example.com',
            name: 'Rick Sanchez',
            species: 'Human',
            status: 'Alive',
        }

       const charComponent = render(<Character character={fakeCharacter} />)

       expect(charComponent).toMatchSnapshot()
    })
})
