import { screen, render } from '@testing-library/react'
import CharacterList from './CharacterList'
import { MemoryRouter, Route } from 'react-router-dom'

describe('character list test', () =>{
    it('should render list of characters', async () =>{
        render(<MemoryRouter initialEntries={['/characters']}>
            <Route path='/characters'>
                <CharacterList />
            </Route>
        </MemoryRouter>);

        screen.getByText('Characters')
        const character = await screen.findByText('Jerry Smith')

        expect(character).toBeInTheDocument()

    })
})
