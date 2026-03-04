# Hackathon Winners Assets

This directory stores logos and images for hackathon winner projects.

## File Guidelines

### Logos
- **Format**: PNG (with transparent background preferred) or SVG
- **Size**: 400x400px recommended (square aspect ratio)
- **Max file size**: Keep under 500KB for optimal loading
- **Naming**: Use descriptive names like `project-name-logo.png`

### Examples
```
etherfi-analytics-logo.png
polymarket-ai-assistant-logo.png
claude-tutor-logo.png
```

## Adding New Logos

1. Save your logo to this directory
2. Reference it in `/app/data/hackathon1-winners.ts`:
   ```typescript
   logo: "/assets/hackathon/winners/your-logo.png"
   ```

## Optimization Tips

- Compress PNG files using tools like TinyPNG
- Use SVG for simple logos (scales perfectly)
- Remove unnecessary metadata
- Ensure transparency works on both light and dark backgrounds

## Placeholder

If you don't have a logo, you can omit the `logo` field in the winner data and the project name will be displayed instead.
