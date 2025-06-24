// import { Request, Response } from 'express';
// import { signup, login } from './userService';

// export const signupHandler = async (req: Request, res: Response) => {
//   try {
//     const { email, password, role } = req.body;
//     const { user, token } = await signup({ email, password, role });
//     res.status(201).json({ message: 'User created', user, token });
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const loginHandler = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const { token, user } = await login({ email, password });
//     res.status(200).json({ token, user });
//   } catch (error: any) {
//     res.status(401).json({ error: error.message });
//   } 
// };


// import { Request, Response } from 'express';
// import { signup, login, verifyUser } from './userService';

// export const signupHandler = async (req: Request, res: Response) => {
//   try {
//     const { email, password, role } = req.body;
//     const { user, token } = await signup({ email, password, role });
//     res.status(201).json({ message: 'User created, verification code sent.', user, token });
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };

// export const loginHandler = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const { token, user } = await login({ email, password });

//     if (!user.isVerified) {
//       return res.status(403).json({ error: 'Email not verified. Please verify before logging in.' });
//     }

//     res.status(200).json({ token, user });
//   } catch (error: any) {
//     res.status(401).json({ error: error.message });
//   } 
// };

// export const verifyUserHandler = async (req: Request, res: Response) => {
//   try {
//     const { email, code } = req.body;
//     await verifyUser(email, code);
//     res.status(200).json({ message: 'Email successfully verified. You can now log in.' });
//   } catch (error: any) {
//     res.status(400).json({ error: error.message });
//   }
// };


import { Request, Response } from 'express';
import { signup, login, verifyUser } from './userService';

export const signupHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;
    const { user, token } = await signup({ email, password, role });
    res.status(201).json({ message: 'User created, verification code sent.', user, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { token, user } = await login({ email, password });

    if (!user.isVerified) {
      res.status(403).json({ error: 'Email not verified. Please verify before logging in.' });
      return;
    }

    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const verifyUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, code } = req.body;
    await verifyUser(email, code);
    res.status(200).json({ message: 'Email successfully verified. You can now log in.' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
