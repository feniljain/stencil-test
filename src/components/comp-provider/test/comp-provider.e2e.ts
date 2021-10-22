import { newE2EPage } from '@stencil/core/testing';

describe('comp-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-provider></comp-provider>');

    const element = await page.find('comp-provider');
    expect(element).toHaveClass('hydrated');
  });
});
