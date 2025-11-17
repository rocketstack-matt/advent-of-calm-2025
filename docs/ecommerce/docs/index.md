---
id: index
title: Welcome to CALM Documentation
sidebar_position: 1
slug: /
---

# Welcome to CALM Documentation

This documentation is generated from the **CALM Architecture-as-Code** model.

## High Level Architecture
```mermaid
C4Deployment

    Deployment_Node(deployment, "Architecture", ""){
        Person(customer, "Customer", "End customer who places orders and interacts with the e-commerce platform")
        Person(admin, "Admin", "Administrative user who manages the platform, inventory, and orders")
        Deployment_Node(ecommerce-platform, "E-Commerce Platform", "Complete e-commerce order processing system containing all microservices and supporting infrastructure"){
            Container(api-gateway, "API Gateway", "", "Central entry point that routes requests to appropriate microservices and handles authentication")
            Container(order-service, "Order Service", "", "Microservice responsible for managing order lifecycle, processing new orders, and tracking order status")
            Container(inventory-service, "Inventory Service", "", "Microservice that manages product inventory levels, stock availability, and inventory updates")
            Container(payment-service, "Payment Service", "", "Microservice that handles payment processing, transaction authorization, and payment method management")
            Container(notification-service, "Notification Service", "", "Service responsible for sending order confirmations, shipping updates, and promotional communications")
            Container(order-database, "Order Database", "", "Primary database storing order information, customer details, and order history")
            Container(inventory-database, "Inventory Database", "", "Database storing product catalog, inventory levels, and stock management data")
            Container(payment-database, "Payment Database", "", "Secure database storing payment transactions, audit logs, and compliance records")
        }
    }

    Rel(customer,api-gateway,"Interacts With")
    Rel(admin,api-gateway,"Interacts With")
    Rel(api-gateway,order-service,"Connects To")
    Rel(api-gateway,inventory-service,"Connects To")
    Rel(order-service,order-database,"Connects To")
    Rel(order-service,payment-service,"Connects To")
    Rel(inventory-service,inventory-database,"Connects To")
    Rel(payment-service,payment-database,"Connects To")
    Rel(order-service,notification-service,"Connects To")
    Rel(api-gateway,notification-service,"Connects To")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="2")
```
## Nodes
    - [Customer](nodes/customer)
    - [Admin](nodes/admin)
    - [API Gateway](nodes/api-gateway)
    - [Order Service](nodes/order-service)
    - [Inventory Service](nodes/inventory-service)
    - [Payment Service](nodes/payment-service)
    - [Order Database](nodes/order-database)
    - [Inventory Database](nodes/inventory-database)
    - [Payment Database](nodes/payment-database)
    - [Notification Service](nodes/notification-service)
    - [E-Commerce Platform](nodes/ecommerce-platform)

## Relationships
    - [Customer Interacts Platform](relationships/customer-interacts-platform)
    - [Admin Interacts Platform](relationships/admin-interacts-platform)
    - [Gateway To Order Service](relationships/gateway-to-order-service)
    - [Gateway To Inventory Service](relationships/gateway-to-inventory-service)
    - [Order Service To Database](relationships/order-service-to-database)
    - [Order Service To Payment Service](relationships/order-service-to-payment-service)
    - [Inventory Service To Database](relationships/inventory-service-to-database)
    - [Payment Service To Database](relationships/payment-service-to-database)
    - [Order Service To Notification](relationships/order-service-to-notification)
    - [Gateway To Notification Service](relationships/gateway-to-notification-service)
    - [Platform Composition](relationships/platform-composition)


## Flows
     _No flows defined._

## Controls
  _No Controls defined._

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
                  <b>Owner</b>
              </td>
              <td>
                  matt@rocketstack.co
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Version</b>
              </td>
              <td>
                  1.0.0
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Created</b>
              </td>
              <td>
                  2025-11-17
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Description</b>
              </td>
              <td>
                  E-commerce order processing platform
                      </td>
          </tr>
          <tr>
              <td>
                  <b>Tags</b>
              </td>
              <td>
                  <ul>
                      <li>ecommerce</li>
                      <li>microservices</li>
                      <li>orders</li>
                  </ul>
              </td>
          </tr>
          </tbody>
      </table>
  </div>

## Adrs
  _No Adrs defined._
