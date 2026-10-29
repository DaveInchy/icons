# @daveinchy/icons

Scalable, customizable, type-safe SVG icons library for React and TypeScript.

## Installation

```bash
npm install @daveinchy/icons
# or
pnpm add @daveinchy/icons
# or
bun add @daveinchy/icons
```

## Quick Start

```tsx
import Icons from '@daveinchy/icons'

export function App() {
  return (
    <div>
      {/* Basic usage */}
      <Icons.Symbols.Wrench iconSize="24" strokeColor="currentColor" />

      {/* Dark / Light theme icons */}
      <Icons.Theme.Dark iconSize="20" />
      <Icons.Theme.Light iconSize="20" />

      {/* Devices & Actions */}
      <Icons.Devices.Computer iconSize="32" strokeWidth={2} />
      <Icons.Actions.Refresh iconSize="20" />
    </div>
  )
}
```

## Available Categories

- **Theme**: `Dark`, `Light`
- **Mood**: `Happy`, `Sad`
- **Symbols**: `Wrench`, `Screwdriver`, `Variable`, `Sparkles`, `Star`, `Puzzle`, `Cog`, `Bolt`, `Briefcase`, `Tag`, and more
- **Media**: `Play`, `Pause`, `Stop`, `Volume`, `Mic`, `Camera`, `Video`
- **Devices**: `Computer`, `Television`, `Server`, `Tablet`, `Phone`, `Calculator`
- **Actions**: `Refresh`, `Write`, `Edit`, `Search`, `Settings`, `Share`, `Favorite`, `Like`, `Trash`
- **Chat**: `Text`, `NoText`, `LeftDots`, `LeftRight`
- **IoT**: `CPU`, `Terminal`, `Code`, `Cloud`, `Database`, `Network`, `QR`
- **Charts**: `Bars`, `Pie`, `Table`, `Trending`, `Bullets`
- **Arrows**: `Up`, `Down`, `Left`, `Right`, `ChevUp`, `ChevDown`, `In`, `Out`
- **Signs**: `Magnify`, `Plus`, `Min`, `Close`, `Warning`, `Secure`

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconSize` | `string \| number` | `"8"` | Width in px (`height: auto`) |
| `strokeColor` | `string` | `"currentColor"` | SVG stroke color |
| `strokeWidth` | `number` | `1.5` | SVG stroke width |
| `fillColor` | `string` | `"none"` | SVG fill color |

## License
MIT © [DaveInchy](https://github.com/DaveInchy)
