/**
* @swagger
* tags:
*   name: Vehicle
*   description: Vehicle management APIs
*/

/**
* @swagger
* /api/vehicle:
*   post:
*     tags:
*       - Vehicle
*     summary: Create a new vehicle
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             required:
*               - brand
*               - model
*               - year
*             properties:
*               brand:
*                 type: string
*                 example: Toyota
*               model:
*                 type: string
*                 example: Corolla
*               year:
*                 type: number
*                 example: 2021
*               color:
*                 type: string
*                 example: White
*               licensePlate:
*                 type: string
*                 example: 12A34567
*               mileage:
*                 type: number
*                 example: 120000
*               image:
*                 type: string
*                 format: binary
*     responses:
*       201:
*         description: Vehicle created successfully
*       400:
*         description: Invalid vehicle data
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/vehicle:
*   get:
*     tags:
*       - Vehicle
*     summary: Get all user vehicles
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Vehicles retrieved successfully
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/vehicle/{id}:
*   get:
*     tags:
*       - Vehicle
*     summary: Get one vehicle
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*         example: 66c123456789abcdef123456
*     responses:
*       200:
*         description: Vehicle retrieved successfully
*       404:
*         description: Vehicle not found
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/vehicle/{id}:
*   put:
*     tags:
*       - Vehicle
*     summary: Update a vehicle
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               brand:
*                 type: string
*                 example: Toyota
*               model:
*                 type: string
*                 example: Corolla
*               year:
*                 type: number
*                 example: 2022
*               color:
*                 type: string
*                 example: Black
*               licensePlate:
*                 type: string
*                 example: 12A34567
*               mileage:
*                 type: number
*                 example: 125000
*     responses:
*       200:
*         description: Vehicle updated successfully
*       404:
*         description: Vehicle not found
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/vehicle/{id}:
*   delete:
*     tags:
*       - Vehicle
*     summary: Delete a vehicle
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: Vehicle deleted successfully
*       404:
*         description: Vehicle not found
*       401:
*         description: Unauthorized
*/