'use server';
/**
 * @fileOverview A Genkit flow for demonstrating real-time AI content generation.
 *
 * - demonstrateAIOutput - A function that generates various content types based on a given command.
 * - AIOutputDemonstratorInput - The input type for the demonstrateAIOutput function.
 * - AIOutputDemonstratorOutput - The return type for the demonstrateAIOutput function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIOutputDemonstratorInputSchema = z.object({
  command: z.string().describe('The AI command or prompt to generate content.'),
});
export type AIOutputDemonstratorInput = z.infer<typeof AIOutputDemonstratorInputSchema>;

const AIOutputDemonstratorOutputSchema = z.object({
  generatedContent: z.string().describe('The AI-generated content based on the command.'),
});
export type AIOutputDemonstratorOutput = z.infer<typeof AIOutputDemonstratorOutputSchema>;

export async function demonstrateAIOutput(input: AIOutputDemonstratorInput): Promise<AIOutputDemonstratorOutput> {
  return aiOutputDemonstratorFlow(input);
}

const aiOutputDemonstratorPrompt = ai.definePrompt({
  name: 'aiOutputDemonstratorPrompt',
  input: {schema: AIOutputDemonstratorInputSchema},
  output: {schema: AIOutputDemonstratorOutputSchema},
  prompt: `You are an AI content generation assistant. Your task is to execute the following command and generate creative, professional, and relevant content.\n\nCommand: {{{command}}}\n\nPlease provide the generated content as a complete, ready-to-use output.`,
});

const aiOutputDemonstratorFlow = ai.defineFlow(
  {
    name: 'aiOutputDemonstratorFlow',
    inputSchema: AIOutputDemonstratorInputSchema,
    outputSchema: AIOutputDemonstratorOutputSchema,
  },
  async input => {
    const {output} = await aiOutputDemonstratorPrompt(input);
    if (!output) {
      throw new Error('Failed to generate AI output.');
    }
    return output;
  }
);
