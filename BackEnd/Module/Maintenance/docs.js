/**
 * @swagger
 * tags:
 *   name: Maintenance
 *   description: Vehicle maintenance APIs
 */

/**
 * @swagger
 * /api/maintenance:
 *   post:
 *     tags:
 *       - Maintenance
 *     summary: Create a maintenance record
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
 *               - type
 *               - date
 *             properties:
 *               vehicleId:
 *                 type: string
 *                 example: 66c123456789abcdef123456
 *               title:
 *                 type: string
 *                 example: Oil Change
 *               type:
 *                 type: string
 *                 example: Oil
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-08-28
 *               mileage:
 *                 type: number
 *                 example: 120000
 *               cost:
 *                 type: number
 *                 example: 1500000
 *               description:
 *                 type: string
 *                 example: Engine oil and filter changed
 *               receiptImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Maintenance created successfully
 *       400:
 *         description: Invalid maintenance data
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /api/maintenance:
 *   get:
 *     tags:
 *       - Maintenance
 *     summary: Get all maintenance records
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Maintenance records retrieved successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/maintenance/{id}:
 *   get:
 *     tags:
 *       - Maintenance
 *     summary: Get one maintenance record
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
 *         description: Maintenance record retrieved successfully
 *       404:
 *         description: Maintenance record not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /api/maintenance/{id}:
 *   put:
 *     tags:
 *       - Maintenance
 *     summary: Update maintenance record
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
 *               title:
 *                 type: string
 *                 example: Oil Change
 *               type:
 *                 type: string
 *                 example: Oil
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-09-01
 *               mileage:
 *                 type: number
 *                 example: 125000
 *               cost:
 *                 type: number
 *                 example: 1600000
 *               description:
 *                 type: string
 *                 example: Oil and filter replaced
 *     responses:
 *       200:
 *         description: Maintenance updated successfully
 *       404:
 *         description: Maintenance record not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/maintenance/{id}:
 *   delete:
 *     tags:
 *       - Maintenance
 *     summary: Delete maintenance record
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
 *         description: Maintenance deleted successfully
 *       404:
 *         description: Maintenance record not found
 *       401:
 *         description: Unauthorized
 */
