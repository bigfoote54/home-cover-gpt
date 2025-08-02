import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from '../../../lib/prisma'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const session = await getSession({ req })
    const { id } = req.query

    if (!session?.user?.id) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const analysis = await prisma.analysis.findUnique({
      where: {
        id: id as string,
        userId: session.user.id,
      },
    })

    if (!analysis) {
      return res.status(404).json({ message: 'Analysis not found' })
    }

    // Parse the result JSON
    const result = JSON.parse(analysis.resultJson)

    // Create PDF content
    const pdf = new jsPDF()
    
    // Add title
    pdf.setFontSize(20)
    pdf.text('Home Cover Analysis Report', 20, 20)
    
    // Add date
    pdf.setFontSize(12)
    pdf.text(`Generated on: ${new Date(analysis.createdAt).toLocaleDateString()}`, 20, 35)
    
    // Add analysis ID
    pdf.text(`Analysis ID: ${analysis.id}`, 20, 45)
    
    // Add results
    pdf.setFontSize(14)
    pdf.text('Analysis Results:', 20, 60)
    
    pdf.setFontSize(12)
    let yPosition = 75
    
    // Add key findings (assuming result has a structure)
    if (result.summary) {
      pdf.text('Summary:', 20, yPosition)
      yPosition += 10
      pdf.setFontSize(10)
      const summaryLines = pdf.splitTextToSize(result.summary, 170)
      pdf.text(summaryLines, 20, yPosition)
      yPosition += summaryLines.length * 5 + 10
    }
    
    if (result.recommendations) {
      pdf.setFontSize(12)
      pdf.text('Recommendations:', 20, yPosition)
      yPosition += 10
      pdf.setFontSize(10)
      const recLines = pdf.splitTextToSize(result.recommendations, 170)
      pdf.text(recLines, 20, yPosition)
    }

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename=analysis-${id}.pdf`)
    
    // Send PDF
    res.status(200).send(pdf.output('blob'))
  } catch (error) {
    console.error('Error generating PDF:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}