import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../app/about/page';
import { NavSocialsData } from '../app/inAppData/NavSocialsData';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, ...props }: any) {
    return <a {...props}>{children}</a>;
  };
});

// Mock the AboutTextBox component
jest.mock('../app/components/About/AboutTextBox', () => {
  return function MockAboutTextBox({ title, text }: { title: string; text: string }) {
    return (
      <div data-testid={`about-text-box-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  };
});

// Mock the AboutImageTextBox component
jest.mock('../app/components/About/AboutImageTextBox', () => {
  return function MockAboutImageTextBox({ 
    title, 
    text, 
    image, 
    reversed 
  }: { 
    title: string; 
    text: string; 
    image: string; 
    reversed: boolean;
  }) {
    return (
      <div 
        data-testid={`about-image-text-box-${title.toLowerCase().replace(/\s+/g, '-')}`}
        data-reversed={reversed}
      >
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={image} alt={title} />
      </div>
    );
  };
});

describe('About Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<About />);
    expect(screen.getByText('About Statify-MMA')).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    render(<About />);
    const heroImage = screen.getByAltText('MMA fighters in action');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'https://images.unsplash.com/photo-1733951109839-f194ccd78cec');
  });

  it('renders AboutTextBox components with correct content', () => {
    render(<About />);
    
    const aboutUsSection = screen.getByTestId('about-text-box-about-us');
    const missionSection = screen.getByTestId('about-text-box-our-mission');
    
    expect(aboutUsSection).toBeInTheDocument();
    expect(missionSection).toBeInTheDocument();
  });

  it('renders AboutImageTextBox components with correct content', () => {
    render(<About />);
    
    const sections = [
      'in-depth-analysis',
      'enhanced-understanding',
      'passionate-expertise'
    ];

    sections.forEach(section => {
      expect(screen.getByTestId(`about-image-text-box-${section}`)).toBeInTheDocument();
    });
  });

  it('renders all social media links', () => {
    render(<About />);
    
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks).toHaveLength(NavSocialsData.length);
    
    socialLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', NavSocialsData[index].href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('navigates to contact page when clicking the reach out button', () => {
    render(<About />);
    
    const contactButton = screen.getByText('Reach out');
    fireEvent.click(contactButton);
    
    expect(mockPush).toHaveBeenCalledWith('/contact');
  });

  it('applies correct classes to the main container', () => {
    render(<About />);
    const mainElement = screen.getByRole('main');
    
    expect(mainElement).toHaveClass('py-24');
    expect(mainElement).toHaveClass('flex');
    expect(mainElement).toHaveClass('flex-col');
    expect(mainElement).toHaveClass('gap-14');
    expect(mainElement).toHaveClass('md:gap-20');
  });

  it('renders the closing paragraph', () => {
    render(<About />);
    const closingText = screen.getByText(/Join us on this journey/);
    expect(closingText).toBeInTheDocument();
    expect(closingText).toHaveClass('text-center', 'font-noto', 'font-bold');
  });
}); 