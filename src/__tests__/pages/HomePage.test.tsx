import { render } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />);
  });
});
