import { newSpecPage } from '@stencil/core/testing';
import { CompProvider } from '../comp-provider';

describe('comp-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CompProvider],
      html: `<comp-provider></comp-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <comp-provider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </comp-provider>
    `);
  });
});
