import { newSpecPage } from '@stencil/core/testing';
import { DyteMeeting } from '../dyte-meeting';

describe('dyte-meeting', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DyteMeeting],
      html: `<dyte-meeting></dyte-meeting>`,
    });
    expect(page.root).toEqualHtml(`
      <dyte-meeting>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dyte-meeting>
    `);
  });
});
