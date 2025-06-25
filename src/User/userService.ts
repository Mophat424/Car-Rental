// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService'; // Add this import

// // Use environment variable with runtime check
// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   // Check for existing user
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   // Hash password
//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   // Insert new user
//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//     })
//     .returning();

//   // Generate JWT token
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   // Send welcome email
//   await sendWelcomeEmail(data.email);

//   return { user, token };
// };

// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (!user) throw new Error('User not found');
//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));
//   return user;
// };



// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService';

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//     })
//     .returning();

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   try {
//     await sendWelcomeEmail(data.email);
//   } catch (error) {
//     console.error(`Failed to send welcome email to ${data.email}:`, error);
//   }

//   return { user, token };
// };

// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (!user) throw new Error('User not found');
//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));
//   return user;
// };
// 





// 


// 



// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService';

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   console.log('Starting signup for email:', data.email);
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//     })
//     .returning();

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   try {
//     await sendWelcomeEmail(data.email);
//   } catch (error: any) {
//     console.error(`Failed to send welcome email to ${data.email}:`, error.message);
//   }

//   console.log('Signup completed for user:', user.email);
//   return { user, token };
// };

// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (!user) throw new Error('User not found');
//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));
//   return user;
// };





// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService';

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   console.log('Starting signup for email:', data.email);
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//     })
//     .returning();

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   try {
//     await sendWelcomeEmail(data.email);
//   } catch (error: any) {
//     console.error(`Failed to send welcome email to ${data.email}:`, {
//       message: error.message,
//       stack: error.stack,
//     });
//     // Do not throw the error, let signup complete
//   }

//   console.log('Signup completed for user:', user.email);
//   return { user, token };
// };

// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (!user) throw new Error('User not found');
//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));
//   return user;
// };

// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService';

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   console.log('Starting signup for email:', data.email);
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);

//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//     })
//     .returning();

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   try {
//     await sendWelcomeEmail(data.email);
//     console.log('Welcome email sent successfully to:', data.email);
//   } catch (error: any) {
//     console.error(`Failed to send welcome email to ${data.email}:`, {
//       message: error.message,
//       code: error.code || 'N/A',
//       response: error.response || 'N/A',
//       responseCode: error.responseCode || 'N/A',
//       stack: error.stack,
//     });
//     // Do not throw the error, let signup complete
//   }

//   console.log('Signup completed for user:', user.email);
//   return { user, token };
// };

// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));
//   if (!user) throw new Error('User not found');
//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');
//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));
//   return user;
// };


// import db from '../Drizzle/db';
// import { UsersTable } from '../Drizzle/schema';
// import { eq } from 'drizzle-orm';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { sendWelcomeEmail } from '../services/emailService';

// if (!process.env.JWT_SECRET) {
//   throw new Error('JWT_SECRET is not defined in .env');
// }
// const JWT_SECRET = process.env.JWT_SECRET;

// /**
//  * Generates a 6-digit numeric verification code
//  */
// const generateCode = (): string => Math.floor(100000 + Math.random() * 900000).toString();

// /**
//  * Signup a new user and email verification code
//  */
// export const signup = async (data: { email: string; password: string; role?: string }) => {
//   const existingUser = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));

//   if (existingUser.length > 0) {
//     throw new Error('User already exists');
//   }

//   const hashedPassword = await bcrypt.hash(data.password, 10);
//   const verificationCode = generateCode();

//   const [user] = await db
//     .insert(UsersTable)
//     .values({
//       email: data.email,
//       password: hashedPassword,
//       role: data.role || 'customer',
//       isVerified: false,
//       verificationCode,
//     })
//     .returning();

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//   try {
//     await sendWelcomeEmail(data.email, verificationCode);
//     console.log('Verification code sent to:', data.email);
//   } catch (error: any) {
//     console.error(`Failed to send verification email to ${data.email}:`, {
//       message: error.message,
//       code: error.code || 'N/A',
//       response: error.response || 'N/A',
//       responseCode: error.responseCode || 'N/A',
//       stack: error.stack,
//     });
//     // Don't throw error here to allow signup to complete
//   }

//   return { user, token };
// };

// /**
//  * Verify a user's email with a code
//  */
// export const verifyUser = async (email: string, code: string) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, email));

//   if (!user) throw new Error('User not found');
//   if (user.isVerified) throw new Error('User is already verified');
//   if (user.verificationCode !== code) throw new Error('Invalid verification code');

//   await db
//     .update(UsersTable)
//     .set({ isVerified: true, verificationCode: null })
//     .where(eq(UsersTable.email, email));
// };

// /**
//  * Login user (must be verified)
//  */
// export const login = async (data: { email: string; password: string }) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.email, data.email));

//   if (!user) throw new Error('User not found');

//   const isPasswordValid = await bcrypt.compare(data.password, user.password);
//   if (!isPasswordValid) throw new Error('Invalid password');

//   if (!user.isVerified) {
//     throw new Error('Please verify your account before logging in');
//   }

//   const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };

// /**
//  * Get user by ID
//  */
// export const getUserById = async (id: number) => {
//   const [user] = await db
//     .select()
//     .from(UsersTable)
//     .where(eq(UsersTable.id, id));

//   return user;
// };

import db from '../Drizzle/db';
import { UsersTable, CustomerTable } from '../Drizzle/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from '../services/emailService';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in .env');
}
const JWT_SECRET = process.env.JWT_SECRET;

// Generate 6-digit numeric code
const generateCode = (): string =>
  Math.floor(100000 + Math.random() * 900000).toString();

// ✳️ SIGNUP FUNCTION
export const signup = async (data: {
  email: string;
  password: string;
  role?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: string;
}) => {
  const existingUser = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.email, data.email));

  if (existingUser.length > 0) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const verificationCode = generateCode();

  const [newUser] = await db
    .insert(UsersTable)
    .values({
      email: data.email,
      password: hashedPassword,
      role: data.role || 'customer',
      isVerified: false,
      verificationCode,
    })
    .returning();

  // 👇 Automatically create a Customer record
  await db.insert(CustomerTable).values({
    userID: newUser.id,
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    email: data.email,
    phoneNumber: data.phoneNumber || '',
    address: data.address || '',
  });

  const token = jwt.sign({ id: newUser.id, role: newUser.role }, JWT_SECRET, {
    expiresIn: '1h',
  });

  try {
    await sendWelcomeEmail(data.email, verificationCode);
    console.log('Verification code sent to:', data.email);
  } catch (error: any) {
    console.error(`Failed to send verification email to ${data.email}:`, {
      message: error.message,
      code: error.code || 'N/A',
      response: error.response || 'N/A',
      responseCode: error.responseCode || 'N/A',
      stack: error.stack,
    });
  }

  return { user: newUser, token };
};

// ✳️ LOGIN FUNCTION
export const login = async (data: { email: string; password: string }) => {
  const [user] = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.email, data.email));

  if (!user) throw new Error('User not found');

  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) throw new Error('Invalid password');

  if (!user.isVerified) {
    throw new Error('Please verify your account before logging in');
  }

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token, user };
};

// ✳️ VERIFY FUNCTION
export const verifyUser = async (email: string, code: string) => {
  const [user] = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.email, email));

  if (!user) throw new Error('User not found');
  if (user.isVerified) throw new Error('User is already verified');
  if (user.verificationCode !== code) throw new Error('Invalid verification code');

  await db
    .update(UsersTable)
    .set({ isVerified: true, verificationCode: null })
    .where(eq(UsersTable.email, email));
};

// ✳️ Get user by ID
export const getUserById = async (id: number) => {
  const [user] = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.id, id));

  return user;
};
