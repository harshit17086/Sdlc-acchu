import { Router } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

/**
 * @swagger
 * /api/ai-tools/er-diagram:
 *   post:
 *     summary: Generate ER diagram from database description
 *     description: Uses AI to create Entity-Relationship diagrams based on database descriptions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - databaseDescription
 *             properties:
 *               databaseDescription:
 *                 type: string
 *                 description: Description of the database structure and relationships
 *     responses:
 *       200:
 *         description: Successfully generated ER diagram
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/er-diagram', async (req, res) => {
  try {
    const { databaseDescription } = req.body;
    
    if (!databaseDescription) {
      return res.status(400).json({ error: 'Database description is required' });
    }

    // Using Hugging Face Inference API (free tier)
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: `Generate Entity-Relationship Diagram (ERD) in PlantUML syntax based on the following database description. Include all entities, attributes (with data types), primary keys, foreign keys, and relationships with proper cardinality:

        Database Description: ${databaseDescription}
        
        Return ONLY the PlantUML code without any explanations. The code should start with @startuml and end with @enduml.`,
        parameters: {
          max_length: 2048,
          temperature: 0.3,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_key'}`
        }
      }
    );

    // Extract PlantUML code
    let plantUmlCode = response.data[0].generated_text;
    
    // Try to extract just the PlantUML part if there's extra text
    const startumlMatch = plantUmlCode.match(/@startuml[\s\S]*@enduml/);
    if (startumlMatch) {
      plantUmlCode = startumlMatch[0];
    }

    // Generate URL for PlantUML diagram using public PlantUML server
    const encodedUml = encodeURIComponent(plantUmlCode);
    const plantUmlServerUrl = `https://www.plantuml.com/plantuml/png/~h${encodedUml}`;

    res.json({ 
      plantUmlCode,
      diagramUrl: plantUmlServerUrl,
      plantUmlServerUrl: 'https://www.plantuml.com/plantuml/uml/' // For manual use if needed
    });
  } catch (error) {
    console.error('Error generating ER diagram:', error);
    res.status(500).json({ error: 'Failed to generate ER diagram' });
  }
});

/**
 * @swagger
 * /api/ai-tools/database-schema:
 *   post:
 *     summary: Generate database schema SQL from description
 *     description: Uses AI to create SQL database schema based on description
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - databaseDescription
 *             properties:
 *               databaseDescription:
 *                 type: string
 *                 description: Description of the database structure and relationships
 *               dbType:
 *                 type: string
 *                 description: Database type (MySQL, PostgreSQL, SQLite, etc.)
 *     responses:
 *       200:
 *         description: Successfully generated database schema
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/database-schema', async (req, res) => {
  try {
    const { databaseDescription, dbType = 'MySQL' } = req.body;
    
    if (!databaseDescription) {
      return res.status(400).json({ error: 'Database description is required' });
    }

    // Using Hugging Face Inference API (free tier)
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
      {
        inputs: `Generate ${dbType} database schema SQL code based on the following description. Include CREATE TABLE statements with appropriate data types, primary keys, foreign keys, and constraints:

        Database Description: ${databaseDescription}
        
        Return ONLY the SQL code without any explanations.`,
        parameters: {
          max_length: 2048,
          temperature: 0.3,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY || 'hf_dummy_key'}`
        }
      }
    );

    res.json({ 
      sqlSchema: response.data[0].generated_text
    });
  } catch (error) {
    console.error('Error generating database schema:', error);
    res.status(500).json({ error: 'Failed to generate database schema' });
  }
});

export default router; 