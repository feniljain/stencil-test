import { newSpecPage } from '@stencil/core/testing';
import { ComponentProvider } from '../component-provider';

describe('component-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComponentProvider],
      html: `<component-provider></component-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <component-provider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-provider>
    `);
  });
});
