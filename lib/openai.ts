// lib/openai.ts
export async function callOpenAI(prompt: string): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('Missing OPENAI_API_KEY in environment');
    }
  
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      }),
    });
  
    if (!res.ok) {
      const err = await res.json();
      console.error('❌ OpenAI API error:', err);
      throw new Error('OpenAI request failed');
    }
  
    const { choices } = await res.json();
    return choices[0]?.message?.content?.trim() || '';
  }
  