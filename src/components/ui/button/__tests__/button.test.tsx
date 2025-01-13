import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button Component', () => {
  // Basic Rendering Tests
  it('renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  // Interaction Tests
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Variant Tests
  describe('variants', () => {
    it('applies default variant classes correctly', () => {
      render(<Button variant="default">Default Button</Button>);
      const button = screen.getByText('Default Button');
      expect(button).toHaveClass('bg-primary');
    });

    it('applies ghost variant classes correctly', () => {
      render(<Button variant="ghost">Ghost Button</Button>);
      const button = screen.getByText('Ghost Button');
      expect(button).toHaveClass('hover:bg-accent');
    });

    it('applies outline variant classes correctly', () => {
      render(<Button variant="outline">Outline Button</Button>);
      const button = screen.getByText('Outline Button');
      expect(button).toHaveClass('border');
    });
  });

  // Size Tests
  describe('sizes', () => {
    it('applies default size classes correctly', () => {
      render(<Button size="default">Default Size</Button>);
      expect(screen.getByText('Default Size')).toHaveClass('h-10', 'px-4', 'py-2');
    });

    it('applies sm size classes correctly', () => {
      render(<Button size="sm">Small Size</Button>);
      expect(screen.getByText('Small Size')).toHaveClass('h-9', 'px-3');
    });

    it('applies lg size classes correctly', () => {
      render(<Button size="lg">Large Size</Button>);
      expect(screen.getByText('Large Size')).toHaveClass('h-11', 'px-8');
    });

    it('applies icon size classes correctly', () => {
      render(<Button size="icon">Icon</Button>);
      expect(screen.getByText('Icon')).toHaveClass('h-10', 'w-10');
    });
  });

  // Accessibility Tests
  describe('accessibility', () => {
    it('has appropriate role', () => {
      render(<Button>Accessible Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled Button</Button>);
      expect(screen.getByText('Disabled Button')).toBeDisabled();
    });

    it('has focus styles', () => {
      render(<Button>Focus Button</Button>);
      const button = screen.getByText('Focus Button');
      expect(button).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2');
    });
  });

  // Integration Tests
  describe('integration', () => {
    it('works with form submission', () => {
      const handleSubmit = jest.fn(e => e.preventDefault());
      render(
        <form onSubmit={handleSubmit}>
          <Button type="submit">Submit</Button>
        </form>
      );
      
      fireEvent.click(screen.getByText('Submit'));
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('maintains styles with custom className', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      const button = screen.getByText('Custom Button');
      expect(button).toHaveClass('custom-class');
      expect(button).toHaveClass('inline-flex', 'items-center'); // Base classes should remain
    });
  });
}); 