import { newSpecPage } from '@stencil/core/testing';
import { DyteParticipantVideoDisabled } from '../dyte-participant-video-disabled';

describe('dyte-participant-video-disabled', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DyteParticipantVideoDisabled],
      html: `<dyte-participant-video-disabled></dyte-participant-video-disabled>`,
    });
    expect(page.root).toEqualHtml(`
      <dyte-participant-video-disabled>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dyte-participant-video-disabled>
    `);
  });
});
