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
      const err = await res.json().catch(() => ({ error: 'Unknown error' }));
      console.error('❌ OpenAI API error:', err);
      throw new Error(`OpenAI request failed: ${res.status} ${res.statusText}`);
    }
  
    const data = await res.json();
    
    // Validate response structure
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      console.error('❌ Invalid OpenAI response structure:', data);
      throw new Error('Invalid response structure from OpenAI API');
    }
    
    const content = data.choices[0]?.message?.content;
    if (typeof content !== 'string') {
      console.error('❌ Invalid message content in OpenAI response:', data.choices[0]);
      throw new Error('Invalid message content in OpenAI response');
    }
    
    return content.trim();
  }
  