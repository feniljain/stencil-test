import { newE2EPage } from '@stencil/core/testing';

describe('dyte-meeting', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dyte-meeting></dyte-meeting>');

    const element = await page.find('dyte-meeting');
    expect(element).toHaveClass('hydrated');
  });
});
