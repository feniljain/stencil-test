import { newSpecPage } from '@stencil/core/testing';
import { DyteParticipant } from '../dyte-participant';

describe('dyte-participant', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DyteParticipant],
      html: `<dyte-participant></dyte-participant>`,
    });
    expect(page.root).toEqualHtml(`
      <dyte-participant>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dyte-participant>
    `);
  });
});
