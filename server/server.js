import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? false 
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, projectType, budget, message } = req.body;

  // Validation
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name is required (min 2 characters)');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
  if (!message || message.trim().length < 10) errors.push('Message is required (min 10 characters)');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Log the submission (in production, integrate with email service or database)
  console.log('📧 New Contact Form Submission:');
  console.log('─'.repeat(40));
  console.log(`Name:         ${name}`);
  console.log(`Email:        ${email}`);
  console.log(`Phone:        ${phone || 'Not provided'}`);
  console.log(`Company:      ${company || 'Not provided'}`);
  console.log(`Project Type: ${projectType || 'Not specified'}`);
  console.log(`Budget:       ${budget || 'Not specified'}`);
  console.log(`Message:      ${message}`);
  console.log('─'.repeat(40));

  res.status(200).json({ 
    success: true, 
    message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.' 
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 INNOVERSE Server running on port ${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   API: http://localhost:${PORT}/api\n`);
});
