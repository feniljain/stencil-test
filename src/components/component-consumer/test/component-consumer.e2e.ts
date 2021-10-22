import { newE2EPage } from '@stencil/core/testing';

describe('component-consumer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-consumer></component-consumer>');

    const element = await page.find('component-consumer');
    expect(element).toHaveClass('hydrated');
  });
});
