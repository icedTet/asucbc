# Winners Gallery Guide

This guide explains how to add and manage winners for hackathon events.

## File Structure

- **Component**: `/app/components/WinnersGallery.tsx`
- **Data**: `/app/data/hackathon1-winners.ts`
- **Assets**: `/public/assets/hackathon/winners/` (for logos/images)

## Adding Winners

### 1. Prepare Assets

Add project logos to `/public/assets/hackathon/winners/`:
- Recommended format: PNG with transparent background
- Recommended size: 400x400px or similar square aspect ratio
- Name files descriptively: `project-name-logo.png`

### 2. Update Winners Data

Edit `/app/data/hackathon1-winners.ts` (or create a new file for future hackathons):

```typescript
{
  id: "unique-identifier",
  placement: "🏆 1st Place", // Emoji + placement text
  teamName: "Your Team Name",
  projectName: "Your Project Name",
  logo: "/assets/hackathon/winners/your-logo.png", // Optional
  tagline: "A catchy one-liner about your project",
  description: `
Your project description here. Supports **Markdown**!

**Key Features:**
- Feature 1
- Feature 2
- Feature 3

*Technologies:* React, Claude AI, etc.
  `,
  members: ["Member 1", "Member 2", "Member 3"], // Optional
  links: { // Optional
    github: "https://github.com/username/repo",
    demo: "https://your-demo.vercel.app",
    devpost: "https://devpost.com/software/your-project"
  },
  accentColor: "#FFD700" // Optional custom color
}
```

### 3. Markdown Support

The `description` field supports markdown:
- **Bold**: `**text**`
- *Italic*: `*text*`
- Lists: Use `-` or `*` for bullet points
- Line breaks: Use double newline

### 4. Placement Badges

Common placements:
- `"🏆 1st Place"` - Gold (#FFD700)
- `"🥈 2nd Place"` - Silver (#C0C0C0)
- `"🥉 3rd Place"` - Bronze (#CD7F32)
- `"⛓️ Best Use of [Sponsor]"` - Custom color
- `"🎖️ Honorable Mention"` - Default theme color

## Customization

### Custom Accent Colors

Set `accentColor` to match sponsor branding:
```typescript
accentColor: "#6366f1" // Indigo for sponsor prizes
```

### Team Members

Add an array of team member names:
```typescript
members: ["Alice", "Bob", "Charlie"]
```

### External Links

Provide links to relevant resources:
```typescript
links: {
  github: "https://github.com/...",
  demo: "https://...",
  devpost: "https://devpost.com/..."
}
```

## Integration

To add the winners gallery to a hackathon page:

```typescript
import WinnersGallery from "../components/WinnersGallery";
import { hackathon1Winners } from "../data/hackathon1-winners";

// In your component:
<WinnersGallery
  winners={hackathon1Winners}
  title="HackASU 2025 Winners"
  description="Congratulations to all the incredible teams!"
/>
```

## Tips

1. **Write Engaging Descriptions**: Focus on the "why" and impact, not just features
2. **Use Markdown**: Format for readability with bold headings and lists
3. **Add Visuals**: Logos make cards more recognizable and professional
4. **Link Everything**: Make it easy for visitors to explore projects
5. **Highlight Tech**: Mention key technologies used
6. **Tell a Story**: What problem does it solve? Why does it matter?

## Example Entry

See `/app/data/hackathon1-winners.ts` for complete examples with various configurations.
