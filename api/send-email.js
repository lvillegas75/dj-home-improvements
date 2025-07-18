// Simple test version - no dependencies
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log('🔍 FUNCTION CALLED!');
  console.log('🔍 Method:', req.method);
  console.log('🔍 Body:', req.body);

  if (req.method === 'OPTIONS') {
    console.log('✅ OPTIONS request handled');
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    console.log('✅ POST request received');
    return res.status(200).json({ 
      message: 'Function is working!',
      received: req.body 
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
