/**
* @swagger
* tags:
*   name: User
*   description: User management APIs
*/

/**
* @swagger
* /api/user/:
*   get:
*     tags:
*       - User
*     summary: Get current user profile
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: User profile retrieved successfully
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/user/:
*   put:
*     tags:
*       - User
*     summary: Update user profile
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               firstName:
*                 type: string
*                 example: Sajede
*               lastName:
*                 type: string
*                 example: Gharibi
*               phoneNumber:
*                 type: string
*                 example: 09123456789
*     responses:
*       200:
*         description: Profile updated successfully
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/user/profile/image:
*   put:
*     tags:
*       - User
*     summary: Upload profile image
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             required:
*               - profileImage
*             properties:
*               profileImage:
*                 type: string
*                 format: binary
*     responses:
*       200:
*         description: Profile image uploaded successfully
*       400:
*         description: Image is required
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/user/profile/image:
*   delete:
*     tags:
*       - User
*     summary: Delete profile image
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Profile image deleted successfully
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/user/password:
*   put:
*     tags:
*       - User
*     summary: Change user password
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - currentPassword
*               - newPassword
*             properties:
*               currentPassword:
*                 type: string
*                 example: 12345678
*               newPassword:
*                 type: string
*                 example: 87654321
*     responses:
*       200:
*         description: Password changed successfully
*       400:
*         description: Invalid password
*       401:
*         description: Unauthorized
*/

/**
* @swagger
* /api/user/account:
*   delete:
*     tags:
*       - User
*     summary: Delete user account
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: Account deleted successfully
*       401:
*         description: Unauthorized
*/