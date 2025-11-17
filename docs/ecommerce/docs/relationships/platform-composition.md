---
id: platform-composition
title: Platform Composition
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | platform-composition                   |
| **Description**      |  E-Commerce Platform system is composed of all microservices and supporting infrastructure   |
</div>

## Related Nodes
```mermaid
graph TD;
ecommerce-platform -- Composed Of --> api-gateway;
ecommerce-platform -- Composed Of --> order-service;
ecommerce-platform -- Composed Of --> inventory-service;
ecommerce-platform -- Composed Of --> payment-service;
ecommerce-platform -- Composed Of --> notification-service;
ecommerce-platform -- Composed Of --> order-database;
ecommerce-platform -- Composed Of --> inventory-database;
ecommerce-platform -- Composed Of --> payment-database;

```

## Controls
    _No controls defined._

## Metadata
  _No Metadata defined._
