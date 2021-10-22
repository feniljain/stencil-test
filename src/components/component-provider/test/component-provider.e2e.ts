import { newE2EPage } from '@stencil/core/testing';

describe('component-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-provider></component-provider>');

    const element = await page.find('component-provider');
    expect(element).toHaveClass('hydrated');
  });
});
