import  db from '../Drizzle/db';
import { MaintenanceTable as maintenance } from '../Drizzle/schema';
import { eq } from 'drizzle-orm';

export const getMaintenances = async () => {
    return await db.select().from(maintenance);
};

export const createMaintenance = async (data: { carID: number; maintenanceDate: string; description: string; cost: string }) => {
    const [result] = await db
        .insert(maintenance)
        .values(data)
        .returning();
    return result;
};

export const updateMaintenance = async (id: number, data: { maintenanceDate?: string; description?: string; cost?: string }) => {
    const [result] = await db
        .update(maintenance)
        .set(data)
        .where(eq(maintenance.maintenanceID, id))
        .returning();
    return result;
};

export const deleteMaintenance = async (id: number) => {
    const [result] = await db
        .delete(maintenance)
        .where(eq(maintenance.maintenanceID, id))
        .returning();
    return result;
};