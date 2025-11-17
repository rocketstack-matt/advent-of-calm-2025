# CALM Patterns

This directory contains CALM architecture patterns - reusable templates that provide both **generation** and **validation** capabilities for consistent architecture modeling.

## The Dual Superpower 🦸‍♂️

CALM patterns have a unique dual superpower that sets them apart from simple templates:

### 1. **Generation Power** 🏗️
- Generate concrete architectures from patterns using `calm generate`
- Provides guided choices through `anyOf`/`oneOf` constructs
- Ensures all generated architectures follow the pattern's constraints

### 2. **Validation Power** ✅
- Validate existing architectures against pattern constraints
- Enforce architectural governance and standards
- Catch deviations from approved patterns early

This dual capability means patterns serve as both **creative templates** and **quality gates**.

## Web Application Pattern

The `web-app-pattern.json` defines a standard 3-tier web application architecture.

### Using for Generation

Generate a new web application architecture:

```bash
# Generate from pattern
calm generate --pattern patterns/web-app-pattern.json --output my-webapp.json

# The generated architecture will have:
# - Exactly 3 nodes with fixed unique-ids, names, and types
# - Exactly 2 relationships with proper protocols
# - All constraints automatically enforced
```

### Using for Validation

Validate an existing architecture against the pattern:

```bash
# Validate architecture against pattern
calm validate --pattern patterns/web-app-pattern.json --architecture my-webapp.json

# ✅ PASS: Architecture conforms to web app pattern
# ❌ FAIL: Architecture violates pattern constraints
```

## What the Web App Pattern Enforces

### **Node Constraints**
- **Exactly 3 nodes** (no more, no less)
- **Fixed unique-ids**: `web-frontend`, `api-service`, `app-database`
- **Fixed node types**: `webclient`, `service`, `database`
- **Consistent naming**: "Web Frontend", "API Service", "Application Database"

### **Relationship Constraints**
- **Exactly 2 relationships** connecting the 3 tiers
- **Frontend → API**: HTTPS protocol, proper connection structure
- **API → Database**: JDBC protocol, proper connection structure
- **Required descriptions** for all relationships

### **Architectural Governance**
- **No extra nodes** or relationships allowed
- **No missing connections** in the 3-tier flow
- **Protocol standardization** (HTTPS for web, JDBC for database)
- **Naming consistency** across all implementations

## Why These Constraints Matter

### **Consistency** 🎯
Every web application following this pattern will have the same structure, making them easier to understand, maintain, and operate.

### **Security** 🔒
Enforced protocols (HTTPS, JDBC) ensure secure communication channels are used by default.

### **Operational Excellence** 🚀
Standardized architectures enable common tooling, monitoring, and deployment patterns.

### **Team Alignment** 👥
New team members instantly understand any web app that follows the pattern.

## Time Savings Example

### **Without Patterns** ⏱️
```
Developer A creates webapp → 2 hours designing + 1 hour documenting
Developer B creates webapp → 2 hours designing + 1 hour documenting  
Developer C creates webapp → 2 hours designing + 1 hour documenting
Architecture review finds inconsistencies → 3 hours fixing
Total: 12 hours
```

### **With Patterns** ⚡
```
Create pattern once → 3 hours
Developer A: calm generate → 5 minutes
Developer B: calm generate → 5 minutes  
Developer C: calm generate → 5 minutes
All architectures automatically consistent → 0 hours fixing
Total: 3.25 hours (75% time savings!)
```

## Pattern Development Best Practices

### **Start Specific** 🎯
Begin with concrete, well-tested architecture examples before abstracting into patterns.

### **Use Constraints Wisely** ⚖️
- `const` for values that should never change
- `anyOf`/`oneOf` for approved variations
- `minItems`/`maxItems` for size constraints

### **Document Intent** 📝
Include clear descriptions explaining *why* constraints exist, not just *what* they are.

### **Test Thoroughly** 🧪
```bash
# Validate the pattern itself
calm validate --pattern web-app-pattern.json

# Generate test architectures
calm generate --pattern web-app-pattern.json --output test.json

# Validate generated architectures
calm validate --architecture test.json
```

### **Version Carefully** 📦
Use semantic versioning in pattern `$id` URLs to manage breaking changes.

## Available Patterns

- **`web-app-pattern.json`** - Standard 3-tier web application
- **`rest-api-interface.json`** - REST API interface schema

## Creating New Patterns

1. Start with a proven architecture example
2. Identify the invariant constraints (what must never change)
3. Identify the variation points (what should be configurable)
4. Use JSON schema constructs to encode both
5. Test generation and validation thoroughly

Remember: Patterns are living governance tools. They should evolve as your architectural standards mature, but changes should be versioned and communicated clearly to maintain team alignment.
