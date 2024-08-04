import express from 'express'

import {login} from '../controllers/auth.js'
import {updateChanelData} from '../controllers/chanel.js'
import { getAllChanels } from '../controllers/chanel.js'

const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChanelData)
routes.get('/getAllChanels',getAllChanels)


export default routes;


// //updated to include mongodb for allocate points:
// import express from 'express';
// import {login} from '../controllers/auth.js'
// import { updateUserPoints } from '../controllers/user.js'; // Import the new controller function
// import { updateChanelData } from '../controllers/chanel.js';
// import {getAllChanels} from '../controllers/chanel.js'
// // import { updateUserPoints } from '../controllers/user.js'; // Import the new controller

// const router = express.Router();

// router.post('/login', login);
// router.patch('/update/:id', updateChanelData);
// // router.patch('/updatePoints/:id', updateUserPoints);
// router.get('/getAllChanels', getAllChanels);
// // router.patch('/users/:id/points', updateUserPoints); // Add the new route for updating points
// router.patch("/:id/points", updateUserPoints);

// export default router;


// //update on 17/07
// import express from 'express';
// import { allocatePoints } from '../controllers/user.js';
// import {login} from '../controllers/auth.js'
// import {getAllChanels} from '../controllers/chanel.js'
// const router = express.Router();

// router.post('/login', login);

// router.post('/allocatePoints', allocatePoints);

// export default router;
