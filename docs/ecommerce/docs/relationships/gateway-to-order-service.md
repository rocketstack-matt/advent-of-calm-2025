---
id: gateway-to-order-service
title: Gateway To Order Service
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | gateway-to-order-service                   |
| **Description**      |  API Gateway routes order-related requests to the Order Service   |
</div>

## Related Nodes
```mermaid
graph TD;
api-gateway -- Connects --> order-service;

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
                  <b>Retry Policy</b>
              </td>
              <td>
                  exponential-backoff
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
