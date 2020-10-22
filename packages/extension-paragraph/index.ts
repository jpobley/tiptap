import { createNode } from '@tiptap/core'
// import ParagraphComponent from './paragraph.vue'

// export type ParagraphCommand = () => Command

// declare module '@tiptap/core/src/Editor' {
//   interface Commands {
//     paragraph: ParagraphCommand,
//   }
// }

export default createNode({
  name: 'paragraph',

  group: 'block',

  content: 'inline*',

  addGlobalAttributes() {
    return [
      {
        types: ['paragraph'],
        attributes: {
          align: {
            default: 'right',
            renderHTML: attributes => ({
              class: 'global',
              style: `text-align: ${attributes.align}`,
            }),
          },
        },
      },
    ]
  },

  addAttributes() {
    return {
      id: {
        default: '123',
        rendered: true,
        renderHTML: attributes => ({
          class: `foo-${attributes.id}`,
          id: 'foo',
        }),
      },
    }
  },

  parseHTML() {
    return [
      { tag: 'p' },
    ]
  },

  renderHTML({ attributes }) {
    return ['p', attributes, 0]
  },

  addCommands() {
    return {
      paragraph: () => ({ commands }) => {
        return commands.toggleBlockType('paragraph', 'paragraph')
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-0': () => this.editor.paragraph(),
    }
  },
})