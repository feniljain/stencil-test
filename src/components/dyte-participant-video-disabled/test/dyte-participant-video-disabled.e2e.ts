import { newE2EPage } from '@stencil/core/testing';

describe('dyte-participant-video-disabled', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dyte-participant-video-disabled></dyte-participant-video-disabled>');

    const element = await page.find('dyte-participant-video-disabled');
    expect(element).toHaveClass('hydrated');
  });
});
