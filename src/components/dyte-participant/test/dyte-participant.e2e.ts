import { newE2EPage } from '@stencil/core/testing';

describe('dyte-participant', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dyte-participant></dyte-participant>');

    const element = await page.find('dyte-participant');
    expect(element).toHaveClass('hydrated');
  });
});
