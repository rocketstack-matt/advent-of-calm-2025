---
id: gateway-to-notification-service
title: Gateway To Notification Service
---

## Details
<div className="table-container">
| Field               | Value                    |
|---------------------|--------------------------|
| **Unique ID**       | gateway-to-notification-service                   |
| **Description**      |  API Gateway routes notification-related admin requests to Notification Service   |
</div>

## Related Nodes
```mermaid
graph TD;
api-gateway -- Connects --> notification-service;

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
                  <b>Authentication</b>
              </td>
              <td>
                  OAuth2
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Authorization</b>
              </td>
              <td>
                  admin-only
                      </td>
          </tr>
          </tbody>
      </table>
  </div>
