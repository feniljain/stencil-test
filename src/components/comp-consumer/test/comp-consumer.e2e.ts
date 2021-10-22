import { newE2EPage } from '@stencil/core/testing';

describe('comp-consumer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<comp-consumer></comp-consumer>');

    const element = await page.find('comp-consumer');
    expect(element).toHaveClass('hydrated');
  });
});
