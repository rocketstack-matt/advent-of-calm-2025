module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home',
        },
        {
            type: 'category',
            label: 'Nodes',
            items: [
                'nodes/customer',
                'nodes/admin',
                'nodes/api-gateway',
                'nodes/order-service',
                'nodes/inventory-service',
                'nodes/payment-service',
                'nodes/order-database',
                'nodes/inventory-database',
                'nodes/payment-database',
                'nodes/notification-service',
                'nodes/ecommerce-platform'
            ],
        },
        {
            type: 'category',
            label: 'Relationships',
            items: [
                'relationships/customer-interacts-platform',
                'relationships/admin-interacts-platform',
                'relationships/gateway-to-order-service',
                'relationships/gateway-to-inventory-service',
                'relationships/order-service-to-database',
                'relationships/order-service-to-payment-service',
                'relationships/inventory-service-to-database',
                'relationships/payment-service-to-database',
                'relationships/order-service-to-notification',
                'relationships/gateway-to-notification-service',
                'relationships/platform-composition'
            ],
        },
    ]
};
