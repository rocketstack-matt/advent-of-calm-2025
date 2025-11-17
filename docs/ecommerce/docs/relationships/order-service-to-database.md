---
id: order-service-to-database
title: Order Service To Database
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | order-service-to-database                   |
| **Description**      |  Order Service connects to Order Database to persist and retrieve order data   |
</div>

## Related Nodes
```mermaid
graph TD;
order-service -- Connects --> order-database;

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
                  <b>Connection Pool Size</b>
              </td>
              <td>
                  20
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Connection Timeout</b>
              </td>
              <td>
                  5s
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Sla</b>
              </td>
              <td>
                  &lt; 100ms p95
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Monitoring</b>
              </td>
              <td>
                  true
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
