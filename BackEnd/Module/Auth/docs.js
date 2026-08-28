/**
* @swagger
* tags:
*   name: Auth
*   description: Authentication APIs
*/

/**
* @swagger
* /api/auth/register:
*   post:
*     tags:
*       - Auth
*     summary: Register a new user
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - firstName
*               - lastName
*               - email
*               - password
*               - phoneNumber
*             properties:
*               firstName:
*                 type: string
*                 example: Sajede
*               lastName:
*                 type: string
*                 example: Gharibi
*               email:
*                 type: string
*                 example: sajede@gmail.com
*               password:
*                 type: string
*                 example: 12345678
*               phoneNumber:
*                 type: string
*                 example: 09123456789
*     responses:
*       201:
*         description: User registered successfully
*       400:
*         description: Required fields are missing
*       409:
*         description: Email already exists
*/

/**
* @swagger
* /api/auth/login:
*   post:
*     tags:
*       - Auth
*     summary: Login user
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - email
*               - password
*             properties:
*               email:
*                 type: string
*                 example: sajede@gmail.com
*               password:
*                 type: string
*                 example: 12345678
*     responses:
*       200:
*         description: User logged in successfully
*       400:
*         description: Email and password are required
*       401:
*         description: Invalid email or password
*/