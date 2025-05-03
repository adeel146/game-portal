import { render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from './index.tsx';
import '@testing-library/jest-dom';


describe('NavBar Component', () => {
  const mockHandleLogout = jest.fn();

  const navigation = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
  ];

  it('should render the logo and navigation items correctly', () => {
    render(<NavBar logo="/logo.png" logoPosition="left" navigation={navigation} authenticated={false} />);

    // Check if the logo image is rendered
    const logo = screen.getByAltText(/Brand Logo/i);
    expect(logo).toBeInTheDocument();

    // Check if navigation links are rendered
    navigation.forEach((item) => {
      const navLink = screen.getByText(item.label);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute('href', item.url);
    });
  });

  it('should show "LogIn" button if not authenticated', () => {
    render(<NavBar logo="/logo.png" logoPosition="left" navigation={navigation} authenticated={false} />);

    // Check if LogIn button is rendered
    const loginButton = screen.getByText('LogIn');
    expect(loginButton).toBeInTheDocument();
  });

  it('should show "LogOut" button if authenticated', () => {
    render(<NavBar logo="/logo.png" logoPosition="left" navigation={navigation} authenticated={true} />);

    // Check if LogOut button is rendered
    const logoutButton = screen.getByText('LogOut');
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call handleLogout when LogOut button is clicked', () => {
    render(<NavBar logo="/logo.png" logoPosition="left" navigation={navigation} authenticated={true} handleLogout={mockHandleLogout} />);

    // Check if LogOut button is clickable
    const logoutButton = screen.getByText('LogOut');
    fireEvent.click(logoutButton);

    // Verify if handleLogout is called
    expect(mockHandleLogout).toHaveBeenCalled();
  });

  it('should apply correct logo position class', () => {
    render(<NavBar logo="/logo.png" logoPosition="right" navigation={navigation} authenticated={false} />);

    // Check if the class for logo position is applied correctly
    const navBar = screen.getByRole('navigation');
    expect(navBar).toHaveClass('navbar--right');
  });
});
