---
id: ecommerce-platform
title: E-Commerce Platform
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | ecommerce-platform                   |
| **Node Type**       | system             |
| **Name**            | E-Commerce Platform                 |
| **Description**     | Complete e-commerce order processing system containing all microservices and supporting infrastructure          |

</div>

## Interfaces
    _No interfaces defined._


## Related Nodes
```mermaid
graph TD;
ecommerce-platform[ecommerce-platform]:::highlight;
ecommerce-platform -- Composed Of --> api-gateway;
ecommerce-platform -- Composed Of --> order-service;
ecommerce-platform -- Composed Of --> inventory-service;
ecommerce-platform -- Composed Of --> payment-service;
ecommerce-platform -- Composed Of --> notification-service;
ecommerce-platform -- Composed Of --> order-database;
ecommerce-platform -- Composed Of --> inventory-database;
ecommerce-platform -- Composed Of --> payment-database;
classDef highlight fill:#f2bbae;

```
## Controls
    _No controls defined._

## Metadata
  _No Metadata defined._
