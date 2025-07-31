import { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analysis, setAnalysis] = useState<string>('');
  const [error, setError] = useState<string>('');

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      // parse endpoint
      const parseRes = await axios.post('/api/parse', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const text = parseRes.data.text as string;

      // analyze endpoint
      const analyzeRes = await axios.post('/api/analyze', { text });
      if (!analyzeRes.data.analysis) {
        throw new Error('No analysis received from server');
      }
      setAnalysis(analyzeRes.data.analysis as string);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during upload or analysis.';
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">
      <input
        type="file"
        accept="application/pdf"
        onChange={e => setFile(e.target.files?.[0] ?? null)}
        className="mb-2"
      />
      <button
        onClick={uploadFile}
        disabled={!file || uploading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload and Analyze'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded text-red-700">
          <h2 className="font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}

      {analysis && (
        <div className="mt-4 p-4 bg-white shadow rounded whitespace-pre-wrap text-sm">
          <h2 className="font-bold mb-2">Analysis Result</h2>
          <pre>{analysis}</pre>
        </div>
      )}
    </div>
  );
}
