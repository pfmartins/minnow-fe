import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Toggle from './toggle';

test('Validate render of input element', () => {
    const idEl = 'toggle-component';
    render(<Toggle />);
    const inputEl = screen.getByTestId(idEl);

    expect(inputEl).toBeDefined();
    expect(inputEl.type).toBe('checkbox')
});

test('Validate render of label element', () => {
    const idEl = 'toggle-component-label';
    render(<Toggle isChecked={true} />);
    const labelEl = screen.getByTestId(idEl);

    expect(labelEl).toBeDefined();
    expect(labelEl.htmlFor).toBe('toggle-component')
    expect(labelEl.className).toContain('toggle-label--checked')
});

test('Validate prop isChecked', () => {
    const idEl = 'toggle-component-label';
    const idToggleEl = 'toggle-component';
    let isChecked = false;

    const { rerender } = render(<Toggle isChecked={isChecked} />);
    const labelEl = screen.getByTestId(idEl);
    const inputEl = screen.getByTestId(idToggleEl);

    expect(labelEl.className.trim()).toStrictEqual('toggle-label')
    expect(inputEl.checked).toBeFalsy()

    isChecked = !isChecked;
    rerender(<Toggle isChecked={isChecked} />);

    expect(labelEl.className.trim()).toContain('toggle-label--checked')
    expect(inputEl.checked).toBeTruthy()
});
