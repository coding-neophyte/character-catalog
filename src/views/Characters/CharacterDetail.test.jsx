import  CharacterDetail  from './CharacterDetail'
import { screen, render} from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'


const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
            return res(ctx.json({
                id: '1',
                image: 'www.example.com/jpeg',
                name: 'Rick Sanchez',
                species: 'Human',
                status: 'Alive'

            }))
    })
);



describe('character detail', () => {
    beforeAll(() => {
        server.listen();
    })
    afterAll(() => {
        server.close();
    })

    it('should render a character', async () => {
        render(<MemoryRouter initialEntries={['/characters/1']}>
            <Route path='/characters/:id'>
                <CharacterDetail />
            </Route>
            </MemoryRouter>)

            screen.getByText('Loading character...')
            await screen.findByText('Rick Sanchez')
    });
});
