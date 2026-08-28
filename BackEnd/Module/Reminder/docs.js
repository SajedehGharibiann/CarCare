/**
 * @swagger
 * tags:
 *   name: Reminder
 *   description: Reminder management APIs
 */

/**
 * @swagger
 * /api/reminder:
 *   post:
 *     tags:
 *       - Reminder
 *     summary: Create a reminder
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - date
 *               - vehicleId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Oil Change
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-09-15
 *               description:
 *                 type: string
 *                 example: Change engine oil
 *               vehicleId:
 *                 type: string
 *                 example: 66c123456789abcdef123456
 *     responses:
 *       201:
 *         description: Reminder created successfully
 *       400:
 *         description: Invalid reminder data
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /api/reminder:
 *   get:
 *     tags:
 *       - Reminder
 *     summary: Get all reminders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reminders retrieved successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/reminder/{id}:
 *   get:
 *     tags:
 *       - Reminder
 *     summary: Get one reminder
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
 *         description: Reminder retrieved successfully
 *       404:
 *         description: Reminder not found
 *       401:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /api/reminder/{id}:
 *   put:
 *     tags:
 *       - Reminder
 *     summary: Update reminder
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
 *                 example: Insurance Renewal
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-10-01
 *               description:
 *                 type: string
 *                 example: Renew car insurance
 *     responses:
 *       200:
 *         description: Reminder updated successfully
 *       404:
 *         description: Reminder not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/reminder/{id}:
 *   delete:
 *     tags:
 *       - Reminder
 *     summary: Delete reminder
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
 *         description: Reminder deleted successfully
 *       404:
 *         description: Reminder not found
 *       401:
 *         description: Unauthorized
 */
