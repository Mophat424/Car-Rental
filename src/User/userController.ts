import { Request, Response } from 'express';
import { signup, login } from './userService';

export const signupHandler = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const { user, token } = await signup({ email, password, role });
    res.status(201).json({ message: 'User created', user, token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await login({ email, password });
    res.status(200).json({ token, user });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  } 
};




