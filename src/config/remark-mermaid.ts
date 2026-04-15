import { visit } from 'unist-util-visit';

/**
 * Remark plugin: convert ```mermaid code fences into <Mermaid chart="..." />.
 * Runs before rehype-pretty-code so Shiki doesn't touch mermaid blocks.
 */
export function remarkMermaid() {
  return (tree: any) => {
    visit(tree, 'code', (node: any, index: any, parent: any) => {
      if (node.lang !== 'mermaid' || typeof index !== 'number' || !parent)
        return;

      const chart = String(node.value ?? '');

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'Mermaid',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'chart',
            value: chart,
          },
        ],
        children: [],
      };
    });
  };
}
