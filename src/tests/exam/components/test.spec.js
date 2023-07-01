import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';

test.skip('should show login form', () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});