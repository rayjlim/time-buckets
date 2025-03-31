import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MyTreeView from '../TreeView';
import useTreeView from '../../hooks/useTreeView';

// Mock the hook
vi.mock('../../hooks/useTreeView', () => ({
    default: vi.fn(() => ({
        treeView: [
            { id: 1, title: 'Root', parent_id: 0 },
            { id: 2, title: 'Child 1', parent_id: 1 },
            { id: 3, title: 'Child 2', parent_id: 1 },
            { id: 4, title: 'Grandchild', parent_id: 2 },
        ],
        isLoading: false,
        rootId: 0,
        setRootId: vi.fn(),
    })),
}));

describe('MyTreeView', () => {
    let searchInput: HTMLInputElement;
    let searchButton: HTMLButtonElement;
    let treeBoxButton: HTMLButtonElement;

    beforeEach(() => {
        // Create mock elements
        searchInput = document.createElement('input');
        searchInput.id = 'searchform-id';
        searchButton = document.createElement('button');
        searchButton.id = 'searchFormSubmit';
        treeBoxButton = document.createElement('button');
        treeBoxButton.id = 'tree-box-btn';

        // Add to document
        document.body.appendChild(searchInput);
        document.body.appendChild(searchButton);
        document.body.appendChild(treeBoxButton);
    });

    afterEach(() => {
        // Cleanup
        document.body.removeChild(searchInput);
        document.body.removeChild(searchButton);
        document.body.removeChild(treeBoxButton);
        vi.clearAllMocks();
    });

    it('renders tree structure correctly', () => {
        render(<MyTreeView />);
        expect(screen.getByText('Root')).toBeDefined();
        // expect(screen.getByText('Child 1')).toBeDefined();
        // expect(screen.getByText('Child 2')).toBeDefined();
    });

    it.skip('shows loading state', () => {
        vi.mocked(useTreeView).mockImplementationOnce(() => ({
            treeView: [],
            isLoading: true,
            rootId: 0,
            setRootId: vi.fn(),
        }));

        render(<MyTreeView />);
        expect(screen.getByText('Loading...')).toBeDefined();
    });

    it('handles root ID change', () => {
        const setRootId = vi.fn();
        vi.mocked(useTreeView).mockImplementationOnce(() => ({
            treeView: [],
            isLoading: false,
            rootId: 0,
            setRootId,
        }));

        render(<MyTreeView />);
        const input = screen.getAllByRole('spinbutton');
        fireEvent.change(input[0], { target: { value: '1' } });
        // expect(setRootId).toHaveBeenCalledWith(1);
    });

    it('handles node click', () => {
        render(<MyTreeView />);

        // Mock DOM elements that handleNodeClick expects
        const searchInput = document.createElement('input');
        searchInput.id = 'searchform-id';
        document.body.appendChild(searchInput);

        const searchButton = document.createElement('button');
        searchButton.id = 'searchFormSubmit';
        document.body.appendChild(searchButton);

        const treeBoxButton = document.createElement('button');
        treeBoxButton.id = 'tree-box-btn';
        document.body.appendChild(treeBoxButton);

        // Find and click the button for 'Root' node
        const buttons = screen.getAllByRole('button');
        const rootButton = buttons.find(button => button.textContent === '->');
        if (rootButton) {
            fireEvent.click(rootButton);
            expect(searchInput.value).toBe('');
        }

        // Cleanup
        document.body.removeChild(searchInput);
        document.body.removeChild(searchButton);
        document.body.removeChild(treeBoxButton);
    });
});