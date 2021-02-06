import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hello from '../src/Hello';

describe('Hello component test suite', function() {
    it('should render a component that says Hello World', function() {
        render(<Hello />)
        const hello = screen.getByText(/Hello World/i);
        expect(hello).toBeInTheDocument();
    });
});