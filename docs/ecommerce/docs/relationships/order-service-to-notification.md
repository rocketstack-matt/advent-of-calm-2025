---
id: order-service-to-notification
title: Order Service To Notification
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | order-service-to-notification                   |
| **Description**      |  Order Service connects to Notification Service to send order confirmations and updates   |
</div>

## Related Nodes
```mermaid
graph TD;
order-service -- Connects --> notification-service;

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
                  <b>Async Pattern</b>
              </td>
              <td>
                  fire-and-forget
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
          <tr>
              <td>
                  <b>Timeout</b>
              </td>
              <td>
                  5s
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
