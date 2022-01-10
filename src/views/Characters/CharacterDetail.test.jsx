import  CharacterDetail  from './CharacterDetail'
import { screen, render, findByText, waitFor } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'


describe('character detail', () => {
    it('should render a character', async () => {
        render(<MemoryRouter initialEntries={['/characters/2']}>
            <Route path='/characters/:id'>
                <CharacterDetail />
            </Route>
            </MemoryRouter>)

            screen.getByText('Loading character...')
            await screen.findByText('Morty Smith')
    });
});
