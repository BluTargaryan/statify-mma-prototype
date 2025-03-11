import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../app/layout';

// Mock the Inter font
jest.mock('next/font/google', () => ({
  Inter: () => ({
    variable: 'mock-font-inter',
    subsets: ['latin'],
  }),
}));

// Mock the Nav component
jest.mock('../app/components/global/sections/Nav', () => {
  return function MockNav() {
    return <nav data-testid="navigation">Navigation</nav>;
  };
});

// Mock the Footer component
jest.mock('../app/components/global/sections/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

describe('RootLayout', () => {
  const mockChildren = <div data-testid="mock-children">Test Content</div>;

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  const renderWithinHtml = (ui: React.ReactElement) => {
    // Create a container that will act as our test root
    const container = document.createElement('div');
    document.body.innerHTML = ''; // Clear the body
    document.body.appendChild(container);

    return render(ui, { container });
  };

  it('renders the layout with all components', () => {
    renderWithinHtml(<RootLayout>{mockChildren}</RootLayout>);

    // Check if main components are rendered
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies correct classes to body', () => {
    renderWithinHtml(<RootLayout>{mockChildren}</RootLayout>);

    // Get the first element with the classes (which will be our body element)
    const bodyElement = document.querySelector('[class*="antialiased"]');

    expect(bodyElement).toHaveClass('mock-font-inter');
    expect(bodyElement).toHaveClass('antialiased');
    expect(bodyElement).toHaveClass('bg-bg');
    expect(bodyElement).toHaveClass('text-text');
    expect(bodyElement).toHaveClass('pt-28');
    expect(bodyElement).toHaveClass('px-4');
    expect(bodyElement).toHaveClass('box-border');
    expect(bodyElement).toHaveClass('overflow-x-hidden');
    expect(bodyElement).toHaveClass('md:px-10');
    expect(bodyElement).toHaveClass('md:pt-32');
    expect(bodyElement).toHaveClass('lg:px-36');
  });

  it('renders children correctly', () => {
    const testContent = <div data-testid="test-content">Specific Test Content</div>;
    renderWithinHtml(<RootLayout>{testContent}</RootLayout>);
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
    expect(screen.getByText('Specific Test Content')).toBeInTheDocument();
  });

  it('maintains correct component order', () => {
    renderWithinHtml(<RootLayout>{mockChildren}</RootLayout>);
    
    const contentWrapper = screen.getByTestId('mock-children').parentElement;
    const components = contentWrapper?.querySelectorAll('[data-testid]');

    // Check if the order is Nav -> Children -> Footer
    expect(components?.[0]).toHaveAttribute('data-testid', 'navigation');
    expect(components?.[1]).toHaveAttribute('data-testid', 'mock-children');
    expect(components?.[2]).toHaveAttribute('data-testid', 'footer');
  });

  // Test metadata indirectly since it's a Next.js feature
  it('exports metadata object with correct values', async () => {
    const { metadata } = await import('../app/layout');
    
    expect(metadata.title).toBe('Statify-MMA');
    expect(metadata.description).toBe('Statify-MMA');
  });
});