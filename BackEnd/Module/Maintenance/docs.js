/**
* @swagger
* tags:
*   name: Maintenance
*   description: Vehicle maintenance management
*/

/**
* @swagger
* /api/maintenance/:
*   post:
*     summary: Create a maintenance record
*     tags: [Maintenance]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             required:
*               - vehicleId
*               - title
*               - date
*               - mileage
*               - cost
*             properties:
*               vehicleId:
*                 type: string
*                 example: 68b6a123456789abcdef1234
*               title:
*                 type: string
*                 example: Engine oil change
*               type:
*                 type: string
*                 enum:
*                   - Maintenance
*                   - Repair
*                   - Oil Change
*                   - Tire
*                   - Battery
*                   - Other
*                 example: Oil Change
*               date:
*                 type: string
*                 format: date
*                 example: 2026-09-02
*               mileage:
*                 type: number
*                 example: 120000
*               cost:
*                 type: number
*                 example: 2500000
*               description:
*                 type: string
*                 example: Changed engine oil and oil filter
*               receiptImage:
*                 type: string
*                 format: binary
*     responses:
*       201:
*         description: Maintenance created successfully
*       400:
*         description: Validation error
*/

/**
* @swagger
* /api/maintenance/:
*   get:
*     summary: Get all maintenance records
*     tags: [Maintenance]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Maintenance records retrieved successfully
*/
/**
* @swagger
* /api/maintenance/{id}:
*   get:
*     summary: Get one maintenance record
*     tags: [Maintenance]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         example: 68b6a123456789abcdef1234
*     responses:
*       200:
*         description: Maintenance retrieved successfully
*       404:
*         description: Maintenance not found
*/

/**
* @swagger
* /api/maintenance/{id}:
*   put:
*     summary: Update maintenance record
*     tags: [Maintenance]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         example: 68b6a123456789abcdef1234
*     requestBody:
*       required: true
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             properties:
*               vehicleId:
*                 type: string
*                 example: 68b6a123456789abcdef1234
*               title:
*                 type: string
*                 example: Engine oil change
*               type:
*                 type: string
*                 enum:
*                   - Maintenance
*                   - Repair
*                   - Oil Change
*                   - Tire
*                   - Battery
*                   - Other
*               date:
*                 type: string
*                 format: date
*                 example: 2026-09-02
*               mileage:
*                 type: number
*                 example: 125000
*               cost:
*                 type: number
*                 example: 3000000
*               description:
*                 type: string
*                 example: Updated maintenance information
*               receiptImage:
*                 type: string
*                 format: binary
*     responses:
*       200:
*         description: Maintenance updated successfully
*       404:
*         description: Maintenance not found
*/

/**
* @swagger
* /api/maintenance/{id}:
*   delete:
*     summary: Delete maintenance record
*     tags: [Maintenance]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         example: 68b6a123456789abcdef1234
*     responses:
*       200:
*         description: Maintenance deleted successfully
*       404:
*         description: Maintenance not found
*/