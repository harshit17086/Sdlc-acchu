import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

/**
 * @swagger
 * /api/ai/requirements:
 *   post:
 *     summary: Generate software requirements from project description
 *     description: Uses AI to analyze project descriptions and extract structured requirements
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - projectDescription
 *             properties:
 *               projectDescription:
 *                 type: string
 *                 description: The description of the software project
 *     responses:
 *       200:
 *         description: Successfully generated requirements
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/requirements', async (req, res) => {
  try {
    const { projectDescription } = req.body;
    
    if (!projectDescription) {
      return res.status(400).json({ error: 'Project description is required' });
    }

    // Using Hugging Face Inference API (free tier)
    // Updated to use a model that's currently available
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: `Generate a detailed list of software requirements based on the following project description. Format the output as a structured list of functional and non-functional requirements with clear categories:
        
        Project Description: ${projectDescription}`,
        parameters: {
          max_length: 2048,
          temperature: 0.7,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_key'}`
        }
      }
    );

    res.json({ requirements: response.data[0].generated_text });
  } catch (error) {
    console.error('Error generating requirements:', error);
    res.status(500).json({ error: 'Failed to generate requirements' });
  }
});

/**
 * @swagger
 * /api/ai/testcases:
 *   post:
 *     summary: Generate test cases from requirements
 *     description: Uses AI to create test cases based on software requirements
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - requirements
 *             properties:
 *               requirements:
 *                 type: string
 *                 description: The software requirements to generate test cases for
 *               framework:
 *                 type: string
 *                 description: The testing framework to use (e.g., Jest, Cypress, Selenium)
 *     responses:
 *       200:
 *         description: Successfully generated test cases
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/testcases', async (req, res) => {
  try {
    const { requirements, framework = 'Jest' } = req.body;
    
    if (!requirements) {
      return res.status(400).json({ error: 'Requirements are required' });
    }

    // Using Hugging Face Inference API (free tier)
    // Updated to use a model that's currently available
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: `Generate comprehensive test cases for the following software requirements. Format the output in ${framework} format with detailed test descriptions, expected outcomes, and edge cases:
        
        Requirements: ${requirements}`,
        parameters: {
          max_length: 2048,
          temperature: 0.7,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_key'}`
        }
      }
    );

    res.json({ testCases: response.data[0].generated_text });
  } catch (error) {
    console.error('Error generating test cases:', error);
    res.status(500).json({ error: 'Failed to generate test cases' });
  }
});

export default router; 