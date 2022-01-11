import { render } from '@testing-library/react'
import Characters from './Characters'
import { MemoryRouter } from 'react-router-dom'

describe('characters component test', () => {
    it('should render character component', () =>{

        const mockCharacters = [

            {
                id: '1',
                name: 'Summer Smith',
                image: 'www.example.com'
        },

            {
                id: '2',
                name: 'Alan Rails',
                image: 'www.example.com'
            }
        ]


        const charsComponent = render(<MemoryRouter initialEntries={['/characters/3']}><Characters characters={mockCharacters} /> </MemoryRouter>)

        expect(charsComponent).toMatchSnapshot()
    })
})
