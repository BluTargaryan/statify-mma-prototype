import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

// Mock the child components
jest.mock('../app/components/Home/sections/LatestSection', () => {
  return function MockLatestSection() {
    return <div data-testid="latest-section">Latest Section</div>;
  };
});

jest.mock('../app/components/Home/sections/TrendingSection', () => {
  return function MockTrendingSection() {
    return <div data-testid="trending-section">Trending Section</div>;
  };
});

jest.mock('../app/components/Home/sections/TopPostsByCategorySection', () => {
  return function MockTopPostsByCategorySection() {
    return <div data-testid="top-posts-section">Top Posts Section</div>;
  };
});

jest.mock('../app/components/global/sections/AdSpace', () => {
  return function MockAdSpace() {
    return <div data-testid="ad-space">Ad Space</div>;
  };
});

jest.mock('../app/components/Home/sections/HomeCategoryList', () => {
  return function MockHomeCategoryList({ category }: { category: string }) {
    return <div data-testid={`category-list-${category.toLowerCase()}`}>{category} Category List</div>;
  };
});

describe('PageContainer', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the main page container', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  it('renders all section components', () => {
    render(<Home />);
    
    // Check if all main sections are rendered
    expect(screen.getByTestId('latest-section')).toBeInTheDocument();
    expect(screen.getByTestId('trending-section')).toBeInTheDocument();
    expect(screen.getByTestId('top-posts-section')).toBeInTheDocument();
    expect(screen.getByTestId('ad-space')).toBeInTheDocument();
    
    // Check if category lists are rendered
    expect(screen.getByTestId('category-list-events')).toBeInTheDocument();
    expect(screen.getByTestId('category-list-lists')).toBeInTheDocument();
  });

  it('applies correct layout classes', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    
    expect(mainElement).toHaveClass('w-full');
    expect(mainElement).toHaveClass('overflow-x-hidden');
    expect(mainElement).toHaveClass('scroll-smooth');
    expect(mainElement).toHaveClass('flex');
    expect(mainElement).toHaveClass('flex-col');
    expect(mainElement).toHaveClass('gap-16');
    expect(mainElement).toHaveClass('py-8');
  });
});