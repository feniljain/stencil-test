import { newSpecPage } from '@stencil/core/testing';
import { DyteParticipantVideo } from '../dyte-participant-video';

describe('dyte-participant-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DyteParticipantVideo],
      html: `<dyte-participant-video></dyte-participant-video>`,
    });
    expect(page.root).toEqualHtml(`
      <dyte-participant-video>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dyte-participant-video>
    `);
  });
});
