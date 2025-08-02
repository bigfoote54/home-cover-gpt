import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import FileUploader from '../components/FileUploader'

// Mock the UI components
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, disabled, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}))

vi.mock('@/components/ui/card', () => ({
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardContent: ({ children, ...props }: any) => <div {...props}>{children}</div>
}))

vi.mock('@/components/ui/checkbox', () => ({
  Checkbox: ({ checked, onCheckedChange, ...props }: any) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      {...props}
    />
  )
}))

describe('FileUploader', () => {
  it('disables analyze for non-PDF', () => {
    const onAnalyze = vi.fn()
    const { getByTestId } = render(<FileUploader onAnalyze={onAnalyze} />)
    const input = getByTestId('file-input') as HTMLInputElement
    fireEvent.change(input, { target: { files: [new File([], 'foo.txt', { type:'text/plain' })] } })
    expect(getByTestId('analyze-button')).toBeDisabled()
  })
})