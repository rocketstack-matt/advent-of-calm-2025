---
id: order-service-to-payment-service
title: Order Service To Payment Service
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | order-service-to-payment-service                   |
| **Description**      |  Order Service connects to Payment Service to process payments for confirmed orders   |
</div>

## Related Nodes
```mermaid
graph TD;
order-service -- Connects --> payment-service;

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
                  <b>Circuit Breaker</b>
              </td>
              <td>
                  true
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Timeout</b>
              </td>
              <td>
                  10s
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Retry Attempts</b>
              </td>
              <td>
                  3
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Sla</b>
              </td>
              <td>
                  &lt; 2s p95
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
