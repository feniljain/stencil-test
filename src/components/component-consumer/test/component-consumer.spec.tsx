import { newSpecPage } from '@stencil/core/testing';
import { ComponentConsumer } from '../component-consumer';

describe('component-consumer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentConsumer],
      html: `<component-consumer></component-consumer>`,
    });
    expect(page.root).toEqualHtml(`
      <component-consumer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-consumer>
    `);
  });
});
