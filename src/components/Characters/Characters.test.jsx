import { screen, render } from '@testing-library/react'
import Characters from './Characters'
import { Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'

describe('characters component test', () => {
    it('should render character component', () =>{

        const mockCharacters = [
            <Link to={
            {
            name: 'Summer Smith',
            image: 'www.example.com'
        }} />,
            <Link to={
            {
                name: 'Alan Rails',
                image: 'www.example.com'
            }} />
        ]


        const charsComponent = render(<MemoryRouter initialEntries={['/characters/3']}><Characters characters={mockCharacters} /> </MemoryRouter>)

        expect(charsComponent).toMatchSnapshot()
    })
})
