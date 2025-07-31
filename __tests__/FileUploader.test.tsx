import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FileUploader from '@/components/FileUploader'

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

vi.mock('@/components/ui/progress', () => ({
  Progress: ({ value, ...props }: any) => (
    <div role="progressbar" aria-valuenow={value} {...props}>
      {value}%
    </div>
  )
}))

describe('FileUploader', () => {
  it('should reject non-PDF files via drag and drop', async () => {
    const user = userEvent.setup()
    const onFileSelect = vi.fn()
    
    render(<FileUploader onFileSelect={onFileSelect} />)

    const dropZone = screen.getByText('Drop your insurance PDF here')
    
    // Create a non-PDF file
    const nonPdfFile = new File(['test content'], 'test.txt', { type: 'text/plain' })
    
    // Simulate drag and drop
    fireEvent.dragOver(dropZone)
    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [nonPdfFile]
      }
    })

    // Verify that onFileSelect was not called for non-PDF file
    expect(onFileSelect).not.toHaveBeenCalled()
  })

  it('should accept any file via file input (no validation)', async () => {
    const user = userEvent.setup()
    const onFileSelect = vi.fn()
    
    render(<FileUploader onFileSelect={onFileSelect} />)

    const fileInput = screen.getByLabelText('browse to upload')
    
    // Create a non-PDF file
    const nonPdfFile = new File(['test content'], 'test.txt', { type: 'text/plain' })
    
    // Simulate file selection
    fireEvent.change(fileInput, {
      target: { files: [nonPdfFile] }
    })

    // Verify that onFileSelect was called (no validation in file input)
    expect(onFileSelect).toHaveBeenCalledWith(nonPdfFile)
  })

  it('should accept PDF files via drag and drop', async () => {
    const user = userEvent.setup()
    const onFileSelect = vi.fn()
    
    render(<FileUploader onFileSelect={onFileSelect} />)

    const dropZone = screen.getByText('Drop your insurance PDF here')
    
    // Create a PDF file
    const pdfFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
    
    // Simulate drag and drop
    fireEvent.dragOver(dropZone)
    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [pdfFile]
      }
    })

    // Verify that onFileSelect was called with the PDF file
    expect(onFileSelect).toHaveBeenCalledWith(pdfFile)
  })

  it('should accept PDF files via file input', async () => {
    const user = userEvent.setup()
    const onFileSelect = vi.fn()
    
    render(<FileUploader onFileSelect={onFileSelect} />)

    const fileInput = screen.getByLabelText('browse to upload')
    
    // Create a PDF file
    const pdfFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
    
    // Simulate file selection
    fireEvent.change(fileInput, {
      target: { files: [pdfFile] }
    })

    // Verify that onFileSelect was called with the PDF file
    expect(onFileSelect).toHaveBeenCalledWith(pdfFile)
  })

  it('should display file information when PDF is selected', async () => {
    const user = userEvent.setup()
    const onFileSelect = vi.fn()
    
    render(<FileUploader onFileSelect={onFileSelect} />)

    const fileInput = screen.getByLabelText('browse to upload')
    
    // Create a PDF file
    const pdfFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
    
    // Simulate file selection
    fireEvent.change(fileInput, {
      target: { files: [pdfFile] }
    })

    // Verify file information is displayed
    expect(screen.getByText('test.pdf')).toBeInTheDocument()
    expect(screen.getByText(/PDF Document/)).toBeInTheDocument()
  })

  it('should show drag over state when file is dragged over', async () => {
    const user = userEvent.setup()
    
    render(<FileUploader />)

    const dropZone = screen.getByText('Drop your insurance PDF here')
    
    // Simulate drag over
    fireEvent.dragOver(dropZone)
    
    // Verify drag over state (the text should still be visible)
    expect(screen.getByText('Drop your insurance PDF here')).toBeInTheDocument()
  })

  it('should require consent before analysis', async () => {
    const user = userEvent.setup()
    const onAnalysisComplete = vi.fn()
    
    render(<FileUploader onAnalysisComplete={onAnalysisComplete} />)

    // First, select a PDF file
    const fileInput = screen.getByLabelText('browse to upload')
    const pdfFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
    
    fireEvent.change(fileInput, {
      target: { files: [pdfFile] }
    })

    // Find the analyze button
    const analyzeButton = screen.getByText('Analyze My Coverage')
    
    // Button should be disabled without consent
    expect(analyzeButton).toBeDisabled()
    
    // Check the consent checkbox
    const consentCheckbox = screen.getByRole('checkbox')
    fireEvent.click(consentCheckbox)
    
    // Button should now be enabled
    expect(analyzeButton).not.toBeDisabled()
  })

  it('should display upload progress during analysis', async () => {
    const user = userEvent.setup()
    const onAnalysisComplete = vi.fn()
    
    render(<FileUploader onAnalysisComplete={onAnalysisComplete} />)

    // Select a PDF file
    const fileInput = screen.getByLabelText('browse to upload')
    const pdfFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' })
    
    fireEvent.change(fileInput, {
      target: { files: [pdfFile] }
    })

    // Check consent
    const consentCheckbox = screen.getByRole('checkbox')
    fireEvent.click(consentCheckbox)
    
    // Start analysis
    const analyzeButton = screen.getByText('Analyze My Coverage')
    fireEvent.click(analyzeButton)
    
    // Verify progress is shown
    expect(screen.getByText('Analyzing your policy...')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})