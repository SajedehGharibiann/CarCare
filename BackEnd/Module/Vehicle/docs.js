/**
 * @swagger
 * tags:
 *   name: Vehicle
 *   description: Vehicle management
 */

/**
 * @swagger
 * /api/vehicle/:
 *   post:
 *     summary: Create a new vehicle
 *     tags: [Vehicle]
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
 *               - color
 *               - year
 *               - plateNumber
 *               - mileage
 *             properties:
 *               brand:
 *                 type: string
 *                 example: Toyota
 *               model:
 *                 type: string
 *                 example: Corolla
 *               color:
 *                 type: string
 *                 example: White
 *               year:
 *                 type: number
 *                 example: 2021
 *               plateNumber:
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
 *         description: Validation error
 */

/**
 * @swagger
 * /api/vehicle/:
 *   get:
 *     summary: Get all user's vehicles
 *     tags: [Vehicle]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Vehicles retrieved successfully
 */

/**
 * @swagger
 * /api/vehicle/{id}:
 *   get:
 *     summary: Get one vehicle
 *     tags: [Vehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 65f123456789abcdef123456
 *     responses:
 *       200:
 *         description: Vehicle retrieved successfully
 *       404:
 *         description: Vehicle not found
 */

/**
 * @swagger
 * /api/vehicle/{id}:
 *   put:
 *     summary: Update vehicle
 *     tags: [Vehicle]
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
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               model:
 *                 type: string
 *               color:
 *                 type: string
 *               year:
 *                 type: number
 *               plateNumber:
 *                 type: string
 *               mileage:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Vehicle updated successfully
 *       404:
 *         description: Vehicle not found
 */

/**
 * @swagger
 * /api/vehicle/{id}:
 *   delete:
 *     summary: Delete vehicle
 *     tags: [Vehicle]
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
 */
