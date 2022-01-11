import { screen, render } from '@testing-library/react'
import CharacterList from './CharacterList'
import { MemoryRouter, Route } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) =>{
        return res(ctx.json({
            info: {
                pages: 42
            },
            results: [{
            id: '2',
            image: 'www.example.com',
            name: 'Morty Smith',
            species: 'Human',
            status: 'Alive',

        },
        {
            id: '3',
            image: 'www.example.com',
            name: 'Summer Smith',
            species: 'Human',
            status: 'Alive',

        }
    ]}))
    })
)

describe('character list test', () =>{
    beforeAll(() => {
        server.listen();
    })

    afterAll(() => {
        server.close();
    })


    it('should render list of characters', async () =>{
        render(<MemoryRouter initialEntries={['/characters']}>
            <Route exact path='/characters'>
                <CharacterList />
            </Route>
        </MemoryRouter>);

        screen.getByText('Characters')
        await screen.findByText('Summer Smith')



    })
})
