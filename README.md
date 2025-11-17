# My Advent of CALM Journey

This repository tracks my 24-day journey learning the Common Architecture Language Model (CALM).

## Progress

- [x] Day 1: Install CALM CLI and Initialize Repository
- [x] Day 2: Create Your First Node
- [x] Day 3: Connect Nodes with Relationships
- [x] Day 4: Install CALM VSCode Extension
- [x] Day 5: Add Interfaces to Nodes
- [x] Day 6: Document with Metadata
- [x] Day 7: Build Complete E-Commerce Architecture

## Tools

### CALM CLI (installed Day 1)

The CALM command-line interface is the primary tool for working with CALM architectures.

**What it's used for:**

- **Generation**: Create architectures from patterns and templates
- **Validation**: Verify architectures against CALM 1.0 schema
- **Templates**: Scaffold new architecture files and patterns

**Basic commands:**

```bash
# Validate an architecture file
calm validate -a my-architecture.json

# Generate architecture from pattern
calm generate --pattern pattern-file.json

# Create new architecture from template
calm init --template basic-architecture

# Generate documentation
calm docify --architecture my-architecture.json --output ./docs
```

### CALM VSCode Extension (installed Day 4)

**Marketplace Link**: [FINOS CALM VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=FINOS.calm-vscode-plugin)

**What it provides:**

- **Visualization**: Interactive architecture diagrams and node graphs
- **Tree Navigation**: Hierarchical view of nodes, relationships, and flows
- **Live Preview**: Real-time visualization updates as you edit CALM files
- **Schema Validation**: Inline error detection and validation feedback

**Keyboard Shortcut**: `Ctrl+Shift+C` / `Cmd+Shift+C` to open CALM preview

### How These Tools Work Together

The CLI and VSCode extension complement each other perfectly:

- **CLI for Validation**: Run `calm validate` to ensure schema compliance before committing
- **Extension for Visualization**: Use the preview pane to see your architecture visually
- **Combined Workflow**: Edit JSON → Preview in VSCode → Validate with CLI → Iterate

This dual-tool approach provides both the rigor of command-line validation and the intuitive understanding that comes from visual architecture diagrams.

## Architectures

This directory will contain CALM architecture files documenting systems.

## Patterns

This directory will contain CALM patterns for architectural governance.

## Docs

Generated documentation from CALM models.
