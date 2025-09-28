#!/usr/bin/env node

/**
 * Simple deployment script for Mala King Hot Pot website
 * This script helps with quick deployments and updates
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Deploying Mala King Hot Pot website...\n');

try {
  // Check if we're in a git repository
  execSync('git status', { stdio: 'ignore' });
  
  // Check for uncommitted changes
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  
  if (status.trim()) {
    console.log('📝 Found uncommitted changes. Committing...');
    
    // Add all changes
    execSync('git add .', { stdio: 'inherit' });
    
    // Create commit with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const commitMessage = `Update website - ${timestamp}`;
    
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    console.log('✅ Changes committed successfully\n');
  } else {
    console.log('✅ No uncommitted changes found\n');
  }
  
  // Push to GitHub (triggers automatic deployment)
  console.log('📤 Pushing to GitHub...');
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Pushed to GitHub successfully\n');
  
  console.log('🎉 Deployment initiated!');
  console.log('📍 Your changes will be live in a few minutes');
  console.log('🔗 Check your Vercel dashboard for deployment status');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
