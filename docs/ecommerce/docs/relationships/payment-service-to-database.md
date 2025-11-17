---
id: payment-service-to-database
title: Payment Service To Database
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | payment-service-to-database                   |
| **Description**      |  Payment Service connects to Payment Database for transaction logging and audit trails   |
</div>

## Related Nodes
```mermaid
graph TD;
payment-service -- Connects --> payment-database;

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
                  10
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Connection Timeout</b>
              </td>
              <td>
                  3s
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Encryption</b>
              </td>
              <td>
                  TLS 1.3
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Audit Logging</b>
              </td>
              <td>
                  mandatory
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Sla</b>
              </td>
              <td>
                  &lt; 50ms p95
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
