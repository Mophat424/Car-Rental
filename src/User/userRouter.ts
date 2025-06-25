// import { Router } from 'express';
// import { signupHandler, loginHandler } from './userController';

// const router = Router();

// router.post('/signup', signupHandler);
// router.post('/login', loginHandler);

// export default router;



// import { Router } from 'express';
// import { signupHandler, loginHandler, verifyUserHandler } from './userController';

// const router = Router();

// router.post('/signup', signupHandler);
// router.post('/login', loginHandler);
// router.post('/verify', verifyUserHandler); // 👈 Add this line

// export default router;


import { Router } from 'express';
import { signupHandler, loginHandler, verifyUserHandler } from './userController';

const router = Router();

router.post('/signup', signupHandler);
router.post('/login', loginHandler);
router.post('/verify', verifyUserHandler);
// router.get('/my/bookings', authenticateToken, getMyBookings);
// router.get('/my/maintenance', authenticateToken, getMyMaintenance);

export default router;
























// import express, { Request, Response, Router } from 'express';
// import { signupHandler, loginHandler } from './userController';

// const router: Router = express.Router();

// router.post('/signup', signupHandler);
// router.post('/login', loginHandler);

// export default router;


// import { Router } from 'express';
// import { signupHandler, loginHandler } from './userController';

// const router = Router();

// router.post('/signup', signupHandler);
// router.post('/login', loginHandler);

// export default router;




