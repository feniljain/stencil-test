import { newSpecPage } from '@stencil/core/testing';
import { CompConsumer } from '../comp-consumer';

describe('comp-consumer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CompConsumer],
      html: `<comp-consumer></comp-consumer>`,
    });
    expect(page.root).toEqualHtml(`
      <comp-consumer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </comp-consumer>
    `);
  });
});
