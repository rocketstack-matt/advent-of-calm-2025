---
id: gateway-to-inventory-service
title: Gateway To Inventory Service
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | gateway-to-inventory-service                   |
| **Description**      |  API Gateway routes inventory-related requests to the Inventory Service   |
</div>

## Related Nodes
```mermaid
graph TD;
api-gateway -- Connects --> inventory-service;

```

## Controls
    _No controls defined._

## Metadata
  <div className="table-container">
      <table>
          <thead>
          <tr>
              <th>Key</th>
              <th>Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>
                  <b>Load Balancing</b>
              </td>
              <td>
                  round-robin
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Timeout</b>
              </td>
              <td>
                  30s
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Cache Strategy</b>
              </td>
              <td>
                  redis
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
