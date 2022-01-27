import { AllSelection } from 'prosemirror-state'
import { RawCommands } from '../types'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    selectAll: {
      /**
       * Select the whole document.
       */
      selectAll: () => ReturnType,
    }
  }
}

export const selectAll: RawCommands['selectAll'] = () => ({ tr, dispatch }) => {
  if (dispatch) {
    tr.setSelection(new AllSelection(tr.doc))
    dispatch(tr)
  }

  return true
}
