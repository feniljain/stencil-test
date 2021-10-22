import { newE2EPage } from '@stencil/core/testing';

describe('dyte-participant-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dyte-participant-video></dyte-participant-video>');

    const element = await page.find('dyte-participant-video');
    expect(element).toHaveClass('hydrated');
  });
});
